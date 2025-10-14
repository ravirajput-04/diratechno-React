import AllServices from "../components/AllServices"
import CallToAction from "../components/CallToAction"
import Cookies from "../components/Cookies"
import Divider from "../components/Divider"
import Testimonials from "../components/Testimonials"

function DevopsAndCloudPartnershipServices() {
    return (
        <>
            <div id="main-wrapper">
                <div className="site-wrapper-reveal">
                    {/*==================== DevOps & Cloud Partnership Start ====================*/}
                    <div className="typed-text-wrapper section-space--ptb_60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="typed-text-wrap">
                                        <h4 className="cd-headline letters type">
                                            <span className="cd-words-wrapper waiting">
                                                <b className="is-visible">DevOps &amp; Cloud Partnership&nbsp;</b>
                                            </span>
                                            Service
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="all-services-container">
                        <section className="all-services-intro">
                            <p>At <strong>Dira Techno</strong>, we enable agencies to offer enterprise-grade DevOps and
                                cloud solutions to their clients without building expensive in-house infrastructure teams. Many
                                agencies excel at design and development but face challenges when it comes to delivering secure,
                                scalable, and production-ready cloud environments. Our DevOps &amp; Cloud Partnership fills this gap
                                by acting as your specialized backend partner for cloud infrastructure, automation, and ongoing
                                operations.</p>
                            <p>This service allows agencies to take on larger, more complex projects that require robust
                                deployment pipelines, containerized applications, and compliance-ready cloud architectures. Our
                                team works behind the scenes, ensuring that every deliverable meets enterprise standards while
                                keeping your agency as the single point of contact for the client.</p>
                        </section>
                        <div className="all-services-divider" />
                        {/* CI/CD Pipeline Setup */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-code-branch" />
                                <h3 className="all-services-service-title">CI/CD Pipeline Setup</h3>
                            </div>
                            <p>We build Continuous Integration and Continuous Deployment (CI/CD) pipelines that automate code
                                testing, building, and deployment processes.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> Using tools like Jenkins,
                                    GitHub Actions, and ArgoCD, we set up automated workflows that ensure fast, consistent, and
                                    error-free releases.</li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Enables agencies to
                                    deliver projects faster while minimizing deployment risks and improving release reliability.
                                </li>
                            </ul>
                        </section>
                        {/* Infrastructure as Code */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-server" />
                                <h3 className="all-services-service-title">Infrastructure as Code (IaC)</h3>
                            </div>
                            <p>We provision and manage infrastructure using Infrastructure as Code, ensuring repeatable,
                                consistent, and version-controlled deployments.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> Tools like Terraform, Ansible,
                                    and Pulumi define infrastructure configurations as code, making scaling and rollback simple.
                                </li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Eliminates manual
                                    configuration errors, reduces operational overhead, and ensures compliance with client
                                    requirements.</li>
                            </ul>
                        </section>
                        {/* Containerization & Orchestration */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-box" />
                                <h3 className="all-services-service-title">Containerization &amp; Orchestration</h3>
                            </div>
                            <p>We help agencies containerize their client applications and orchestrate them for scalability and
                                fault tolerance.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> Applications are packaged with
                                    Docker, deployed on Kubernetes, and managed with Helm charts for consistent rollouts.</li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Ensures that client
                                    applications are portable, scalable, and resilient across different environments.</li>
                            </ul>
                        </section>
                        {/* Cloud Migration & Security Hardening */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-cloud-upload-alt" />
                                <h3 className="all-services-service-title">Cloud Migration &amp; Security Hardening</h3>
                            </div>
                            <p>For clients moving from legacy systems, we manage cloud migration projects with an emphasis on
                                security and compliance.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> We migrate workloads to AWS,
                                    Azure, or GCP using phased strategies while implementing access controls, encryption, and
                                    vulnerability management.</li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Delivers a secure,
                                    future-proof cloud environment that meets enterprise security requirements and minimizes
                                    downtime.</li>
                            </ul>
                        </section>
                        {/* Monitoring & Logging */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-chart-line" />
                                <h3 className="all-services-service-title">Monitoring &amp; Logging</h3>
                            </div>
                            <p>We provide end-to-end monitoring and centralized logging to keep client systems healthy and
                                responsive.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> We implement monitoring stacks
                                    like Prometheus + Grafana for real-time metrics and ELK (Elasticsearch, Logstash, Kibana)
                                    for log analysis.</li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Ensures early detection of
                                    issues, better incident response times, and improved uptime — strengthening client trust.
                                </li>
                            </ul>
                        </section>
                        <div className="all-services-divider" />
                        {/* Key Features */}
                        <section className="all-services-features">
                            <h3 className="all-services-service-title mb-15">Key Features of DevOps &amp; Cloud Partnership</h3>
                            <ul className="all-services-features-list">
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-users-cog" /><strong>Backend Expertise for
                                    Agencies</strong> → Extend your services with enterprise-grade DevOps capabilities.</li>
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-bolt" /><strong>Faster Time-to-Market</strong> → CI/CD
                                    automation ensures quicker project delivery with fewer errors.</li>
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-expand-arrows-alt" /><strong>Scalable
                                    Infrastructure</strong> → Cloud-native solutions built to handle client growth.</li>
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-shield-alt" /><strong>Security-First Approach</strong>
                                    → Hardened environments that meet compliance and industry standards.</li>
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-handshake" /><strong>Transparent
                                    Collaboration</strong> → We work silently in the background while your agency stays
                                    client-facing.</li>
                            </ul>
                        </section>
                        <section className="all-services-conclusion">
                            <p>With our DevOps &amp; Cloud Partnership, agencies gain a specialized infrastructure partner that
                                helps them deliver secure, scalable, and production-ready environments — enabling them to
                                compete for high-value enterprise projects with confidence.</p>
                        </section>
                    </div>
                    {/*==================== DevOps & Cloud Partnership End ====================*/}

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

export default DevopsAndCloudPartnershipServices