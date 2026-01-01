import Cookies from "../components/Cookies";
import ContactForm from "../components/ContactForm";

function Contact() {

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
                                        <ContactForm />
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

                        <Cookies />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
