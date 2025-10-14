import AllServices from "../components/AllServices";
import CallToAction from "../components/CallToAction";
import Cookies from "../components/Cookies";
import Counter from "../components/Counter";
import Divider from "../components/Divider";
import Testimonials from "../components/Testimonials";

function Services() {
  return (
    <>
      <div id="main-wrapper">
        <div className="site-wrapper-reveal" >
          {/*services intro area start*/}
          <div className="feature-large-images-wrapper section-space--ptb_60">
            <div className="container">
              <div className="cybersecurity-about-box">
                <div className="row">
                  <div className="col-lg-2">
                    <div className="modern-number-01">
                      <h3 className="heading mt-30">
                        <span className="text-color-primary">
                          Our<br />Services</span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-9 offset-lg-1">
                    <div className="conact-us-wrap-one managed-it">
                      <h5 className="heading">
                        At <span className="text-color-primary"> Dira Techno</span>
                        , we provide comprehensive technology solutions designed to meet the strategic
                        objectives of modern enterprises. Our services are structured to ensure
                        scalability, reliability, and long-term value creation, enabling organizations
                        to remain competitive in an increasingly digital economy.
                      </h5>
                      <div className="sub-heading">
                        We’re available for 8 hours a day!<br />Contact to require
                        a detailed analysis and assessment of your plan.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*services intro area end*/}
          {/*all services details area start*/}
          <div className="timeline-area section-space--ptb_30">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ht-timeline style-01">
                    <ul className="tm-timeline-list ht-animation-queue">
                      <li className="line" />
                      {/* DevOps & Cloud Services */}
                      <li className="item animate">
                        <div className="dots">
                          <div className="middle-dot" />
                        </div>
                        <div className="row">
                          <div className="col-md-6 timeline-col left timeline-feature">
                            <div className="inner">
                              <div className="photo">
                                <img src="assets\images\projects\devops-and-cloud-services.jpg" alt="DevOps & Cloud Services" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 timeline-col right timeline-info">
                            <div className="inner">
                              <div className="content-wrap">
                                <div className="content-body">
                                  <h6 className="heading">DevOps &amp; Cloud Services</h6>
                                  <div className="text">
                                    We assist organizations in modernizing their IT
                                    operations through the adoption of advanced
                                    DevOps methodologies and cloud-native solutions. Our
                                    approach ensures seamless integration
                                    between development and operations, resulting in
                                    enhanced agility, reduced deployment risks,
                                    and improved system reliability. By implementing
                                    automation, continuous integration, and
                                    optimized cloud infrastructure, we enable enterprises to
                                    accelerate delivery cycles, minimize
                                    costs, and maintain consistent operational efficiency.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Cloud Consulting & Managed Services */}
                      <li className="item animate">
                        <div className="dots">
                          <div className="middle-dot" />
                        </div>
                        <div className="row">
                          <div className="col-md-6 timeline-col left timeline-feature">
                            <div className="inner">
                              <div className="photo">
                                <img src="assets\images\projects\cloud-consulting-and-managed-services.jpg" alt="Cloud Consulting & Managed Services" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 timeline-col right timeline-info">
                            <div className="inner">
                              <div className="content-wrap">
                                <div className="content-body">
                                  <h6 className="heading">Cloud Consulting &amp; Managed Services</h6>
                                  <div className="text">
                                    The shift to cloud infrastructure requires not only
                                    technical execution but also strategic
                                    guidance. Our Cloud Consulting &amp; Managed Services are
                                    designed to support organizations at
                                    every stage of their cloud journey. From initial
                                    assessments and migration planning to ongoing
                                    management and optimization, we deliver solutions that
                                    enhance performance, security, and
                                    compliance. With our proactive management approach,
                                    businesses are able to focus on core
                                    objectives while ensuring their cloud environments
                                    remain secure, resilient, and cost-effective.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Web Application Development */}
                      <li className="item animate">
                        <div className="dots">
                          <div className="middle-dot" />
                        </div>
                        <div className="row">
                          <div className="col-md-6 timeline-col left timeline-feature">
                            <div className="inner">
                              <div className="photo">
                                <img src="assets\images\projects\web-application-development-services.jpg" alt="Web Application Development" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 timeline-col right timeline-info">
                            <div className="inner">
                              <div className="content-wrap">
                                <div className="content-body">
                                  <h6 className="heading">Web Application Development</h6>
                                  <div className="text">
                                    A robust digital presence is integral to modern business
                                    operations. We specialize in the
                                    development of secure, scalable, and high-performing web
                                    applications that align with
                                    organizational objectives and industry standards. Each
                                    solution is engineered with a focus on
                                    usability, reliability, and integration capability. By
                                    combining technological expertise with a
                                    thorough understanding of business processes, we deliver
                                    applications that support efficiency,
                                    drive engagement, and create measurable business impact.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Mobile Application Development */}
                      <li className="item animate">
                        <div className="dots">
                          <div className="middle-dot" />
                        </div>
                        <div className="row">
                          <div className="col-md-6 timeline-col left timeline-feature">
                            <div className="inner">
                              <div className="photo">
                                <img src="assets\images\projects\mobile-application-and-development-services.jpg" alt="Mobile Application Development" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 timeline-col right timeline-info">
                            <div className="inner">
                              <div className="content-wrap">
                                <div className="content-body">
                                  <h6 className="heading">Mobile Application Development</h6>
                                  <div className="text">
                                    Mobile technologies continue to transform how
                                    enterprises interact with customers and
                                    stakeholders. Our Mobile Application Development
                                    services provide organizations with tailored
                                    solutions that extend their reach and enhance
                                    engagement. We design and develop applications
                                    that deliver consistent performance across platforms
                                    while adhering to strict security and
                                    compliance requirements. Each solution is built to
                                    support business scalability, strengthen
                                    customer relationships, and provide a sustainable
                                    competitive advantage in an increasingly
                                    mobile-driven market.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Agency Partnership */}
                      <li className="item animate">
                        <div className="dots">
                          <div className="middle-dot" />
                        </div>
                        <div className="row">
                          <div className="col-md-6 timeline-col left timeline-feature">
                            <div className="inner">
                              <div className="photo">
                                <img src="assets\images\projects\agency-partnership-services.jpg" alt="Agency Partnership" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 timeline-col right timeline-info">
                            <div className="inner">
                              <div className="content-wrap">
                                <div className="content-body">
                                  <h6 className="heading">Agency Partnership</h6>
                                  <div className="text">
                                    Our Agency Partnership program is designed to support
                                    organizations and service providers
                                    seeking to expand their technical capabilities. Acting
                                    as a trusted extension of your team, we
                                    deliver development, cloud, and support services under
                                    flexible engagement models. Our
                                    partnerships emphasize transparency, reliability, and
                                    long-term value creation, ensuring that
                                    agencies and enterprises alike can scale their service
                                    offerings with confidence. By aligning
                                    with your strategic objectives, we provide the expertise
                                    necessary to enhance client
                                    satisfaction and achieve sustainable growth.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*all services details area end*/}
        </div>

        <Divider />
        <AllServices />
        <Testimonials />
        <Counter />
        <CallToAction />
        <Cookies />
      </div>
    </>
  )
}

export default Services