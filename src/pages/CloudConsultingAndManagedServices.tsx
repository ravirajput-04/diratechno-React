import AllServices from "../components/AllServices"
import CallToAction from "../components/CallToAction"
import Cookies from "../components/Cookies"
import Divider from "../components/Divider"
import Testimonials from "../components/Testimonials"

function CloudConsultingAndManagedServices() {
  return (
    <>
      <div id="main-wrapper">
        <div className="site-wrapper-reveal">
          {/*==================== Cloud Consulting & Managed Services Start ====================*/}
          <div className="typed-text-wrapper section-space--ptb_60">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div className="typed-text-wrap">
                    <h4 className="cd-headline letters type">
                      <span className="cd-words-wrapper waiting">
                        <b className="is-visible">Cloud Consulting &amp; Managed&nbsp;</b>
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
              <p>At <strong>Dira Techno</strong>, our Cloud Consulting &amp; Managed Services are designed to
                help enterprises adopt, optimize, and manage cloud environments with confidence. In today’s
                competitive landscape, businesses require IT infrastructures that are scalable, secure, and
                cost-efficient. However, the complexity of cloud platforms, compliance demands, and 24/7
                operational requirements can create challenges.</p>
              <p>We provide a structured, enterprise-grade approach that combines cloud architecture design,
                hybrid and multi-cloud integration, proactive monitoring, and robust disaster recovery
                strategies. By leveraging industry-leading platforms such as AWS, Microsoft Azure, and Google
                Cloud, we ensure that organizations can innovate quickly, maintain compliance, and achieve
                operational resilience.</p>
            </section>
            <div className="all-services-divider" />
            {/* Cloud Architecture Design */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-drafting-compass" />
                <h3 className="all-services-service-title">Cloud Architecture Design</h3>
              </div>
              <p>The foundation of any successful cloud strategy lies in the right architecture. We design secure,
                scalable, and performance-driven cloud infrastructures tailored to organizational goals.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Our architects evaluate
                  workloads, compliance needs, and performance requirements before creating cloud-native
                  architectures that maximize efficiency.</li>
                <li className="all-services-list-item"><strong>Technologies:</strong> AWS Well-Architected
                  Framework, Azure Architecture Center, and Google Cloud’s best practices.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> A well-structured
                  architecture provides long-term scalability, reduces operational risks, and ensures optimal
                  resource utilization.</li>
              </ul>
            </section>
            {/* Multi-Cloud / Hybrid Setup */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-network-wired" />
                <h3 className="all-services-service-title">Multi-Cloud / Hybrid Setup</h3>
              </div>
              <p>Enterprises today often require the flexibility of multiple providers or a hybrid model that
                integrates on-premises systems with cloud platforms. We deliver seamless multi-cloud and hybrid
                architectures to ensure agility and avoid vendor lock-in.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Applications and workloads are
                  distributed strategically across cloud providers (AWS, Azure, GCP) or between cloud and
                  on-premises environments.</li>
                <li className="all-services-list-item"><strong>Technologies:</strong> Kubernetes for workload
                  portability, Terraform and Pulumi for unified infrastructure provisioning, and secure
                  interconnect solutions.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Businesses gain
                  resilience, cost optimization, and the ability to leverage the strengths of multiple
                  providers without being tied to one vendor.</li>
              </ul>
            </section>
            {/* 24/7 Cloud Monitoring & Incident Response */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-clock" />
                <h3 className="all-services-service-title">24/7 Cloud Monitoring &amp; Incident Response</h3>
              </div>
              <p>Operational reliability is critical for enterprise success. We provide round-the-clock cloud
                monitoring and incident response to ensure uninterrupted services and fast problem resolution.
              </p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Real-time monitoring tools
                  track performance, security, and system health. Alerts trigger rapid incident response to
                  address issues before they affect end-users.</li>
                <li className="all-services-list-item"><strong>Technologies:</strong> Prometheus + Grafana for
                  monitoring, ELK/EFK stacks for log management, and cloud-native monitoring tools
                  (CloudWatch, Azure Monitor, Stackdriver).</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Ensures high availability,
                  minimizes downtime, and supports proactive decision-making with real-time insights.</li>
              </ul>
            </section>
            {/* Backup & Disaster Recovery Solutions */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-database" />
                <h3 className="all-services-service-title">Backup &amp; Disaster Recovery Solutions</h3>
              </div>
              <p>Data resilience is a non-negotiable requirement for modern enterprises. We implement backup and
                disaster recovery (DR) strategies to safeguard business-critical workloads against failures,
                cyberattacks, or natural disasters.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Automated backup systems store
                  data across multiple regions, while disaster recovery solutions ensure rapid restoration of
                  workloads in case of system failure.</li>
                <li className="all-services-list-item"><strong>Technologies:</strong> AWS Backup, Azure Site
                  Recovery, GCP Backup &amp; DR, Veeam, and Rubrik.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Guarantees business
                  continuity, minimizes recovery time objectives (RTOs) and recovery point objectives (RPOs),
                  and ensures compliance with industry data protection standards.</li>
              </ul>
            </section>
            <div className="all-services-divider" />
            {/* Key Features */}
            <section className="all-services-features">
              <h3 className="all-services-service-title mb-15">Key Features of Cloud Consulting &amp; Managed Services
              </h3>
              <ul className="all-services-features-list">
                <li className="all-services-features-item"><i className="all-services-icon fas fa-drafting-compass" /><strong>Strategic
                  Architecture</strong> → Tailored, cloud-native designs that align with business goals.
                </li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-cloud" /><strong>Hybrid &amp; Multi-Cloud
                  Flexibility</strong> → Greater agility and resilience with cross-platform integration.
                </li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-shield-alt" /><strong>Proactive Reliability</strong> →
                  24/7 monitoring ensures consistent performance and rapid issue resolution.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-sync-alt" /><strong>Business Continuity</strong> →
                  Strong disaster recovery frameworks protect data and minimize downtime.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-lock" /><strong>Security &amp; Compliance</strong> →
                  Integrated controls safeguard sensitive information and meet regulatory requirements.</li>
              </ul>
            </section>
            <section className="all-services-conclusion">
              <p>With our Cloud Consulting &amp; Managed Services, enterprises gain more than a technology
                partner—they gain a strategic advisor and managed service provider that ensures their cloud
                environments are resilient, compliant, and future-ready.</p>
            </section>
          </div>
          {/*==================== Cloud Consulting & Managed Services End ====================*/}

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

export default CloudConsultingAndManagedServices