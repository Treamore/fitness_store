import MainBannerSlider__Slide from './MainBannerSlider__Slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useEffect } from 'react';

function MainBannerSlider() {
  const bulletsOnLoad = () => {
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 770) {
      let mainsliderDotts = document.querySelectorAll(
        '.mainslider__dotts .swiper-pagination-bullet',
      );
      for (let i = 0; i < mainsliderDotts.length; i++) {
        if (mainsliderDotts[i].classList.contains('load')) {
          mainsliderDotts[i].style.backgroundImage = ``;
          mainsliderDotts[i].classList.remove('load');
        }
      }
    } else {
      let mainsliderImages = document.querySelectorAll('.mainslider__slide');
      let mainsliderDotts = document.querySelectorAll(
        '.mainslider__dotts .swiper-pagination-bullet',
      );
      for (let i = 0; i < mainsliderDotts.length; i++) {
        if (!mainsliderDotts[i].classList.contains('load')) {
          let mainsliderImage = getComputedStyle(mainsliderImages[i], null).backgroundImage;
          mainsliderDotts[i].style.backgroundImage = `${mainsliderImage}`;
          mainsliderDotts[i].classList.add('load');
        }
      }
    }
  };

  useEffect(() => {
    bulletsOnLoad();
  }, []);

  window.addEventListener('load', function (event) {
    bulletsOnLoad();
  });

  window.addEventListener('resize', function (event) {
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 770) {
      let mainsliderDotts = document.querySelectorAll(
        '.mainslider__dotts .swiper-pagination-bullet',
      );
      for (let i = 0; i < mainsliderDotts.length; i++) {
        if (mainsliderDotts[i].classList.contains('resize')) {
          mainsliderDotts[i].style.backgroundImage = ``;
          mainsliderDotts[i].classList.remove('resize');
        }
      }
    } else {
      let mainsliderImages = document.querySelectorAll('.mainslider__slide');
      let mainsliderDotts = document.querySelectorAll(
        '.mainslider__dotts .swiper-pagination-bullet',
      );
      for (let i = 0; i < mainsliderDotts.length; i++) {
        if (!mainsliderDotts[i].classList.contains('resize')) {
          let mainsliderImage = getComputedStyle(mainsliderImages[i], null).backgroundImage;
          mainsliderDotts[i].style.backgroundImage = `${mainsliderImage}`;
          mainsliderDotts[i].classList.add('resize');
        }
      }
    }
  });

  return (
    <Swiper
      className="page__slider mainslider__body swiper"
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      speed={800}
      loop={true}
      autoHeight={true}
      observer={true}
      observeParents={true}
      pagination={{ el: '.mainslider__dotts', clickable: true }}>
      <div className="mainslider__wrapper swiper-wrapper">
        <SwiperSlide
          className="mainslider__slide swiper-slide"
          style={{ backgroundImage: "url('./images/slider/01.jpg')" }}>
          <MainBannerSlider__Slide />
        </SwiperSlide>
        <SwiperSlide
          className="mainslider__slide swiper-slide"
          style={{ backgroundImage: "url('./images/slider/01.jpg')" }}>
          <MainBannerSlider__Slide />
        </SwiperSlide>
        <SwiperSlide
          className="mainslider__slide swiper-slide"
          style={{ backgroundImage: "url('./images/slider/01.jpg')" }}>
          <MainBannerSlider__Slide />
        </SwiperSlide>
        <SwiperSlide
          className="mainslider__slide swiper-slide"
          style={{ backgroundImage: "url('./images/slider/01.jpg')" }}>
          <MainBannerSlider__Slide />
        </SwiperSlide>
        <SwiperSlide
          className="mainslider__slide swiper-slide"
          style={{ backgroundImage: "url('./images/slider/01.jpg')" }}>
          <MainBannerSlider__Slide />
        </SwiperSlide>
      </div>
      <div className="mainslider__dotts swiper-pagination"></div>
    </Swiper>
  );
}

export default MainBannerSlider;
