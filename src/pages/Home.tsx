import { Link } from "react-router-dom";
import AllServices from "../components/AllServices";
import HeroSlider from "../components/HeroSlider";
import CallToAction from "../components/CallToAction";
import Cookies from "../components/Cookies";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";

function Home() {
    return (
        <>

            <div id="main-wrapper">
                <div className="site-wrapper-reveal" />

                {/*====== Start Hero Section ======*/}
                <HeroSlider />
                {/*====== End Hero Section ======*/}

                {/*====== Start Services Section ======*/}
                <AllServices />
                {/*====== End Services Section ======*/}

                {/* ============ Our Experience Wrapper Start =============== */}
                <div className="section-space--ptb_60 infotechno-section-bg-01">
                    <div className="our-experience-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="section-title small-mb__40 tablet-mb__40">
                                        <h6 className="section-sub-title mb-20">Our company</h6>
                                        <h3 className="heading">
                                            We’ve been thriving in
                                            <span className="text-color-primary"> 15+ years</span>
                                        </h3>
                                        <p className="text mt-20">
                                            Dira Techno deliver web, mobile, and automation
                                            solutions with 15+ years of expertise. Our
                                            logistics-focused workflow automation—spanning robotic,
                                            business, and document processes—enhances efficiency,
                                            compliance, and data security. We provide dedicated
                                            support to help businesses of all sizes succeed.
                                        </p>
                                        <div className="sider-title-button-box mt-30">
                                            <Link to="/contact-us" className="ht-btn ht-btn-md">
                                                Join us now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 offset-lg-2">
                                    <div className="ht-list style-auto-numbered-02">
                                        <div className="list-item">
                                            <Link className="link" to="/about">
                                                <div className="list-header">
                                                    <div className="marker">01</div>
                                                    <div className="title-wrap">
                                                        <h6 className="title">
                                                            How we can help your business?
                                                        </h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="list-item">
                                            <Link className="link" to="/about">
                                                <div className="list-header">
                                                    <div className="marker">02</div>
                                                    <div className="title-wrap">
                                                        <h6 className="title">Why become our partner?</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="list-item">
                                            <Link className="link" to="/services">
                                                <div className="list-header">
                                                    <div className="marker">03</div>
                                                    <div className="title-wrap">
                                                        <h6 className="title">
                                                            What are the best of Dira Techno?
                                                        </h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============ Our Experience Wrapper End =============== */}

                {/*====================  Testimonials area ====================*/}
                <Testimonials />
                {/*====================  End of Testimonials area  ====================*/}

                {/*=========== fun fact Wrapper Start ==========*/}
                <Counter />
                {/*=========== fun fact Wrapper End ==========*/}

                {/*====================  Call to action area ====================*/}
                <CallToAction />
                {/*====================  End of Call to action area  ====================*/}

                {/*====================  Cookies area ====================*/}
                <Cookies />
                {/*====================  End of Cookies area  ====================*/}
            </div>
        </>
    );
}

export default Home;
