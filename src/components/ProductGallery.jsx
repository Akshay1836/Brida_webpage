import React from "react";
import "../styles/ProductGallery.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [{ id: 1, name: "Brightening Powders", price: "£28.00", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80", hoverImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60", }, { id: 2, name: "Wedding Cake Concealer", price: "£28.00", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", hoverImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=60", }, { id: 3, name: "Brontour Powders", price: "£28.00", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80", hoverImg: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=60", }, { id: 4, name: "Bridal Brush Collection 15 Set", price: "£200.00", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", hoverImg: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=60", }, { id: 5, name: "Brightening Powders", price: "£28.00", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80", hoverImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60", }, { id: 6, name: "Wedding Cake Concealer", price: "£28.00", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", hoverImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=60", }, { id: 7, name: "Brontour Powders", price: "£28.00", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80", hoverImg: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=60", }, { id: 8, name: "Bridal Brush Collection 15 Set", price: "£200.00", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", hoverImg: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=60", },];

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
                spaceBetween={25}
                slidesPerView={1.2}
                grabCursor={true}
                loop={true}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                pagination={{ clickable: true }}
                navigation={true}

                breakpoints={{
                    600: { slidesPerView: 2 },
                    900: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
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

            <button className="view-btn">View all</button>
        </div>
    );
};

export default ProductGallery;