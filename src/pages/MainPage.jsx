import React, { useEffect, useState } from 'react';
import SideNews from '../components/global/SideNews';
import SideReviews from '../components/global/SideReviews';
import SideCatalogue from '../components/global/SideCatalogue';
import Search from '../components/global/Search';
import MainBannerSlider from '../components/main/MainBannerSlider';
import MainProductSlider from '../components/main/MainProductSlider';
import PartnersSlider from '../components/global/PartnersSlider';
import AboutCompany from '../components/main/AboutCompany';

export const MainPage = () => {
  const [mobileView, setMobileView] = useState(false);
  window.addEventListener('load', function (event) {
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    viewport_width > 992 ? setMobileView(false) : setMobileView(true);
  });
  window.addEventListener('resize', function (event) {
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    viewport_width > 992 ? setMobileView(false) : setMobileView(true);
  });
  useEffect(() => {
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    viewport_width > 992 ? setMobileView(false) : setMobileView(true);
  }, []);
  return (
    <main className="page">
      <div className="page__container _container">
        <aside className="page__side">
          <SideCatalogue />
          <div className="page__content-side">
            {!mobileView && (
              <>
                <SideNews />
                <SideReviews />
              </>
            )}
          </div>
        </aside>
        <div className="page__content">
          <Search />
          <MainBannerSlider />
          <MainProductSlider />
          {mobileView && (
            <>
              <SideNews />
              <SideReviews />
            </>
          )}
        </div>
      </div>
      <PartnersSlider />
      <AboutCompany />
    </main>
  );
};

export default MainPage;
