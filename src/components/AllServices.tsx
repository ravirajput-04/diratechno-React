import { Link } from "react-router-dom";

function AllServices() {
    return (
        <>
            {/*===========  all services Start =============*/}
            <div className="feature-images-wrapper section-space--ptb_60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* section-title-wrap Start */}
                            <div className="section-title-wrap text-center section-space--mb_20">
                                <h6 className="section-sub-title mb-20">Our services</h6>
                                <h3 className="heading">
                                    <span className="text-color-primary">
                                        For your very specific industry,<br />
                                        we have highly-tailored IT solutions.</span>
                                </h3>
                            </div>
                            {/* section-title-wrap End */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="feature-images__five">
                                <div className="row">
                                    {/* Service 1: DevOps & Cloud Services */}
                                    <div className="col-lg-4 col-md-6 wow move-up">
                                        <div className="ht-box-images style-05">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <div className="default-image">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-05-60x60.webp" alt="service-img" />
                                                    </div>
                                                    <div className="hover-images">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-05-60x60.webp" alt="service-img" />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">DevOps and Cloud Services</h5>
                                                    <div className="text">
                                                        CI/CD Pipeline Setup, Infrastructure as Code, Docker,
                                                        Kubernetes, Cloud Migration, Monitoring &amp; Security Hardening.
                                                    </div>
                                                    <div className="box-images-arrow">
                                                        <Link to="/devops-and-cloud-services">
                                                            <span className="button-text">Discover now</span>
                                                            <i className="fas fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Service 2: Cloud Consulting Services */}
                                    <div className="col-lg-4 col-md-6 wow move-up">
                                        <div className="ht-box-images style-05">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <div className="default-image">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-02-60x60.webp" alt="service-img" />
                                                    </div>
                                                    <div className="hover-images">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-02-60x60.webp" alt="service-img" />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Cloud Consulting and Managed Services</h5>
                                                    <div className="text">
                                                        Cloud Architecture Design, Hybrid &amp; Multi-Cloud Setups, 24/7 Monitoring,
                                                        Backup &amp; Disaster Recovery Solutions.
                                                    </div>
                                                    <div className="box-images-arrow">
                                                        <Link to="/cloud-consulting-and-managed-services">
                                                            <span className="button-text">Discover now</span>
                                                            <i className="fas fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Service 3: Web Application Development */}
                                    <div className="col-lg-4 col-md-6 wow move-up">
                                        <div className="ht-box-images style-05">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <div className="default-image">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-03-60x60.webp" alt="service-img" />
                                                    </div>
                                                    <div className="hover-images">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-03-60x60.webp" alt="service-img" />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Web Application Development</h5>
                                                    <div className="text">
                                                        Custom ERP, CRM, eCommerce, SaaS Applications with Modern
                                                        Frontend &amp; Backend Technologies and API Integrations.
                                                    </div>
                                                    <div className="box-images-arrow">
                                                        <Link to="/web-application-development">
                                                            <span className="button-text">Discover now</span>
                                                            <i className="fas fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Service 4: Mobile Application Development */}
                                    <div className="col-lg-4 col-md-6 wow move-up">
                                        <div className="ht-box-images style-05">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <div className="default-image">
                                                        <img className="img-fulid" src="assets/images/icons/generated-image-removebg-preview.png" alt="service-img" />
                                                    </div>
                                                    <div className="hover-images">
                                                        <img className="img-fulid" src="assets/images/icons/generated-image-removebg-preview.png" alt="service-img" />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Mobile Application Development</h5>
                                                    <div className="text">
                                                        Cross-Platform &amp; Native Mobile Apps with MBaaS Integration,
                                                        App Store Deployment, UI/UX Design &amp; Prototyping.
                                                    </div>
                                                    <div className="box-images-arrow">
                                                        <Link to="/mobile-application-development">
                                                            <span className="button-text">Discover now</span>
                                                            <i className="fas fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Service 5: White-Label Development Services */}
                                    <div className="col-lg-4 col-md-6 wow move-up">
                                        <div className="ht-box-images style-05">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <div className="default-image">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-03-60x60.webp" alt="service-img" />
                                                    </div>
                                                    <div className="hover-images">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-03-60x60.webp" alt="service-img" />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">White-Label Development Services</h5>
                                                    <div className="text">
                                                        Deliver Web, Mobile &amp; API Projects under Your Brand with Full Execution
                                                        and Complete Client Confidentiality.
                                                    </div>
                                                    <div className="box-images-arrow">
                                                        <Link to="/white-label-development-services">
                                                            <span className="button-text">Discover now</span>
                                                            <i className="fas fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Service 6: Dedicated Developers Services */}
                                    <div className="col-lg-4 col-md-6 wow move-up">
                                        <div className="ht-box-images style-05">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <div className="default-image">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-01-60x60.webp" alt="service-img" />
                                                    </div>
                                                    <div className="hover-images">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-01-60x60.webp" alt="service-img" />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Dedicated Developers Services</h5>
                                                    <div className="text">
                                                        Hire Skilled Frontend, Backend, Mobile, and DevOps Engineers on
                                                        Hourly, Part-Time, Full-Time or Project Basis.
                                                    </div>
                                                    <div className="box-images-arrow">
                                                        <Link to="/dedicated-developers">
                                                            <span className="button-text">Discover now</span>
                                                            <i className="fas fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Service 7: DevOps & Cloud Partnership */}
                                    <div className="col-lg-4 col-md-6 wow move-up">
                                        <div className="ht-box-images style-05">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <div className="default-image">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-04-60x60.webp" alt="service-img" />
                                                    </div>
                                                    <div className="hover-images">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-04-60x60.webp" alt="service-img" />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">DevOps &amp; Cloud Partnership Services</h5>
                                                    <div className="text">
                                                        Enterprise-level CI/CD Automation, Kubernetes Orchestration, Cloud Security &amp; Continuous
                                                        Monitoring.
                                                    </div>
                                                    <div className="box-images-arrow">
                                                        <Link to="/devops-and-cloud-partnership">
                                                            <span className="button-text">Discover now</span>
                                                            <i className="fas fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Service 8: Maintenance & Support Services */}
                                    <div className="col-lg-4 col-md-6 wow move-up">
                                        <div className="ht-box-images style-05">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <div className="default-image">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-03-60x60.webp" alt="service-img" />
                                                    </div>
                                                    <div className="hover-images">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-03-60x60.webp" alt="service-img" />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Maintenance &amp; Support Services</h5>
                                                    <div className="text">
                                                        24/7 Monitoring, Bug Fixes, Security Patches, Performance
                                                        Optimization &amp; SLA-Based Support for Smooth Operations.
                                                    </div>
                                                    <div className="box-images-arrow">
                                                        <Link to="/maintenance-and-support-services">
                                                            <span className="button-text">Discover now</span>
                                                            <i className="fas fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Service 9: Custom Solutions & White-Label SaaS */}
                                    <div className="col-lg-4 col-md-6 wow move-up">
                                        <div className="ht-box-images style-05">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <div className="default-image">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-06-60x60.webp" alt="service-img" />
                                                    </div>
                                                    <div className="hover-images">
                                                        <img className="img-fulid" src="assets\images\icons\mitech-box-image-style-05-image-06-60x60.webp" alt="service-img" />
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Custom Solutions &amp; White-Label SaaS</h5>
                                                    <div className="text">
                                                        Ready-to-Use Mini-ERP, CRM, eCommerce &amp; Industry-Specific SaaS
                                                        Products to Resell under Your Brand Name.
                                                    </div>
                                                    <div className="box-images-arrow">
                                                        <Link to="/custom-solutions-and-white-label-saas">
                                                            <span className="button-text">Discover now</span>
                                                            <i className="fas fa-arrow-right" />
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
            </div>
            {/*===========  all services End =============*/}
        </>
    )
}

export default AllServices