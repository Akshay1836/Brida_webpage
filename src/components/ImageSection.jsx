import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/ImageSection.css'
const images = [
  { src: '/Images/wed1.jpg', caption: 'Radiant Bride' },
  { src: '/Images/wed2.jpg', caption: 'Bridal Makeup Artistry' },
  { src: '/Images/wed26.jpg', caption: 'Elegant Dress Style' },
  { src: '/Images/wed4.jpg', caption: 'Classic Bridal Look' },
  { src: '/Images/wed5.jpg', caption: 'Modern Bride' },
  { src: '/Images/wed29.jpg', caption: 'Glamorous Wedding' },
  { src: '/Images/wed7.jpg', caption: 'Bridal Accessories' },
  { src: '/Images/wed40.jpg', caption: 'Bridal Portrait' },
  { src: '/Images/wed9.jpg', caption: 'Bridal Veil Beauty' },
  { src: '/Images/wed10.jpg', caption: 'Bridal Elegance' },
  { src: '/Images/wed11.jpg', caption: 'Bridal Details' },
  { src: '/Images/wed12.jpg', caption: 'Wedding Day Style' },
  
]
  



function ImageSection({
  sectionTitle = 'Bridal Beauty in Bloom',
  sectionSubtext = "Discover the artistry behind every bride's luminous transformation. From subtle elegance to radiant glamour, witness makeup perfection in every frame."
}){
  return (
    <section id="gallery-stack" className="gallery-stack-section">
      <div className="container gallery-stack-inner">
        <div className="gallery-stack-heading">
          <h2 className="section-title">{sectionTitle}</h2>
        </div>
        <div className="gallery-stack-subtext-wrap">
          <p className="gallery-subtext">{sectionSubtext}</p>
        </div>
      </div>

      <div className="gallery-stack-swiper-wrap full-bleed">
   
        <Swiper
          modules={[Pagination, Navigation]}
          className="gallery-stack-swiper"
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={16}
          speed={700}
          grabCursor={true}
          watchOverflow={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            prevEl: '.gallery-stack-arrow-prev',
            nextEl: '.gallery-stack-arrow-next',
          }}
          loop={images.length > 2}
          rewind={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 12,
            },
            700: {
              slidesPerView: 'auto',
              centeredSlides: false,
              spaceBetween: -6,
            },
          }}
        >
          {images.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="gallery-stack-slide-card" tabIndex={0}>
                <img src={item.src} alt={item.caption || `Wedding ${i+1}`} loading="lazy" />
                <div className="gallery-stack-caption" aria-hidden>
                  <div className="caption-inner">{item.caption}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="gallery-stack-arrow gallery-stack-arrow-prev" aria-label="Previous image">
          <span aria-hidden="true">&#8592;</span>
        </button>
        <button className="gallery-stack-arrow gallery-stack-arrow-next" aria-label="Next image">
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>
    </section>
  )
}

export default ImageSection;