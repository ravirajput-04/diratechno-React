import ContactForm from "./ContactForm";
function CallToAction() {
    return (
        <>
            {/*========== Call to Action Area Start ============*/}
            <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-5">
                            <div className="cta-content md-text-center">
                                <h3 className="heading" style={{ color: "#fff" }}>
                                    We run all kinds of IT services that vow your Success
                                </h3>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="cta-button-group--two text-center">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*========== Call to Action Area End ============*/}
        </>
    )
}

export default CallToAction