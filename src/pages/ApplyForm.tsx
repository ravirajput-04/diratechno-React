import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CallToAction from "../components/CallToAction";
import Cookies from "../components/Cookies";


type FormValues = {
  full_name: string;
  email: string;
  phone: string;
  position: string;
  resume?: FileList;
  cover_letter?: string;
};

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_COVER_LETTER_LENGTH = 500;

const validationSchema = Yup.object().shape({
  full_name: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  position: Yup.string().required("Please select a position"),
  resume: Yup.mixed<FileList>()
    .required("Resume is required")
    .test("fileSize", "File must be less than 2 MB", (value) => !value || value[0]?.size <= MAX_FILE_SIZE)
    .test("fileType", "Only PDF, DOC, DOCX files are allowed", (value) =>
      !value || ALLOWED_FILE_TYPES.includes(value[0]?.type)
    ),
  cover_letter: Yup.string().max(MAX_COVER_LETTER_LENGTH, `Max ${MAX_COVER_LETTER_LENGTH} characters`).notRequired(),
});

function buildFormData(data: FormValues): FormData {
  const formData = new FormData();
  formData.append("full_name", data.full_name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("position", data.position);
  if (data.resume && data.resume.length > 0) formData.append("resume", data.resume[0]);
  if (data.cover_letter) formData.append("cover_letter", data.cover_letter);
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
  });

  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [positionFromUrl, setPositionFromUrl] = useState<string | null>(null);

  const coverLetterValue = watch("cover_letter") || "";
  const coverLetterLength = coverLetterValue.length;

  // Pre-fill position from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPosition = urlParams.get("position");
    if (selectedPosition) {
      setValue("position", selectedPosition);
      setPositionFromUrl(selectedPosition);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setServerMessage(null);
    setServerError(null);

    try {
      const formData = buildFormData(data);
      const response = await fetch("/api/apply", { method: "POST", body: formData });
      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(result.message || "Something went wrong.");
        return;
      }

      setServerMessage(result.message || "🎉 Application submitted!");
      reset();
    } catch (error) {
      console.error(error);
      setServerError("Network error. Please try again later.");
    }
  };

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
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  {...register("phone")}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
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
              <div className="col-md-12 mb-2">
                <label className="form-label"><i className="fas fa-comment-alt" /> Cover Letter</label>
                <textarea
                  className="form-control"
                  rows={5}
                  maxLength={MAX_COVER_LETTER_LENGTH}
                  {...register("cover_letter")}
                  placeholder="Briefly introduce yourself and why you're a good fit"
                />
                <div className="d-flex justify-content-between">
                  {errors.cover_letter && <div className="text-danger">{errors.cover_letter.message}</div>}
                  <small className={`text-${MAX_COVER_LETTER_LENGTH - coverLetterLength < 50 ? "danger" : "muted"}`}>
                    {coverLetterLength}/{MAX_COVER_LETTER_LENGTH} characters
                  </small>
                </div>
              </div>

              {/* Submit */}
              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </div>
          </form>

          {serverMessage && <div className="alert alert-success mt-4 text-center">{serverMessage}</div>}
          {serverError && <div className="alert alert-danger mt-4 text-center">{serverError}</div>}
        </div>

        <CallToAction />
        <Cookies />
      </div>
    </div>
  );
}

export default ApplyForm;
