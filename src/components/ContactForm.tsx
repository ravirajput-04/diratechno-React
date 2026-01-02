import { useCallback, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_CONFIG } from "../config/apiConfig";

interface ContactFormValues {
  name: string;
  email: string;
  department: string;
  description: string;
}

const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
      .test(
        "min-letters",
        "Name must have at least 3 letters",
        (value) => (value?.replace(/[^A-Za-z]/g, "").length ?? 0) >= 3
      )
      .max(50, "Name cannot exceed 50 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    department: yup.string().required("Please select a department"),
    description: yup
      .string()
      .required("Description is required")
      .test(
        "min-words",
        "Description must contain at least 5 words",
        (value) => (value?.trim().split(/\s+/).length ?? 0) >= 5
      )
      .max(1000, "Description cannot exceed 1000 characters"),
  })
  .required();

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactFormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      department: "",
      description: "",
    },
  });

  const onSubmit = useCallback(
    async (data: ContactFormValues) => {
      try {
        setLoading(true);

        // Extract page name from URL for source field
        const getSourceFromUrl = () => {
          const path = window.location.pathname;
          if (path === "/" || path === "") return "home";
          return path.replace(/^\//, "").replace(/\//g, "-") || "home";
        };

        const payload = {
          name: data.name.trim(),
          email: data.email.trim(),
          department: data.department.trim(),
          description: data.description.trim(),
          source: getSourceFromUrl(),
        };

        console.log("Sending payload:", payload);
        console.log("API URL:", API_CONFIG.CONTACT_FORM.getUrl());

        const apiUrl = API_CONFIG.CONTACT_FORM.getUrl();
        const response = await axios.post(apiUrl, payload, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          timeout: 30000,
        });

        console.log("Response status:", response.status);
        console.log("Response data:", response.data);

        if (response.status === 200 || response.status === 201) {
          toast.success(
            "Thank you! Your message has been sent successfully. We'll get back to you soon.",
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
          "Unable to send your message. Please try again later.";

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
              "An error occurred while sending your message. Please try again.";
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
    [reset]
  );

  return (
    <>
      <div className="contact-form-service-wrap">
        <div className="contact-title text-center section-space--mb_40">
          <h3 className="mb-10">Need a hand?</h3>
          <p className="text">
            Reach out to the world's most reliable IT services.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="contact-form__two">
            <div className="contact-input">
              <div className="contact-inner">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  className={`form-control ${
                    errors.name ? "border-danger" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </div>
              <div className="contact-inner">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  {...register("email")}
                  className={`form-control ${
                    errors.email ? "border-danger" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="contact-select">
              <div className="form-item contact-inner">
                <span className="inquiry">
                  <select
                    {...register("department")}
                    className={`form-control ${
                      errors.department ? "border-danger" : ""
                    }`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Department
                    </option>
                    <option value="DevOps & Cloud Services">
                      DevOps & Cloud Services
                    </option>
                    <option value="Cloud Consulting & Managed Services">
                      Cloud Consulting & Managed Services
                    </option>
                    <option value="Web Application Development">
                      Web Application Development
                    </option>
                    <option value="Mobile Application Development">
                      Mobile Application Development
                    </option>
                    <option value="Agency Partnership">
                      Agency Partnership
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                  {errors.department && (
                    <p className="text-danger">{errors.department.message}</p>
                  )}
                </span>
              </div>
            </div>

            <div className="contact-inner contact-message">
              <textarea
                placeholder="Please describe what you need."
                {...register("description")}
                className={`form-control ${
                  errors.description ? "border-danger" : ""
                }`}
              />
              {errors.description && (
                <p className="text-danger">{errors.description.message}</p>
              )}
            </div>

            <div className="comment-submit-btn">
              <button
                className="ht-btn ht-btn-md"
                type="submit"
                disabled={loading || isSubmitting || !isValid}
                style={{
                  opacity: loading || isSubmitting || !isValid ? 0.6 : 1,
                  cursor:
                    loading || isSubmitting || !isValid
                      ? "not-allowed"
                      : "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {loading || isSubmitting ? "Sending..." : "Send message"}
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
    </>
  );
};

export default ContactForm;

