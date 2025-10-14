import AllServices from "../components/AllServices"
import CallToAction from "../components/CallToAction"
import Cookies from "../components/Cookies"
import Divider from "../components/Divider"
import Testimonials from "../components/Testimonials"

function MobileApplicationDevelopmentServices() {
  return (
    <>
      <div id="main-wrapper">
        <div className="site-wrapper-reveal">
          {/*==================== Mobile Application Development Start ====================*/}
          <div className="typed-text-wrapper section-space--ptb_60">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div className="typed-text-wrap">
                    <h4 className="cd-headline letters type">
                      <span className="cd-words-wrapper waiting">
                        <b className="is-visible">Mobile Application Development&nbsp;</b>
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
              <p>At <strong>Dira Techno</strong>, we deliver end-to-end mobile application development
                solutions designed to help enterprises engage customers, empower employees, and accelerate
                business growth. In today’s mobile-first world, organizations must provide seamless, secure, and
                highly responsive mobile experiences that meet user expectations and business objectives.</p>
              <p>Our mobile development process covers every stage of the lifecycle—from strategy and design to
                development, deployment, and ongoing optimization. Whether it’s a consumer-facing application,
                an enterprise productivity tool, or a multi-tenant SaaS product, we ensure that the final
                solution is scalable, user-friendly, and aligned with your long-term digital strategy.</p>
            </section>
            <div className="all-services-divider" />
            {/* Cross-Platform Applications */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-mobile-alt" />
                <h3 className="all-services-service-title">Cross-Platform Applications</h3>
              </div>
              <p>Building applications that run across devices is key to reducing development cost and
                time-to-market. We develop cross-platform apps using frameworks like Flutter, React Native, and
                Ionic to ensure a single codebase delivers consistent experiences on both iOS and Android.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Our team builds shared
                  codebases with native-like performance, ensuring UI components adhere to platform-specific
                  guidelines while reusing business logic.</li>
                <li className="all-services-list-item"><strong>Technologies:</strong> Flutter (Dart), React Native
                  (JavaScript/TypeScript), Ionic, Capacitor.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Faster development cycles,
                  reduced maintenance costs, and simultaneous feature rollout across platforms.</li>
              </ul>
            </section>
            {/* Native Applications */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-mobile" />
                <h3 className="all-services-service-title">Native Applications</h3>
              </div>
              <p>For businesses requiring maximum performance, security, or device-specific functionality, we
                build native applications tailored for each platform.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Apps are developed
                  individually for iOS (Swift) and Android (Kotlin/Java), leveraging platform-specific APIs
                  and design guidelines.</li>
                <li className="all-services-list-item"><strong>Technologies:</strong> Swift, SwiftUI, Kotlin,
                  Jetpack Compose, Java, Xcode, Android Studio.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Native apps offer optimal
                  performance, access to device hardware, and a highly refined user experience that enhances
                  engagement.</li>
              </ul>
            </section>
            {/* MBaaS Integration */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-cloud-upload-alt" />
                <h3 className="all-services-service-title">Mobile Backend as a Service (MBaaS) Integration</h3>
              </div>
              <p>Mobile applications need powerful, reliable backends to handle authentication, data storage, and
                real-time updates. We integrate MBaaS platforms to streamline backend management.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Cloud-hosted backends provide
                  APIs, user management, push notifications, and analytics without the need to build custom
                  server infrastructure.</li>
                <li className="all-services-list-item"><strong>Technologies:</strong> Firebase, AWS Amplify,
                  Backendless, Supabase.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Faster time-to-market,
                  reduced operational overhead, and scalability without managing infrastructure manually.</li>
              </ul>
            </section>
            {/* App Deployment & Store Management */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-store" />
                <h3 className="all-services-service-title">App Deployment &amp; Store Management</h3>
              </div>
              <p>Launching an app successfully requires more than just development. We manage the entire app
                deployment process to ensure smooth publishing and compliance with store guidelines.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Apps are tested, signed, and
                  submitted to Google Play Store and Apple App Store, with attention to platform-specific
                  compliance requirements.</li>
                <li className="all-services-list-item"><strong>Technologies:</strong> Google Play Console, App Store
                  Connect, TestFlight, CI/CD pipelines for automated builds.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Faster go-live process,
                  reduced risk of rejection, and optimized app listing for maximum visibility and downloads.
                </li>
              </ul>
            </section>
            {/* UI/UX Design & Prototyping */}
            <section className="all-services-service">
              <div className="all-services-service-header">
                <i className="fas fa-pencil-ruler" />
                <h3 className="all-services-service-title">UI/UX Design &amp; Prototyping</h3>
              </div>
              <p>User experience is a key differentiator for mobile applications. We design intuitive, visually
                appealing interfaces that deliver seamless interactions and align with brand identity.</p>
              <ul className="all-services-list">
                <li className="all-services-list-item"><strong>How it works:</strong> Our design team creates
                  interactive prototypes, wireframes, and clickable mockups to validate user flows before
                  development begins.</li>
                <li className="all-services-list-item"><strong>Technologies:</strong> Figma, Adobe XD, Sketch,
                  InVision, Zeplin.</li>
                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Improves user adoption
                  rates, reduces post-launch rework, and enhances overall customer satisfaction.</li>
              </ul>
            </section>
            <div className="all-services-divider" />
            {/* Key Features */}
            <section className="all-services-features">
              <h3 className="all-services-service-title mb-15">Key Features of Mobile Application Development</h3>
              <ul className="all-services-features-list">
                <li className="all-services-features-item"><i className="all-services-icon fas fa-mobile-alt" /><strong>Multi-Platform Reach</strong> →
                  Cross-platform solutions ensure consistent user experiences on iOS and Android.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-bolt" /><strong>High-Performance Native Apps</strong>
                  → Optimized for speed, security, and device integration.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-cloud" /><strong>Cloud-Powered Backends</strong> →
                  Scalable and serverless backends for reliable data handling.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-rocket" /><strong>Streamlined Deployment</strong> →
                  Store compliance, version management, and release automation handled end-to-end.</li>
                <li className="all-services-features-item"><i className="all-services-icon fas fa-pencil-ruler" /><strong>Human-Centered Design</strong>
                  → Engaging UI/UX to boost adoption and retention.</li>
              </ul>
            </section>
            <section className="all-services-conclusion">
              <p>With our Mobile Application Development services, enterprises can confidently deliver secure,
                scalable, and user-focused mobile solutions that enhance customer engagement, streamline
                operations, and unlock new business opportunities.</p>
            </section>
          </div>
          {/*==================== Mobile Application Development End ====================*/}

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

export default MobileApplicationDevelopmentServices