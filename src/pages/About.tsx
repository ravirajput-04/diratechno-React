import Cookies from "../components/Cookies";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";

function About() {
    return (
        <>

            <div id="main-wrapper">
                <div className="site-wrapper-reveal" />

                <div className="about-banner-wrap banner-space about-us-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto">
                                <div className="about-banner-content text-center">
                                    <h1 className="mb-15 text-white">About Dira Techno</h1>
                                    <h5 className="font-weight--normal text-white">
                                        Smart web, mobile, and automation solutions—Dira
                                        Technologies powers logistics with efficiency, compliance,
                                        and security.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===========  feature-large-images-wrapper  Start =============*/}
                <div className="feature-large-images-wrapper section-space--ptb_60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* section-title-wrap Start */}
                                <div className="section-title-wrap text-center section-space--mb_60">
                                    <h6 className="section-sub-title mb-20">Our company</h6>
                                    <h3 className="heading">
                                        We run all kinds of IT services that <br />
                                        vow your <span className="text-color-primary">&nbsp;Success</span>
                                    </h3>
                                </div>
                                {/* section-title-wrap Start */}
                            </div>
                        </div>
                        <div className="cybersecurity-about-box section-space--pb_50">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="modern-number-01">
                                        <h2 className="heading me-5">
                                            <span className="mark-text">15+</span>Years’ Experience in IT
                                        </h2>
                                        <h6 className="heading mt-30">
                                            More About Our Success Stories
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-lg-7 offset-lg-1">
                                    <div className="cybersecurity-about-text">
                                        <div className="text">
                                            <p>
                                                We are a global software development company. Founded in
                                                the year 2025, we have the agility to provide solutions
                                                for your business using smart and innovative
                                                technologies. Our company has over 10+ employees and
                                                professional teams with over 15+ years of experience in
                                                developing web and mobile applications.
                                            </p>
                                            <p>
                                                Now, we have expanded our offerings to Include
                                                cutting-edge workflow automation services which include
                                                robotic process automation, business process automation,
                                                and document process automation exclusively for the
                                                logistics sector. This addition complements our existing
                                                capabilities, ensuring we deliver even greater
                                                efficiency and streamlined operations to the logistics
                                                businesses.
                                            </p>
                                            <p>
                                                We always aim high and strive relentlessly to achieve
                                                success. No matter the size of your company, we ensure
                                                to offer dedicated staff and support to meet all your
                                                needs. We provide services regarding securing relevant
                                                certifications and meeting compliance by offering the
                                                best data analysis and data security solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-divider border-bottom-thick section-space--ptb_10" />
                        <h2 className="mission-section-title">Our Mission &amp; Vision</h2>
                        <div className="mission-mission-vision-container">
                            <div className="mission-mission-card">
                                <h3 className="mission-card-title"><i className="fas fa-bullseye" /> Our Mission</h3>
                                <p>At Dira Techno, our mission is to empower businesses across the globe with innovative
                                    technology solutions that drive efficiency, growth, and competitive advantage. We leverage
                                    cutting-edge technologies to deliver tailored automation, development, and cloud services that
                                    transform operations and create lasting value for our clients.</p>
                                <p>We are committed to providing industry-specific solutions, particularly in the logistics sector,
                                    where we offer specialized workflow automation services including robotic process automation,
                                    business process automation, and document process automation.</p>
                                <p>Our dedicated team strives to understand each client's unique challenges and goals, ensuring we
                                    deliver solutions that not only meet but exceed expectations. We aim to be the trusted technology
                                    partner that businesses can rely on for innovation, quality, and results.</p>
                            </div>
                            <div className="mission-vision-card">
                                <h3 className="mission-card-title"><i className="fas fa-eye" /> Our Vision</h3>
                                <p>Our vision is to be the preferred global technology partner for businesses seeking to harness the
                                    power of automation and digital transformation. We envision a future where technology seamlessly
                                    enhances human potential, and we're committed to making this vision a reality for every client we
                                    serve.</p>
                                <p>We strive to push the boundaries of innovation, continuously expanding our service offerings to
                                    include the latest advancements in software development, cloud services, and automation
                                    technologies. Our goal is to help businesses of all sizes navigate the complexities of digital
                                    transformation with ease and confidence.</p>
                                <p>Through our unwavering commitment to excellence, security, and client success, we aim to set new
                                    standards in the technology services industry and build long-term partnerships that drive mutual
                                    growth and success.</p>
                            </div>
                        </div>
                        <h2 className="mission-section-title">Our Strategic Goals</h2>
                        <div className="mission-goals-container">
                            <div className="mission-goal-card">
                                <div className="mission-goal-icon">
                                    <i className="fas fa-robot" />
                                </div>
                                <h3 className="mission-goal-title">Industry-Specific Automation</h3>
                                <p>Deliver specialized automation solutions tailored to the unique needs of the logistics sector and
                                    other industries we serve, including robotic process automation, business process automation, and
                                    document process automation.</p>
                            </div>
                            <div className="mission-goal-card">
                                <div className="mission-goal-icon">
                                    <i className="fas fa-lock" />
                                </div>
                                <h3 className="mission-goal-title">Security &amp; Compliance</h3>
                                <p>Provide robust data security solutions and help clients achieve necessary certifications and
                                    compliance standards through best-in-class data analysis and security practices.</p>
                            </div>
                            <div className="mission-goal-card">
                                <div className="mission-goal-icon">
                                    <i className="fas fa-users" />
                                </div>
                                <h3 className="mission-goal-title">Client Success</h3>
                                <p>Offer dedicated support and staff to meet all client needs, regardless of company size, ensuring
                                    their success is our success through comprehensive support and maintenance services.</p>
                            </div>
                            <div className="mission-goal-card">
                                <div className="mission-goal-icon">
                                    <i className="fas fa-rocket" />
                                </div>
                                <h3 className="mission-goal-title">Innovation Leadership</h3>
                                <p>Continuously evolve our service offerings with cutting-edge technologies to maintain our competitive
                                    edge through innovation in web development, mobile applications, and automation solutions.</p>
                            </div>
                            <div className="mission-goal-card">
                                <div className="mission-goal-icon">
                                    <i className="fas fa-handshake" />
                                </div>
                                <h3 className="mission-goal-title">Partnership Approach</h3>
                                <p>Serve as a trusted technology partner through white-label development, resource augmentation, and
                                    comprehensive support services that enable agencies to expand their service offerings.</p>
                            </div>
                            <div className="mission-goal-card">
                                <div className="mission-goal-icon">
                                    <i className="fas fa-globe" />
                                </div>
                                <h3 className="mission-goal-title">Global Expansion</h3>
                                <p>Expand our reach to serve more clients worldwide while maintaining the quality and dedication that
                                    define our brand, leveraging our experience across diverse industries and technologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===========  feature-large-images-wrapper  End =============*/}
                <div className="single-divider border-bottom-thick section-space--ptb_10" />
                {/*========= About Delivering Wrapper Start ===========*/}
                <div className="about-delivering-wrapper section-space--ptb_60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-wrap text-center section-space--mb_20">
                                    <h3 className="heading">
                                        Empowering Your Business with <br />Smart Automation Solutions
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="delivering-optimal-wrap">
                                    <div className="list-item">
                                        <div className="marker" />
                                        <div className="title-wrap">
                                            <h5 className="title">Cutting-Edge Technologies</h5>
                                            <div className="desc">
                                                We leverage the latest tools and frameworks to deliver robust,
                                                scalable, and future-ready automation solutions.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <div className="marker" />
                                        <div className="title-wrap">
                                            <h5 className="title">Industry-Specific Automation</h5>
                                            <div className="desc">
                                                Our workflow automation services are tailored for logistics,
                                                including robotic process automation, business process
                                                automation, and document process automation.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <div className="marker" />
                                        <div className="title-wrap">
                                            <h5 className="title">Proven Track Record</h5>
                                            <div className="desc">
                                                With 15+ years of combined experience, our expert team ensures
                                                consistent and measurable results for businesses worldwide.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="delivering-optimal-wrap">
                                    <div className="list-item">
                                        <div className="marker" />
                                        <div className="title-wrap">
                                            <h5 className="title">Data Security &amp; Compliance</h5>
                                            <div className="desc">
                                                We help businesses secure certifications, meet compliance
                                                requirements, and maintain top-tier data security.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <div className="marker" />
                                        <div className="title-wrap">
                                            <h5 className="title">Comprehensive Support</h5>
                                            <div className="desc">
                                                Our dedicated team provides end-to-end support and maintenance
                                                to ensure smooth and efficient operations.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <div className="marker" />
                                        <div className="title-wrap">
                                            <h5 className="title">Innovation-Driven Edge</h5>
                                            <div className="desc">
                                                We constantly innovate to give your business a competitive edge,
                                                making integration seamless and effortless.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*========= About Delivering Wrapper End ===========*/}
                <div className="single-divider border-bottom-thick section-space--ptb_10" />

                <Testimonials />
                <Counter />
                <Cookies />
            </div>
        </>
    )
}

export default About