import { Link } from "react-router-dom";
import { useEffect } from "react";

function Footer() {
    useEffect(() => {
        // Menu sticky functionality
        const handleScroll = () => {
            const windows = window;
            const screenSize = windows.innerWidth;
            const sticky = document.querySelector('.header-sticky');

            if (sticky) {
                const scroll = windows.scrollY;
                const headerHeight = sticky.clientHeight;

                if (screenSize >= 320) {
                    if (scroll < headerHeight) {
                        sticky.classList.remove('is-sticky');
                    } else {
                        sticky.classList.add('is-sticky');
                    }
                }
            }
        };

        // Scroll to top functionality
        const scrollToTop = () => {
            const scrollUp = document.getElementById('scroll-top');
            let lastScrollTop = 0;

            const handleScrollTop = () => {
                const st = window.scrollY;
                if (st > lastScrollTop) {
                    scrollUp?.classList.remove('show');
                } else {
                    if (window.scrollY > 200) {
                        scrollUp?.classList.add('show');
                    } else {
                        scrollUp?.classList.remove('show');
                    }
                }
                lastScrollTop = st;
            };

            const handleClick = (evt: Event) => {
                evt.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            };

            window.addEventListener('scroll', handleScrollTop);
            scrollUp?.addEventListener('click', handleClick);

            // Cleanup
            return () => {
                window.removeEventListener('scroll', handleScrollTop);
                scrollUp?.removeEventListener('click', handleClick);
            };
        };

        window.addEventListener('scroll', handleScroll);
        const scrollCleanup = scrollToTop();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollCleanup) scrollCleanup();
        };
    }, []);

    return (
        <>
            <div>
                {/*====================  footer area ====================*/}
                <div className="footer-area-wrapper bg-gray">
                    <div className="footer-area section-space--ptb_60">
                        <div className="container">
                            <div className="row footer-widget-wrapper">
                                <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
                                    <div className="footer-widget__logo mb-30">
                                        <img src="/assets/images/logo/dt-logo.png" width={160} height={48} className="img-fluid" alt="logo" />
                                    </div>
                                    <ul className="footer-widget__list">
                                        <li>144, Ameya Street, Surya Dev Nagar,<br />near Gopal Market,
                                            Indore,<br />Madhya Pradesh (452009)
                                        </li>
                                        <li>
                                            <a href="mailto:info@diratechno.com" className="hover-style-link">info@diratechno.com</a>
                                        </li>
                                        <li>
                                            <a href="tel:8989626235" className="hover-style-link text-black font-weight--bold">8989626235</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                                    <h6 className="footer-widget__title mb-20">Quick links</h6>
                                    <ul className="footer-widget__list">
                                        <li>
                                            <Link to="/" className="hover-style-link">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about" className="hover-style-link">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/services" className="hover-style-link">Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/careers" className="hover-style-link">Career</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us" className="hover-style-link">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/privacy-policy" className="hover-style-link">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
                                    <h6 className="footer-widget__title mb-20">Services</h6>
                                    <ul className="footer-widget__list">
                                        <li>
                                            <Link to="/devops-and-cloud-services" className="hover-style-link">DevOps &amp; Cloud Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/cloud-consulting-and-managed-services" className="hover-style-link">Cloud Consulting &amp;
                                                Managed Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/web-application-development" className="hover-style-link">Web Application Development</Link>
                                        </li>
                                        <li>
                                            <Link to="/mobile-application-development" className="hover-style-link">Mobile Application
                                                Development</Link>
                                        </li>
                                        <li>
                                            <Link to="/agency-partnership" className="hover-style-link">Agency Partnership</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
                                    <h6 className="footer-widget__title mb-20">Agency Partnership</h6>
                                    <ul className="footer-widget__list">
                                        <li>
                                            <Link to="/white-label-development-services" className="hover-style-link">White-Label Development
                                                Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/dedicated-developers" className="hover-style-link">Dedicated Developers</Link>
                                        </li>
                                        <li>
                                            <Link to="/devops-and-cloud-partnership" className="hover-style-link">DevOps &amp; Cloud Partnership</Link>
                                        </li>
                                        <li>
                                            <Link to="/maintenance-and-support-services" className="hover-style-link">Maintenance &amp; Support
                                                Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/custom-solutions-and-white-label-saas" className="hover-style-link">Custom Solutions &amp;
                                                White-Label SaaS</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright-area section-space--pb_30">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 text-center text-md-start">
                                    <span className="copyright-text">© 2025 Dira Techno.
                                        <a href="https://google.com/">&nbsp;All Rights Reserved.</a></span>
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <ul className="list ht-social-networks solid-rounded-icon">
                                        <li className="item">
                                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link hint--bounce hint--top hint--primary">
                                                <i className="fab fa-twitter link-icon" />
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link hint--bounce hint--top hint--primary">
                                                <i className="fab fa-facebook-f link-icon" />
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link hint--bounce hint--top hint--primary">
                                                <i className="fab fa-instagram link-icon" />
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="social-link hint--bounce hint--top hint--primary">
                                                <i className="fab fa-linkedin link-icon" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of footer area  ====================*/}
                {/*====================  scroll top ====================*/}
                <a href="#" className="scroll-top" id="scroll-top">
                    <i className="arrow-top fas fa-chevron-up" />
                    <i className="arrow-bottom fas fa-chevron-up" />
                </a>
                {/*====================  End of scroll top  ====================*/}
                {/*====================   WhatsApp Chat Icon  ====================*/}
                <a href="https://wa.me/918989626235" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="Chat on WhatsApp" />
                </a>
                {/*====================   End of WhatsApp Chat Icon ==============*/}
            </div>
        </>
    )
}

export default Footer;