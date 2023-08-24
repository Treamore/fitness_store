import MainProductSlider__Slide from './MainProductSlider__Slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

function MainProductSlider() {
  return (
    <div className="page__products products-slider">
      <div className="products-slider__header">
        <div className="products-slider__title">Popular goods</div>
        <div className="products-slider__control">
          <div className="products-slider__arrow products-slider__arrow_prev swiper-button-prev _arrow _arrow_prev"></div>
          <div className="products-slider__info"></div>
          <div className="products-slider__arrow products-slider__arrow_next swiper-button-next _arrow _arrow_next"></div>
        </div>
      </div>
      <Swiper
        className="products-slider__item swiper"
        modules={[Navigation, Pagination]}
        observer={true}
        observeParents={true}
        spaceBetween={0}
        slidesPerView={1}
        autoHeight={true}
        speed={800}
        loop={true}
        navigation={{
          nextEl: '.products-slider__arrow_next',
          prevEl: '.products-slider__arrow_prev',
        }}
        pagination={{ el: '.products-slider__info', type: 'fraction' }}>
        <div className="swiper-wrapper">
          <SwiperSlide className="products-slider__slide swiper-slide">
            <MainProductSlider__Slide indexStart={0} />
          </SwiperSlide>
          <SwiperSlide className="products-slider__slide swiper-slide">
            <MainProductSlider__Slide indexStart={6} />
          </SwiperSlide>
          <SwiperSlide className="products-slider__slide swiper-slide">
            <MainProductSlider__Slide indexStart={12} />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default MainProductSlider;
