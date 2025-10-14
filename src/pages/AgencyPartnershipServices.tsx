import AllServices from "../components/AllServices"
import CallToAction from "../components/CallToAction"
import Divider from "../components/Divider"
import Testimonials from "../components/Testimonials"
import Cookies from "../components/Cookies"


function AgencyPartnershipServices() {
  return (
    <>
      <div id="main-wrapper">
        <div className="site-wrapper-reveal">
          {/*==================== Agency Partnership Start ====================*/}
          <div className="typed-text-wrapper section-space--ptb_60">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div className="typed-text-wrap">
                    <h4 className="cd-headline letters type">
                      <span className="cd-words-wrapper waiting">
                        <b className="is-visible">Agency Partnership&nbsp;</b>
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
              <p>At <strong>Dira Techno</strong>, we believe that collaboration is the key to long-term
                growth and innovation. Our Agency Partnership program is designed for digital agencies,
                consultancies, and enterprises seeking to expand their technical capabilities without investing
                heavily in additional in-house resources. Acting as a strategic and technical extension of your
                team, we enable you to deliver high-quality development, cloud, and support services under your
                own brand while maintaining complete control over client relationships.</p>
              <p>Our partnership approach is built on transparency, reliability, and scalability. Whether you need
                a full white-label development team, dedicated developers for specific projects, or an ongoing
                DevOps and maintenance partner, we offer flexible engagement models that align with your
                business goals.</p>
            </section>
            <div className="all-services-divider" />
            {/* White-Label Development Services */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-user-secret" />
                <h3 className="all-services-service-title">White-Label Development Services</h3>
              </div>
              <p>We provide end-to-end white-label software development, allowing agencies to deliver complex
                projects under their own brand without disclosing a third-party involvement.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Our team handles planning,
                  development, and testing while maintaining confidentiality. Deliverables are branded as your
                  agency’s work.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Enables agencies to scale
                  quickly, take on larger projects, and expand service offerings without hiring additional
                  staff.</li>
              </ul>
            </section>
            {/* Dedicated Developers */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-users-cog" />
                <h3 className="all-services-service-title">Dedicated Developers</h3>
              </div>
              <p>For agencies requiring focused expertise, we offer dedicated developers who work exclusively on
                your projects as an extension of your in-house team.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Developers are assigned to
                  your account, follow your processes, and communicate directly with your project managers.
                </li>
                <li className="all-services-list-item"><strong>Technologies:</strong> Full-stack, frontend, backend,
                  DevOps, cloud specialists, QA engineers.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Reduces hiring costs,
                  speeds up delivery, and gives you the flexibility to scale resources on demand.</li>
              </ul>
            </section>
            {/* DevOps & Cloud Partnership */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-cloud" />
                <h3 className="all-services-service-title">DevOps &amp; Cloud Partnership</h3>
              </div>
              <p>Agencies that lack in-house DevOps or cloud capabilities can leverage our DevOps &amp; Cloud
                expertise to strengthen their service portfolio.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> We implement CI/CD pipelines,
                  cloud infrastructure, and monitoring systems for your clients while you remain the primary
                  contact.</li>
                <li className="all-services-list-item"><strong>Technologies:</strong> Jenkins, GitHub Actions,
                  Docker, Kubernetes, AWS, Azure, GCP.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Allows agencies to offer
                  enterprise-grade infrastructure solutions without building internal DevOps teams.</li>
              </ul>
            </section>
            {/* Maintenance & Support Services */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-tools" />
                <h3 className="all-services-service-title">Maintenance &amp; Support Services</h3>
              </div>
              <p>Successful digital products require ongoing support to remain secure, performant, and up to date.
                We provide long-term maintenance and support for applications, infrastructure, and integrations.
              </p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Our team proactively monitors
                  systems, applies updates, resolves bugs, and ensures optimal uptime.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Guarantees client
                  satisfaction, reduces downtime, and strengthens agency-client relationships through reliable
                  post-launch care.</li>
              </ul>
            </section>
            {/* Custom Solutions & White-Label SaaS */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-box-open" />
                <h3 className="all-services-service-title">Custom Solutions &amp; White-Label SaaS</h3>
              </div>
              <p>Agencies looking to offer recurring-revenue solutions can partner with us to build custom SaaS
                platforms or adopt white-label SaaS products tailored to their clients.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> We design and develop
                  multi-tenant SaaS applications with branding flexibility, subscription management, and
                  analytics capabilities.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Enables agencies to launch
                  new products faster, expand into new markets, and create consistent revenue streams.</li>
              </ul>
            </section>
            <div className="all-services-divider" />
            {/* Key Features */}
            <section className="all-services-features">
              <h3 className="all-services-service-title mb-15">Key Features of Agency Partnership</h3>
              <ul className="all-services-features-list">
                <li className="all-services-features-item"><i className="all-services-icon fas fa-user-secret" /><strong>Confidential
                  Collaboration</strong> → White-label solutions delivered under your brand identity.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-users-cog" /><strong>Scalable Workforce</strong> →
                  Access to skilled developers and technical teams without overhead costs.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-cloud" /><strong>Enterprise-Grade Expertise</strong> →
                  Leverage DevOps, cloud, and SaaS capabilities to strengthen your service offerings.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-tools" /><strong>Reliable Support</strong> →
                  Maintenance and monitoring to ensure long-term client satisfaction.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-chart-line" /><strong>Revenue Expansion</strong> →
                  Launch custom SaaS products and unlock new monetization opportunities.</li>
              </ul>
            </section>
            <section className="all-services-conclusion">
              <p>With our Agency Partnership program, agencies and enterprises gain a trusted, behind-the-scenes
                technology partner who helps them scale services, win larger projects, and deliver exceptional
                value to their clients — all while keeping their own brand at the forefront.</p>
            </section>
          </div>
          {/*==================== Agency Partnership End ====================*/}

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

export default AgencyPartnershipServices