import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Amit Jain",
        image: "assets/images/testimonial/mitech-testimonial-avata-01-90x90.webp",
        text: "Dira Techno helped us automate our logistics workflows end-to-end. Their expertise in RPA and process automation reduced our manual workload by 40%, improving efficiency and accuracy across departments.",
    },
    {
        name: "Anuj Goyal",
        image: "assets/images/testimonial/mitech-testimonial-avata-02-90x90.webp",
        text: "Their team delivered a secure and compliant solution for our financial platform. We were impressed with their commitment to data security and regulatory compliance, which gave us complete peace of mind.",
    },
    {
        name: "Michael Lee",
        image: "assets/images/testimonial/mitech-testimonial-avata-03-90x90.webp",
        text: "We chose Dira Techno for their industry-specific automation expertise. The solutions were tailor-made for our retail operations and helped us scale faster while reducing operational costs.",
    },
    {
        name: "Priya Mehta",
        image: "assets/images/testimonial/mitech-testimonial-avata-04-90x90.webp",
        text: "What impressed us most is their dedicated support team and post-launch maintenance. They ensured smooth system performance and proactive updates, which made them a long-term technology partner for us.",
    },
];

export default function Testimonials() {
    return (
        <div className="testimonial-slider-area section-space--ptb_60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-wrap text-center section-space--mb_40">
                            <h6 className="section-sub-title mb-20">What Our Clients Say</h6>
                            <h3 className="heading">
                                Why Businesses Trust
                                <span className="text-color-primary"> Dira Techno</span>
                            </h3>
                        </div>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000 }}
                            loop
                            spaceBetween={30}
                            slidesPerView={2}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                575: { slidesPerView: 1 },
                                767: { slidesPerView: 1 },
                                991: { slidesPerView: 2 },
                                1499: { slidesPerView: 2 },
                            }}
                        >
                            {testimonials.map((t, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="testimonial-slider__one wow move-up">
                                        <div className="testimonial-slider--info">
                                            <div className="testimonial-slider__media">
                                                <img
                                                    src={t.image}
                                                    className="img-fluid"
                                                    alt={`Client testimonial avatar ${t.name}`}
                                                />
                                            </div>
                                            <div className="testimonial-slider__author">
                                                <div className="testimonial-rating">
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                </div>
                                                <div className="author-info">
                                                    <h6 className="name">{t.name}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial-slider__text">{t.text}</div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
