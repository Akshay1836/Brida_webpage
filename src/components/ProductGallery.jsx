import React from "react";
import "../styles/ProductGallery.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  { id: 1, name: "Radiant Bride", price: "£28.00", img: "/Images/wed1.jpg", hoverImg: "/Images/wed2.jpg" },
  { id: 2, name: "Bridal Makeup Artistry", price: "£32.00", img: "/Images/wed3.jpg", hoverImg: "/Images/wed4.jpg" },
  { id: 3, name: "Elegant Dress Style", price: "£45.00", img: "/Images/wed5.jpg", hoverImg: "/Images/wed6.jpg" },
  { id: 4, name: "Classic Bridal Look", price: "£38.00", img: "/Images/wed7.jpg", hoverImg: "/Images/wed8.jpg" },
  { id: 5, name: "Modern Bride", price: "£29.00", img: "/Images/wed9.jpg", hoverImg: "/Images/wed10.jpg" },
  { id: 6, name: "Bridal Accessories", price: "£19.00", img: "/Images/wed11.jpg", hoverImg: "/Images/wed12.jpg" },
];

const ProductGallery = () => {
    return (
        <div className="gallery-container">
            <div className="luxe-essentials-header">
                <h2 className="luxe-essentials-title">SHOP ESSENTIALS</h2>
                <div className="luxe-essentials-subtitle">
                    HIGH PERFORMANCE PIGMENTS, EFFORTLESS BLENDING, CAMERA READY FINISHES,
                    IN LIGHTWEIGHT & REFINED PACKAGED TREASURES
                </div>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                className="product-gallery-swiper"
                spaceBetween={25}
                slidesPerView={1.2}
                grabCursor={true}
                speed={700}
                loop={true}
                watchOverflow={true}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={{
                    prevEl: ".product-gallery-arrow-prev",
                    nextEl: ".product-gallery-arrow-next",
                }}

                breakpoints={{
                    0: { slidesPerView: 1.1, spaceBetween: 14 },
                    600: { slidesPerView: 2, spaceBetween: 18 },
                    900: { slidesPerView: 3, spaceBetween: 22 },
                    1200: { slidesPerView: 4, spaceBetween: 25 },
                }}
            >
                {products.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="card">
                            <div className="image-wrapper">
                                <img src={item.img} alt={item.name} className="main-img" />
                                <img src={item.hoverImg} alt={`${item.name} hover`} className="hover-img" />
                                <span className="plus">+</span>
                            </div>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className="product-gallery-arrow product-gallery-arrow-prev" aria-label="Previous product">
                <span aria-hidden="true">&#8592;</span>
            </button>
            <button className="product-gallery-arrow product-gallery-arrow-next" aria-label="Next product">
                <span aria-hidden="true">&#8594;</span>
            </button>

        </div>
    );
};

export default ProductGallery;