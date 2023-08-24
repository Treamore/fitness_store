import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

function PartnersSlider() {
  return (
    <div className="page__brands brands-slider">
      <div className="brands-slider__container _container">
        <Swiper
          modules={[Navigation]}
          className="brands-slider__body swiper"
          spaceBetween={0}
          slidesPerView={5}
          slidesPerGroup={1}
          speed={800}
          loop={true}
          navigation={{
            nextEl: '.brands-slider__arrow_next',
            prevEl: '.brands-slider__arrow_prev',
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
          }}>
          <div className="brands-slider__wrapper swiper-wrapper">
            <SwiperSlide className="brands-slider__slide swiper-slide">
              <img src="images/partners_emblem.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="brands-slider__slide swiper-slide">
              <img src="images/partners_emblem.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="brands-slider__slide swiper-slide">
              <img src="images/partners_emblem.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="brands-slider__slide swiper-slide">
              <img src="images/partners_emblem.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="brands-slider__slide swiper-slide">
              <img src="images/partners_emblem.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="brands-slider__slide swiper-slide">
              <img src="images/partners_emblem.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="brands-slider__slide swiper-slide">
              <img src="images/partners_emblem.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="brands-slider__slide swiper-slide">
              <img src="images/partners_emblem.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="brands-slider__slide swiper-slide">
              <img src="images/partners_emblem.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="brands-slider__slide swiper-slide">
              <img src="images/partners_emblem.png" alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="brands-slider__arrows">
          <div className="brands-slider__arrow brands-slider__arrow_prev _arrow _arrow_prev"></div>
          <div className="brands-slider__arrow brands-slider__arrow_next _arrow _arrow_next"></div>
        </div>
      </div>
    </div>
  );
}

export default PartnersSlider;
