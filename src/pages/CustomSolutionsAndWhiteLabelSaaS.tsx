import AllServices from "../components/AllServices"
import CallToAction from "../components/CallToAction"
import Divider from "../components/Divider"
import Testimonials from "../components/Testimonials"
import Cookies from "../components/Cookies"

function CustomSolutionsAndWhiteLabelSaaS() {
  return (
    <>
      <div id="main-wrapper">
        <div className="site-wrapper-reveal">
          {/*==================== Custom Solutions & White-Label SaaS Start ====================*/}
          <div className="typed-text-wrapper section-space--ptb_60">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div className="typed-text-wrap">
                    <h4 className="cd-headline letters type">
                      <span className="cd-words-wrapper waiting">
                        <b className="is-visible">Custom Solutions &amp; White-Label SaaS&nbsp;</b>
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
              <p>At <strong>Dira Techno</strong>, we empower agencies to transform from service providers
                into product-based businesses through our Custom Solutions &amp; White-Label SaaS offerings. This
                program allows agencies to offer ready-to-use, market-tested digital products under their own
                brand, enabling them to generate recurring revenue, strengthen market positioning, and diversify
                their business model — all without taking on the cost and complexity of building products from
                scratch.</p>
              <p>We design, develop, and maintain enterprise-grade SaaS platforms, mini-ERPs, and
                industry-specific solutions that agencies can resell, customize, and manage under their own
                name. By acting as your backend product partner, we handle product development, cloud
                infrastructure, security compliance, and ongoing updates — allowing you to focus on marketing,
                sales, and customer success.</p>
            </section>
            <div className="all-services-divider" />
            {/* Mini-ERP & CRM Platforms */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-project-diagram" />
                <h3 className="all-services-service-title">Mini-ERP &amp; CRM Platforms</h3>
              </div>
              <p>Many clients require lightweight, cost-effective systems for managing operations, customers, and
                workflows. Our mini-ERP and CRM platforms provide agencies with ready-made solutions that can be
                branded and tailored to client requirements.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> We deliver fully functional
                  ERP/CRM solutions with modules like inventory, invoicing, lead management, and analytics.
                </li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Agencies can offer clients
                  a complete digital operations platform quickly, enhancing client retention and creating
                  opportunities for upselling customization services.</li>
              </ul>
            </section>
            {/* eCommerce Solutions */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-shopping-cart" />
                <h3 className="all-services-service-title">eCommerce Solutions</h3>
              </div>
              <p>We provide ready-to-deploy eCommerce platforms that support multiple product types, payment
                gateways, and fulfillment workflows.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Our eCommerce frameworks come
                  with product catalog management, checkout flows, and analytics dashboards, ready to be
                  branded and launched under the agency’s identity.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Allows agencies to deliver
                  powerful online store solutions quickly, capturing growing demand for digital commerce.</li>
              </ul>
            </section>
            {/* Industry-Specific SaaS Products */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-industry" />
                <h3 className="all-services-service-title">Industry-Specific SaaS Products</h3>
              </div>
              <p>Different industries have unique requirements, and off-the-shelf tools rarely fit perfectly. We
                build industry-specific SaaS solutions for verticals such as retail, healthcare, education, and
                logistics that agencies can take to market as their own product line.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Our team designs SaaS products
                  with prebuilt workflows, compliance requirements (e.g., HIPAA for healthcare), and modular
                  customization capabilities.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Positions agencies as
                  niche solution providers, giving them a competitive edge in specialized markets and enabling
                  premium pricing models.</li>
              </ul>
            </section>
            <div className="all-services-divider" />
            {/* Key Features */}
            <section className="all-services-features">
              <h3 className="all-services-service-title mb-15">Key Features of Custom Solutions &amp; White-Label SaaS
              </h3>
              <ul className="all-services-features-list">
                <li className="all-services-features-item"><i className="all-services-icon fas fa-bolt" /><strong>Rapid Time-to-Market</strong> → Launch
                  branded products quickly without building them from scratch.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-sync-alt" /><strong>Recurring Revenue
                  Potential</strong> → Subscription-based SaaS models create consistent cash flow for
                  agencies.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-certificate" /><strong>Fully White-Labeled</strong> →
                  Clients interact only with your brand, strengthening your market presence.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-layer-group" /><strong>Customizable &amp;
                  Scalable</strong> → Solutions can be tailored per client and scale as their needs grow.
                </li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-shield-alt" /><strong>Backend Ownership &amp;
                  Support</strong> → We handle security, compliance, and technical upkeep, letting
                  agencies focus on business growth.</li>
              </ul>
            </section>
            <section className="all-services-conclusion">
              <p>With our Custom Solutions &amp; White-Label SaaS, agencies can confidently enter the product
                market, differentiate their offerings, and build long-term recurring revenue streams — all while
                leveraging our technical expertise to deliver reliable, enterprise-grade solutions.</p>
            </section>
          </div>
          {/*==================== Custom Solutions & White-Label SaaS End ====================*/}</div>
      </div>
      <Divider />
      <AllServices />
      <Testimonials />
      <CallToAction />
      <Cookies />

    </>
  )
}

export default CustomSolutionsAndWhiteLabelSaaS