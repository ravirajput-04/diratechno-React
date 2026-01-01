import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";
import Cookies from "../components/Cookies";
function Careers() {
    return (
        <>
            <div id="main-wrapper">
                <div className="site-wrapper-reveal">
                    {/*======== careers-experts Start ==========*/}
                    <div className="careers-experts-wrapper section-space--pt_60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    {/* section-title-wrap Start */}
                                    <div className="section-title-wrap text-center section-space--mb_30">
                                        <h3 className="heading">
                                            Exciting
                                            <span className="text-color-primary"> Internship </span>
                                            Opportunities to Kickstart Your Career with Us!
                                        </h3>
                                    </div>
                                    {/* section-title-wrap End */}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ht-simple-job-listing move-up animate">
                                        <div className="list">
                                            {/* React JS Developer */}
                                            <div className="item">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="job-info">
                                                            <h5 className="job-name">React JS Developer</h5>
                                                            <span className="job-time">Intern</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="job-description">
                                                            We are looking for passionate and motivated React JS
                                                            Developer Interns eager to learn, build, and innovate. Work
                                                            on exciting live projects, gain hands-on experience with
                                                            expert mentorship, and grow your career in a dynamic IT
                                                            environment.
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="job-button text-md-center">
                                                            <Link
                                                                className="ht-btn ht-btn-md ht-btn--solid"
                                                                to="/apply-form?position=react-js-developer"
                                                            >
                                                                <span className="button-text">Apply Now </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* PHP/Laravel Developer */}
                                            <div className="item">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="job-info">
                                                            <h5 className="job-name">PHP/Laravel Developer</h5>
                                                            <span className="job-time">Intern</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="job-description">
                                                            We are seeking enthusiastic PHP &amp; Laravel Developer
                                                            Interns who are passionate about coding and problem-solving.
                                                            Gain real-world experience, work on live projects with expert
                                                            guidance, and accelerate your career in web development.
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="job-button text-md-center">
                                                            <Link
                                                                className="ht-btn ht-btn-md ht-btn--solid"
                                                                to="/apply-form?position=php-laravel-developer"
                                                            >
                                                                <span className="button-text">Apply Now </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* UI/UX Designer */}
                                            <div className="item">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="job-info">
                                                            <h4 className="job-name">UI/UX Designer</h4>
                                                            <span className="job-time">Intern</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="job-description">
                                                            We are looking for enthusiastic UI/UX Designer Interns who
                                                            love crafting intuitive and engaging digital experiences.
                                                            Gain hands-on exposure to modern design tools, collaborate
                                                            with developers, and design interfaces that users love.
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="job-button text-md-center">
                                                            <Link
                                                                className="ht-btn ht-btn-md ht-btn--solid"
                                                                to="/apply-form?position=ui-ux-designer"
                                                            >
                                                                <span className="button-text">Apply Now </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*======== careers-experts End ==========*/}
                </div>

                {/* Other Sections */}
                <Testimonials />
                <Counter />
                <Cookies />
            </div>
        </>
    );
}

export default Careers;
