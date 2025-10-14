import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
    useEffect(() => {
        // Load Swiper CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.css';
        document.head.appendChild(link);

        // Load Swiper JS
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js';
        script.onload = () => {
            // Initialize Swiper after it loads
            if ((window as any).Swiper) {
                new (window as any).Swiper('.processing-hero-slider', {
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    effect: 'fade',
                    fadeEffect: { crossFade: true },
                    speed: 800,
                });
            }
        };
        document.head.appendChild(script);

        // Cleanup function
        return () => {
            const links = document.querySelectorAll('link[href*="swiper"]');
            const scripts = document.querySelectorAll('script[src*="swiper"]');
            links.forEach(link => link.remove());
            scripts.forEach(script => script.remove());
        };
    }, []);

    const slides = [
        {
            category: "IT Software and design",
            title: "Facilitate All Local IT-related Service Providers",
            description: "Highly Tailored IT Design, Management & Support Services.",
            image: "assets/images/hero/slider-processing-slide-01-image-01.webp"
        },
        {
            category: "Cloud & DevOps Solutions",
            title: "Deploy & Scale Modern Cloud Architecture",
            description: "CI/CD pipelines, Kubernetes orchestration, and infrastructure automation for modern businesses.",
            image: "assets/images/hero/soft-01.webp"
        },
        {
            category: "Web & Mobile Development",
            title: "Build Stunning Web & Mobile Applications",
            description: "Custom ERP, CRM, SaaS, and eCommerce applications with cutting-edge frontend & backend technologies.",
            image: "assets/images/hero/home-infotechno-main-slider-slide-01-image-02.webp"
        }
    ];

    return (
        <div className="processing-hero processing-hero-bg">
            <div className="container">
                <div className="processing-hero-slider" id="heroSwiper">
                    <div className="swiper-wrapper">
                        {/* Map through slides */}
                        {slides.map((slide, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className="row align-items-center w-100">
                                    <div className="col-lg-8 col-md-7">
                                        <div className="processing-hero-text wow move-up">
                                            <h6>{slide.category}</h6>
                                            <h1 className="font-weight--reguler mb-15">
                                                {slide.title.split("\n").map((line, i) => (
                                                    <React.Fragment key={i}>{line}<br /></React.Fragment>
                                                ))}
                                            </h1>
                                            <p>{slide.description}</p>
                                            <div className="hero-button mt-30">
                                                <Link to="/services" className="ht-btn ht-btn-md ht-btn--outline">Explore Services</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5">
                                        <div className="processing-hero-images-wrap wow move-up">
                                            <div className="processing-hero-images">
                                                <img className="img-fluid" src={slide.image} alt={slide.category} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Swiper Controls */}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
