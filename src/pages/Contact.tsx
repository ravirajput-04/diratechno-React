import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import CallToAction from "../components/CallToAction";
import Cookies from "../components/Cookies";
interface FormData {
    con_name: string;
    con_email: string;
    Visiting: string;
    con_message: string;
}

interface FormErrors {
    con_name?: string;
    con_email?: string;
    Visiting?: string;
    con_message?: string;
}

function Contact() {
    const [formData, setFormData] = useState<FormData>({
        con_name: "",
        con_email: "",
        Visiting: "",
        con_message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isValid, setIsValid] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: validateField(name as keyof FormData, value) }));
    };

    const validateField = (name: keyof FormData, value: string) => {
        switch (name) {
            case "con_name":
                if (!value.trim()) return "Name is required";
                if (value.trim().length < 2) return "Name must be at least 2 characters";
                break;
            case "con_email":
                if (!value.trim()) return "Email is required";
                if (!/\S+@\S+\.\S+/.test(value)) return "Email is invalid";
                break;
            case "Visiting":
                if (!value) return "Please select a department";
                break;
            case "con_message":
                if (!value.trim()) return "Message is required";
                if (value.trim().length < 10) return "Message must be at least 10 characters";
                if (value.trim().length > 500) return "Message must be less than 500 characters";
                break;
            default:
                return "";
        }
        return "";
    };

    const validateForm = () => {
        const newErrors: FormErrors = {};
        (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });
        return newErrors;
    };

    useEffect(() => {
        const formErrors = validateForm();
        setIsValid(Object.keys(formErrors).length === 0);
    }, [formData]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            // Fake API endpoint
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await response.json();
            console.log("Form submitted successfully:", result);

            setSuccessMsg("Your message has been sent successfully!");
            setFormData({ con_name: "", con_email: "", Visiting: "", con_message: "" });
            setErrors({});
        } catch (error) {
            console.error("Error submitting form:", error);
            setSuccessMsg("Something went wrong. Please try again later.");
        }
    };

    const inputClass = (field: keyof FormData) => {
        if (errors[field]) return "form-control border-danger";
        if (formData[field]) return "form-control border-success";
        return "form-control";
    };

    return (
        <>
            <div id="main-wrapper">
                <div className="site-wrapper-reveal">
                    <div>
                        {/*============ Contact Us Area Start =================*/}
                        <div className="contact-us-area service-contact-bg section-space--ptb_100">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-4">
                                        <div className="contact-info sytle-one service-contact text-left">
                                            <div className="contact-list-item">
                                                <a href="tel:8989626235" className="single-contact-list">
                                                    <div className="content-wrap">
                                                        <div className="content">
                                                            <div className="icon">
                                                                <span className="fas fa-phone" />
                                                            </div>
                                                            <div className="main-content">
                                                                <h6 className="heading">Call for advice now!</h6>
                                                                <div className="text">8989626235</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a
                                                    href="mailto:info@diratechno.com"
                                                    className="single-contact-list"
                                                >
                                                    <div className="content-wrap">
                                                        <div className="content">
                                                            <div className="icon">
                                                                <span className="far fa-envelope" />
                                                            </div>
                                                            <div className="main-content">
                                                                <h6 className="heading">Say hello</h6>
                                                                <div className="text">info@diratechno.com</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 ms-auto">
                                        <div className="contact-form-service-wrap">
                                            <div className="contact-title text-center section-space--mb_40">
                                                <h3 className="mb-10">Need a hand?</h3>
                                                <p className="text">
                                                    Reach out to the world’s most reliable IT services.
                                                </p>
                                            </div>
                                            <form className="contact-form" onSubmit={handleSubmit}>
                                                <div className="contact-form__two">
                                                    <div className="contact-input">
                                                        <div className="contact-inner">
                                                            <input
                                                                name="con_name"
                                                                type="text"
                                                                placeholder="Name *"
                                                                value={formData.con_name}
                                                                onChange={handleChange}
                                                                className={inputClass("con_name")}
                                                            />
                                                            {errors.con_name && (
                                                                <p className="text-danger">{errors.con_name}</p>
                                                            )}
                                                        </div>
                                                        <div className="contact-inner">
                                                            <input
                                                                name="con_email"
                                                                type="email"
                                                                placeholder="Email *"
                                                                value={formData.con_email}
                                                                onChange={handleChange}
                                                                className={inputClass("con_email")}
                                                            />
                                                            {errors.con_email && (
                                                                <p className="text-danger">{errors.con_email}</p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="contact-select">
                                                        <div className="form-item contact-inner">
                                                            <span className="inquiry">
                                                                <select
                                                                    id="Visiting"
                                                                    name="Visiting"
                                                                    value={formData.Visiting}
                                                                    onChange={handleChange}
                                                                    className={inputClass("Visiting")}
                                                                >
                                                                    <option value="" disabled>
                                                                        Select Department to email
                                                                    </option>
                                                                    <option value="Your inquiry about">
                                                                        Your inquiry about
                                                                    </option>
                                                                    <option value="General Information Request">
                                                                        General Information Request
                                                                    </option>
                                                                    <option value="Partner Relations">
                                                                        Partner Relations
                                                                    </option>
                                                                    <option value="Careers">Careers</option>
                                                                    <option value="Software Licencing">
                                                                        Software Licencing
                                                                    </option>
                                                                </select>
                                                                {errors.Visiting && (
                                                                    <p className="text-danger">{errors.Visiting}</p>
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="contact-inner contact-message">
                                                        <textarea
                                                            name="con_message"
                                                            placeholder="Please describe what you need."
                                                            value={formData.con_message}
                                                            onChange={handleChange}
                                                            className={inputClass("con_message")}
                                                        />
                                                        {errors.con_message && (
                                                            <p className="text-danger">{errors.con_message}</p>
                                                        )}
                                                    </div>

                                                    <div className="comment-submit-btn">
                                                        <button
                                                            className="ht-btn ht-btn-md"
                                                            type="submit"
                                                            disabled={!isValid}
                                                        >
                                                            Send message
                                                        </button>
                                                        {successMsg && (
                                                            <p className="text-success mt-2">{successMsg}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*============ Contact Us Area End =================*/}

                        {/*==================== Contact us info Start ====================*/}
                        <div className="contact-us-info-wrappaer section-space--pb_60">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="conact-info-wrap mt-30">
                                            <h5 className="heading mb-20">Indore</h5>
                                            <ul className="conact-info__list">
                                                <li>
                                                    144, Ameya Street, Surya Dev Nagar, near Gopal Market,
                                                    <br />
                                                    Indore, Madhya Pradesh (452009)
                                                </li>
                                                <li>
                                                    <a
                                                        href="mailto:info@diratechno.com"
                                                        className="hover-style-link text-color-primary"
                                                    >
                                                        info@diratechno.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="tel:8989626235"
                                                        className="hover-style-link text-black font-weight--bold"
                                                    >
                                                        8989626235
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*==================== Contact us info End ====================*/}

                        {/* Contact Map */}
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.3150728715498!2d75.82640316947074!3d22.68134823610251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc3921d4080f%3A0xaab01883efcee010!2s144%2C%20Ameya%20St%2C%20Surya%20Dev%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452009!5e0!3m2!1sen!2sin!4v1756724639063!5m2!1sen!2sin"
                                width="100%"
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        {/* End Contact Map */}

                        <CallToAction />
                        <Cookies />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
