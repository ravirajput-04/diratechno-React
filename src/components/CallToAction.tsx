import { Link } from "react-router-dom";

function CallToAction() {
    return (
        <>
            {/*========== Call to Action Area Start ============*/}
            <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-7">
                            <div className="cta-content md-text-center">
                                <h3 className="heading" style={{ color: "#fff" }}>
                                    We run all kinds of IT services that vow your Success
                                    {/* <span className="text-color-primary">&nbsp;Success</span> */}
                                </h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="cta-button-group--two text-center">
                                <Link to="/contact-us" className="btn btn--white btn-one">
                                    <span className="btn-icon me-2">
                                        <i className="far fa-comment-alt" />
                                    </span>
                                    Let's talk
                                </Link>
                                <Link to="/services" className="btn btn--secondary btn-one">
                                    <span className="btn-icon me-2">
                                        <i className="fas fa-info-circle" />
                                    </span>
                                    Get info
                                </Link>
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