import AllServices from "../components/AllServices"
import CallToAction from "../components/CallToAction"
import Cookies from "../components/Cookies"
import Divider from "../components/Divider"
import Testimonials from "../components/Testimonials"

function WebApplicationDevelopmentServices() {
    return (
        <>
            <div id="main-wrapper">
                <div className="site-wrapper-reveal">
                    {/*==================== Web Application Development Start ====================*/}
                    <div className="typed-text-wrapper section-space--ptb_60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="typed-text-wrap">
                                        <h4 className="cd-headline letters type">
                                            <span className="cd-words-wrapper waiting">
                                                <b className="is-visible">Web Application Development&nbsp;</b>
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
                            <p>At <strong>Dira Techno</strong>, we specialize in building robust, scalable, and secure web
                                applications that empower enterprises to achieve digital transformation and deliver exceptional
                                user experiences. In a business environment where customers expect seamless digital
                                interactions, web applications are no longer optional—they are fundamental to driving
                                efficiency, engagement, and growth.</p>
                            <p>Our Web Application Development services combine modern frontend technologies, powerful backend
                                frameworks, and secure integration capabilities to create end-to-end solutions. From
                                enterprise-grade platforms such as ERP and CRM systems to scalable SaaS products, our
                                applications are engineered to support current operations while remaining adaptable for future
                                business needs.</p>
                        </section>
                        <div className="all-services-divider" />
                        {/* Custom Web Applications */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-cogs" />
                                <h3 className="all-services-service-title">Custom Web Applications</h3>
                            </div>
                            <p>Every enterprise has unique requirements, and off-the-shelf solutions often fall short. We design
                                and develop custom web applications such as ERP systems, CRM platforms, e-commerce solutions,
                                and interactive dashboards tailored to organizational workflows and business objectives.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> Through a consultative
                                    process, we analyze requirements, design scalable architectures, and deliver applications
                                    that fit seamlessly into business processes.</li>
                                <li className="all-services-list-item"><strong>Technologies:</strong> Modern full-stack frameworks
                                    and cloud-native services are leveraged to ensure performance and reliability.</li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Custom applications
                                    enhance productivity, reduce manual processes, and deliver measurable business outcomes.
                                </li>
                            </ul>
                        </section>
                        {/* Frontend Development */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-desktop" />
                                <h3 className="all-services-service-title">Frontend Development</h3>
                            </div>
                            <p>The frontend is the face of every digital solution. We create intuitive, high-performing, and
                                user-centric interfaces using modern frameworks such as React, Vue, Angular, Next.js, and
                                Nuxt.js.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> Our frontend engineers build
                                    responsive, accessible, and fast-loading interfaces optimized for multiple devices and
                                    platforms.</li>
                                <li className="all-services-list-item"><strong>Technologies:</strong> JavaScript, TypeScript, React,
                                    Vue, Angular, Next.js, Nuxt.js.</li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> A seamless UI/UX improves
                                    customer satisfaction, drives engagement, and strengthens brand perception.</li>
                            </ul>
                        </section>
                        {/* Backend Development */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-server" />
                                <h3 className="all-services-service-title">Backend Development</h3>
                            </div>
                            <p>The backend is the foundation of any web application. We build secure, scalable, and efficient
                                server-side architectures using frameworks such as Node.js, Python/Django, Laravel, and Spring
                                Boot.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> APIs, databases, and business
                                    logic are designed to handle large-scale operations with reliability and speed.</li>
                                <li className="all-services-list-item"><strong>Technologies:</strong> Node.js, Express.js, Django,
                                    Flask, Laravel, Spring Boot, PostgreSQL, MongoDB, MySQL.</li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> Robust backend systems
                                    support mission-critical operations, maintain data integrity, and ensure seamless
                                    integration across services.</li>
                            </ul>
                        </section>
                        {/* API Development & Integration */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-plug" />
                                <h3 className="all-services-service-title">API Development &amp; Integration</h3>
                            </div>
                            <p>Modern businesses rely on connectivity between systems. We provide API development and
                                integration services to enable secure communication between applications, third-party services,
                                and enterprise platforms.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> We design and implement APIs
                                    using standards like REST, GraphQL, and gRPC, enabling interoperability and scalability.
                                </li>
                                <li className="all-services-list-item"><strong>Technologies:</strong> REST APIs, GraphQL, gRPC,
                                    Swagger, Postman, OAuth, JWT.</li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> APIs ensure system
                                    interoperability, improve automation, and allow enterprises to extend functionality without
                                    rebuilding entire platforms.</li>
                            </ul>
                        </section>
                        {/* SaaS Application Development */}
                        <section className="all-services-service">
                            <div className="all-services-service-header">
                                <i className="fas fa-cloud" />
                                <h3 className="all-services-service-title">SaaS Application Development</h3>
                            </div>
                            <p>Software-as-a-Service (SaaS) platforms are at the core of modern digital business models. We
                                specialize in building multi-tenant SaaS applications that are secure, scalable, and
                                customizable.</p>
                            <ul className="all-services-list">
                                <li className="all-services-list-item"><strong>How it works:</strong> SaaS products are developed
                                    with subscription management, user roles, payment gateways, and real-time analytics
                                    built-in.</li>
                                <li className="all-services-list-item"><strong>Technologies:</strong> Cloud-native architectures,
                                    containerization, Kubernetes, and frameworks like React + Node.js for scalable SaaS stacks.
                                </li>
                                <li className="all-services-list-item"><strong>Enterprise Value:</strong> SaaS solutions provide
                                    recurring revenue opportunities, expand customer reach, and allow businesses to deliver
                                    continuous innovation without the overhead of traditional software deployment.</li>
                            </ul>
                        </section>
                        <div className="all-services-divider" />
                        {/* Key Features */}
                        <section className="all-services-features">
                            <h3 className="all-services-service-title mb-15">Key Features of Web Application Development</h3>
                            <ul className="all-services-features-list">
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-cogs" /><strong>Tailored Solutions</strong> →
                                    Applications built to match enterprise workflows and objectives.</li>
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-desktop" /><strong>Seamless User Experiences</strong>
                                    → Responsive, fast, and engaging interfaces across all devices.</li>
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-server" /><strong>Scalable Backends</strong> → Robust
                                    architectures capable of handling growing business demands.</li>
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-plug" /><strong>Interoperability</strong> → Secure
                                    APIs and integrations connect diverse systems and platforms.</li>
                                <li className="all-services-features-item"><i className="all-services-icon fas fa-cloud" /><strong>Future-Ready SaaS Platforms</strong>
                                    → Multi-tenant solutions designed for recurring revenue and continuous innovation.</li>
                            </ul>
                        </section>
                        <section className="all-services-conclusion">
                            <p>With our Web Application Development services, enterprises gain more than just software—they gain
                                strategic digital platforms that enable innovation, efficiency, and sustainable growth.</p>
                        </section>
                    </div>
                    {/*==================== Web Application Development End ====================*/}

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

export default WebApplicationDevelopmentServices