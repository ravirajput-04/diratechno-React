import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { API_CONFIG } from "../config/apiConfig";
import Cookies from "../components/Cookies";


type FormValues = {
  full_name: string;
  email: string;
  phone: string;
  position: string;
  resume?: FileList;
  cover_letter?: FileList;
};

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const validationSchema = Yup.object().shape({
  full_name: Yup.string()
    .required("Full Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
    .test(
      "min-letters",
      "Name must have at least 3 letters",
      (value) => (value?.replace(/[^A-Za-z]/g, "").length ?? 0) >= 3
    )
    .max(50, "Name cannot exceed 50 characters")
    .trim(),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .max(100, "Email cannot exceed 100 characters")
    .trim(),
  phone: Yup.string()
    .required("Phone number is required")
    .test("is-valid-phone", "Please enter a valid phone number", (value) => {
      if (!value) return false;
      return isValidPhoneNumber(value);
    }),
  position: Yup.string()
    .required("Please select a position")
    .oneOf(
      ["react-js-developer", "php-laravel-developer", "ui-ux-designer"],
      "Please select a valid position"
    ),
  resume: Yup.mixed<FileList>()
    .required("Resume is required")
    .test("fileSize", "File must be less than 2 MB", (value) => !value || value[0]?.size <= MAX_FILE_SIZE)
    .test("fileType", "Only PDF, DOC, DOCX files are allowed", (value) =>
      !value || ALLOWED_FILE_TYPES.includes(value[0]?.type)
    ),
  cover_letter: Yup.mixed<FileList>()
    .notRequired()
    .test("fileSize", "File must be less than 2 MB", (value) => !value || value[0]?.size <= MAX_FILE_SIZE)
    .test("fileType", "Only PDF, DOC, DOCX files are allowed", (value) =>
      !value || ALLOWED_FILE_TYPES.includes(value[0]?.type)
    ),
});

function buildFormData(data: FormValues, source: string, recaptchaToken?: string): FormData {
  const formData = new FormData();
  formData.append("full_name", data.full_name.trim());
  formData.append("email", data.email.trim());
  formData.append("phone", data.phone);
  formData.append("position", data.position);
  formData.append("source", source);
  if (recaptchaToken) {
    formData.append("recaptchaToken", recaptchaToken);
  }
  if (data.resume && data.resume.length > 0) formData.append("resume", data.resume[0]);
  if (data.cover_letter && data.cover_letter.length > 0) formData.append("cover_letter", data.cover_letter[0]);
  return formData;
}

function ApplyForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema) as any,
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  // Get reCAPTCHA hook - executeRecaptcha will be undefined if provider is not rendered
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [loading, setLoading] = useState(false);
  const [positionFromUrl, setPositionFromUrl] = useState<string | null>(null);

  const phoneValue = watch("phone");

  // Pre-fill position from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPosition = urlParams.get("position");
    if (selectedPosition) {
      setValue("position", selectedPosition);
      setPositionFromUrl(selectedPosition);
    }
  }, [setValue]);

  const onSubmit = useCallback(
    async (data: FormValues) => {
      try {
        setLoading(true);

        // Execute reCAPTCHA v3 - Required for production
        let recaptchaToken: string | undefined;
        
        if (!executeRecaptcha) {
          const errorMsg = import.meta.env.PROD
            ? "Security verification is not available. Please contact support."
            : "reCAPTCHA is not configured. Please configure VITE_RECAPTCHA_SITE_KEY.";
          
          if (import.meta.env.PROD) {
            toast.error(errorMsg, {
              position: "top-center",
              autoClose: 5000,
              theme: "colored",
            });
          } else {
            console.warn(errorMsg);
          }
          setLoading(false);
          return;
        }

        try {
          // Small delay to ensure reCAPTCHA script is fully loaded
          await new Promise(resolve => setTimeout(resolve, 100));
          
          recaptchaToken = await executeRecaptcha("submit_application");
          
          if (!recaptchaToken || recaptchaToken.trim() === "") {
            throw new Error("reCAPTCHA returned an empty token");
          }
          
          if (import.meta.env.DEV) {
            console.log("reCAPTCHA token obtained successfully");
          }
        } catch (recaptchaError: any) {
          const errorMsg = "Security verification failed. Please refresh the page and try again.";
          
          if (import.meta.env.DEV) {
            console.error("reCAPTCHA error:", recaptchaError?.message || recaptchaError);
          }
          
          toast.error(errorMsg, {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
          });
          setLoading(false);
          return;
        }

        // Extract page name from URL for source field
        const getSourceFromUrl = () => {
          const path = window.location.pathname;
          if (path === "/" || path === "") return "home";
          return path.replace(/^\//, "").replace(/\//g, "-") || "home";
        };

        const source = getSourceFromUrl();
        const formData = buildFormData(data, source, recaptchaToken);

        if (import.meta.env.DEV) {
          console.log("Sending payload:", {
            full_name: data.full_name.trim(),
            email: data.email.trim(),
            phone: data.phone,
            position: data.position,
            source: source,
            resume: data.resume?.[0]?.name,
            cover_letter: data.cover_letter?.[0]?.name,
            recaptchaToken: recaptchaToken ? "present" : "missing",
          });
          console.log("API URL:", API_CONFIG.CAREER_FORM.getUrl());
        }

        const apiUrl = API_CONFIG.CAREER_FORM.getUrl();
        const response = await axios.post(apiUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
          timeout: 30000,
        });

        if (import.meta.env.DEV) {
          console.log("Response status:", response.status);
        }

        if (response.status === 200 || response.status === 201) {
          toast.success(
            "Thank you! Your application has been submitted successfully. We'll get back to you soon.",
            {
              position: "top-center",
              autoClose: 5000,
              theme: "colored",
            }
          );
          reset();
        }
      } catch (error) {
        let errorMessage =
          "Unable to submit your application. Please try again later.";

        if (axios.isAxiosError(error)) {
          console.error("Axios Error Details:", {
            message: error.message,
            response: error.response,
            request: error.request,
            config: error.config,
          });

          if (error.response) {
            // Server responded with error status
            console.error("Response Status:", error.response.status);
            console.error("Response Data:", error.response.data);
            console.error("Response Headers:", error.response.headers);

            const responseData = error.response.data as
              | { message?: string; error?: string }
              | string;

            if (typeof responseData === "object" && responseData !== null) {
              errorMessage =
                responseData.message || responseData.error || errorMessage;
            } else if (typeof responseData === "string" && responseData) {
              errorMessage = responseData;
            }
          } else if (error.request) {
            // Request made but no response received
            console.error("No response received. Request:", error.request);
            errorMessage =
              "Unable to connect to the server. Please check your internet connection and try again.";
          } else {
            // Request setup error
            console.error("Request setup error:", error.message);
            errorMessage =
              "An error occurred while submitting your application. Please try again.";
          }
        } else {
          console.error("Non-axios error:", error);
        }

        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 5000,
          theme: "colored",
        });
      } finally {
        setLoading(false);
      }
    },
    [reset, executeRecaptcha]
  );

  return (
    <div id="main-wrapper">
      <div className="site-wrapper-reveal">
        <div className="blue-header">
          <h1>Join Our Team</h1>
          <p>Apply now to be part of Dira Techno and help us build innovative solutions for businesses worldwide.</p>
        </div>

        <div className="all-services-container">
          <form className="job-application-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              {/* Full Name */}
              <div className="col-md-6 mb-4">
                <label className="form-label"><i className="fas fa-user" /> Full Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.full_name ? "is-invalid" : ""}`}
                  {...register("full_name")}
                  placeholder="Enter your full name"
                />
                {errors.full_name && <div className="invalid-feedback">{errors.full_name.message}</div>}
              </div>

              {/* Email */}
              <div className="col-md-6 mb-4">
                <label className="form-label"><i className="fas fa-envelope" /> Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  {...register("email")}
                  placeholder="Enter your email"
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              {/* Phone */}
              <div className="col-md-6 mb-4">
                <label className="form-label"><i className="fas fa-phone-alt" /> Phone</label>
                <div className={errors.phone ? "phone-input-error" : ""}>
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={phoneValue}
                    onChange={(value) => setValue("phone", value || "", { shouldValidate: true })}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                <style>{`
                  .col-md-6 .PhoneInput {
                    width: 100%;
                  }
                  .col-md-6 .PhoneInputInput {
                    width: 100%;
                    padding: 12px 15px;
                    border: 1px solid #ced4da;
                    border-radius: 4px;
                    font-size: 14px;
                    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                  }
                  .phone-input-error .PhoneInputInput {
                    border-color: #dc3545 !important;
                  }
                  .col-md-6 .PhoneInputInput:focus {
                    outline: none;
                    border-color: #80bdff;
                    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
                  }
                  .col-md-6 .PhoneInputCountry {
                    margin-right: 8px;
                  }
                `}</style>
              </div>

              {/* Position */}
              <div className="col-md-6 mb-4">
                <label className="form-label"><i className="fas fa-briefcase" /> Position Applied For</label>
                <select
                  className={`form-control ${errors.position ? "is-invalid" : ""}`}
                  {...register("position")}
                  disabled={!!positionFromUrl}
                >
                  <option value="">Select Position</option>
                  <option value="react-js-developer">React JS Developer</option>
                  <option value="php-laravel-developer">PHP/Laravel Developer</option>
                  <option value="ui-ux-designer">UI/UX Designer</option>
                </select>
                {errors.position && <div className="invalid-feedback">{errors.position.message}</div>}
              </div>

              {/* Resume */}
              <div className="col-md-12 mb-4">
                <label className="form-label"><i className="fas fa-file-upload" /> Upload Resume</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className={`form-control ${errors.resume ? "is-invalid" : ""}`}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue("resume", e.target.files ?? undefined, { shouldValidate: true })
                  }
                />
                {errors.resume && <div className="invalid-feedback">{errors.resume.message}</div>}
                <small className="text-muted">Allowed formats: PDF, DOC, DOCX | Max size: 2 MB</small>
              </div>

              {/* Cover Letter */}
              <div className="col-md-12 mb-4">
                <label className="form-label"><i className="fas fa-file-upload" /> Upload Cover Letter (Optional)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className={`form-control ${errors.cover_letter ? "is-invalid" : ""}`}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue("cover_letter", e.target.files ?? undefined, { shouldValidate: true })
                  }
                />
                {errors.cover_letter && <div className="invalid-feedback">{errors.cover_letter.message}</div>}
                <small className="text-muted">Allowed formats: PDF, DOC, DOCX | Max size: 2 MB</small>
              </div>

              {/* Submit */}
              <div className="col-md-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={loading || isSubmitting}
                  style={{
                    opacity: loading || isSubmitting ? 0.6 : 1,
                    cursor: loading || isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {loading || isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </div>
          </form>
        </div>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          pauseOnHover
          closeOnClick
          rtl={false}
          theme="colored"
          style={{
            marginTop: "80px", // Adjust this value based on your navbar height
          }}
        />
        <Cookies />
      </div>
    </div>
  );
}

export default ApplyForm;
