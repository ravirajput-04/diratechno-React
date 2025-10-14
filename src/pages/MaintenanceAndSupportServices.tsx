import AllServices from "../components/AllServices"
import CallToAction from "../components/CallToAction"
import Cookies from "../components/Cookies"
import Divider from "../components/Divider"
import Testimonials from "../components/Testimonials"

function MaintenanceAndSupportServices() {
    return (
        <>
            <div id="main-wrapper">
                <div className="site-wrapper-reveal">
                    {/*==================== Maintenance & Support Services Start ====================*/}
                    <div className="typed-text-wrapper section-space--ptb_60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="typed-text-wrap">
                                        <h4 className="cd-headline letters type">
                                            <span className="cd-words-wrapper waiting">
                                                <b className="is-visible">Maintenance &amp; Support&nbsp;</b>
                                            </span>
                                            Services
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="all-services-container">
                        <section className="all-services-intro">
                            <p>At <strong>Dira Techno</strong>, we recognize that a project’s success doesn’t end at
                                launch — in fact, long-term reliability and continuous improvement are what truly determine
                                client satisfaction. Our Maintenance &amp; Support Services empower agencies to offer complete,
                                end-to-end post-launch support to their clients without investing in dedicated in-house support
                                teams.</p>
                            <p>By acting as your silent backend partner, we ensure that your clients’ applications,
                                infrastructure, and cloud environments remain secure, up-to-date, and performant. This not only
                                strengthens your client relationships but also helps agencies generate long-term recurring
                                revenue by offering ongoing support packages and SLAs.</p>
                        </section>
                        <div className="all-services-divider" />
                        {/* Web & App Maintenance */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-laptop-code" />
                                <h3 className="all-services-service-title">Web &amp; App Maintenance</h3>
                            </div>
                            <p>We provide continuous monitoring, bug fixes, and feature updates to keep client applications
                                running smoothly.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> Our team proactively resolves
                                    issues, applies security patches, and performs compatibility upgrades to ensure stability.
                                </li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Minimizes downtime,
                                    prevents vulnerabilities, and ensures that your clients’ platforms always reflect their
                                    evolving business needs.</li>
                            </ul>
                        </section>
                        {/* Cloud Cost Optimization & Monitoring */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-cloud" />
                                <h3 className="all-services-service-title">Cloud Cost Optimization &amp; Monitoring</h3>
                            </div>
                            <p>Cloud environments can become expensive if left unoptimized. We monitor resource usage and
                                implement cost-control measures.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> By analyzing cloud workloads,
                                    we identify underutilized resources, right-size instances, and apply autoscaling strategies
                                    to control expenses.</li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Helps agencies demonstrate
                                    cost-efficiency to clients, increasing trust and strengthening ongoing relationships.</li>
                            </ul>
                        </section>
                        {/* Performance Tuning & Upgrades */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-tachometer-alt" />
                                <h3 className="all-services-service-title">Performance Tuning &amp; Upgrades</h3>
                            </div>
                            <p>As client businesses grow, their applications and systems must scale seamlessly. We provide
                                performance tuning and upgrades to ensure smooth operations even under heavy load.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> Using profiling tools and
                                    benchmarking, we optimize databases, server configurations, and code to improve response
                                    times and reduce latency.</li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Guarantees optimal
                                    performance and user experience, preventing revenue loss due to slow or unstable systems.
                                </li>
                            </ul>
                        </section>
                        {/* 24/7 Support with SLAs */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-headset" />
                                <h3 className="all-services-service-title">24/7 Support with SLAs</h3>
                            </div>
                            <p>Uninterrupted operations are critical for enterprise clients. We provide round-the-clock support
                                backed by clearly defined Service Level Agreements (SLAs).</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> Our support team monitors
                                    systems, responds to incidents, and resolves critical issues within agreed timelines.</li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Builds client confidence,
                                    reduces the risk of downtime, and ensures your agency meets its commitments consistently.
                                </li>
                            </ul>
                        </section>
                        <div className="all-services-divider" />
                        {/* Key Features */}
                        <section className="all-services-features">
                            <h3 className="all-services-service-title mb-15">Key Features of Maintenance &amp; Support Services</h3>
                            <ul className="all-services-features-list">
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-search" /><strong>Proactive Monitoring</strong> →
                                    Issues are detected and resolved before they affect end-users.</li>
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-chart-line" /><strong>Cost Optimization</strong> →
                                    Continuous analysis ensures cloud resources are used efficiently.</li>
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-layer-group" /><strong>Scalable Solutions</strong> →
                                    Systems are tuned and upgraded to handle future growth.</li>
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-check-circle" /><strong>Guaranteed
                                    Reliability</strong> → SLAs provide measurable, predictable support outcomes.</li>
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-sync-alt" /><strong>Recurring Revenue Model</strong> →
                                    Agencies can offer monthly or annual maintenance packages to secure consistent income.</li>
                            </ul>
                        </section>
                        <section className="all-services-conclusion">
                            <p>With our Maintenance &amp; Support Services, agencies can confidently offer complete lifecycle
                                management to their clients, ensuring that every project continues to deliver value long after
                                launch — while building stronger relationships and recurring revenue streams.</p>
                        </section>
                    </div>
                    {/*==================== Maintenance & Support Services End ====================*/}
                    <Divider />
                    <AllServices />
                    <Testimonials />
                    <CallToAction />
                    <Cookies />
                </div>
            </div>
        </>
    )
}

export default MaintenanceAndSupportServices