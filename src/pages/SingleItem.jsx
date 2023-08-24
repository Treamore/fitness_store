import React, { useState, useEffect } from 'react';
import SideCatalogue from '../components/global/SideCatalogue';
import SideNews from '../components/global/SideNews';
import SideReviews from '../components/global/SideReviews';
import Search from '../components/global/Search';
import SameProducts from '../components/item/SameProducts';
import ItemSlideSmall from '../components/item/ItemSlideSmall';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ItemsSlideLarge } from '../components/item/ItemsSlideLarge';
import { Thumbs } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import { Link, useParams } from 'react-router-dom';
import items from '../json/AllItems.json';

export const SingleItem = () => {
  const params = useParams();
  const itemId = params.id;
  const item = items.filter((item) => +itemId === item.id)[0];
  const itemsInCard = useSelector((state) => state.cartSlice.items);
  const dispatch = useDispatch();

  const [mobileView, setMobileView] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [inCart, setInCard] = useState(false);

  const isInCart = () => {
    const findId = itemsInCard.find((obj) => obj.id === item.id);
    if (findId) setInCard(true);
    else setInCard(false);
  };

  const addItemToCart = () => {
    const toCart = {
      id: item.id,
      title: item.title,
      currentPrice: item.currentPrice,
      imageUrl: item.imagesUrl[0],
    };
    dispatch(addItem(toCart));
  };

  useEffect(() => {
    isInCart();
  }, [itemsInCard]);

  window.addEventListener('load', function () {
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    viewport_width > 992 ? setMobileView(false) : setMobileView(true);
  });
  window.addEventListener('resize', function () {
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
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li>
                <Link to="/" className="breadcrumbs__link">
                  Main
                </Link>
              </li>
              <li>
                <Link to="/catalogue" className="breadcrumbs__link">
                  Catalogue
                </Link>
              </li>
              <li>
                <span className="breadcrumbs__item">{item.title}</span>
              </li>
            </ul>
          </nav>
          <section className="product">
            <h1 className="product__title">
              {item.title} <span>{item.type}</span>
            </h1>
            <div className="product__content">
              <div className="product__images images-product">
                <Swiper
                  className="images-product__mainslider swiper"
                  spaceBetween={0}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  loop={true}
                  speed={800}
                  modules={[Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}>
                  <div className="swiper-wrapper">
                    {item.imagesUrl.map((url, index) => (
                      <SwiperSlide key={index}>
                        <ItemsSlideLarge item={item} image={url} />
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
                <Swiper
                  className="images-product__subslider swiper"
                  spaceBetween={0}
                  slidesPerView={4}
                  slidesPerGroup={1}
                  loop={true}
                  speed={800}
                  modules={[Thumbs]}
                  watchSlidesProgress
                  onSwiper={setThumbsSwiper}>
                  <div className="swiper-wrapper">
                    {item.imagesUrl.map((url, index) => (
                      <SwiperSlide key={index} className="images-product__subslide swiper-slide">
                        <ItemSlideSmall image={url} />
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
              <div className="product__body body-product">
                <div className="body-product__top">
                  <a href="#" className="body-product__compare">
                    <span>Compare</span>
                  </a>
                  <div className="body-product__stock">In stock</div>
                </div>
                <div className="body-product__actions actions-product">
                  <div className="actions-product__row">
                    <div className="actions-product__column">
                      {item.oldPrice ? (
                        <div className="actions-product__price actions-product__price_old">
                          {item.oldPrice}
                          <p> £</p>
                        </div>
                      ) : (
                        <></>
                      )}
                      <div className="actions-product__price">{item.currentPrice}£</div>
                    </div>

                    <div className="actions-product__column">
                      <div
                        className={
                          inCart ? 'actions-product_str__cart_in' : 'actions-product__cart'
                        }
                        onClick={() => {
                          addItemToCart();
                        }}>
                        <span>{inCart ? 'In cart' : 'To the cart'}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="body-product__include include-product">
                  <div className="include-product__title">In price included:</div>
                  <div className="include-product__items">
                    <div className="include-product__item">
                      <div className="include-product__icon">
                        <img src="../images/included/01.png" alt="" />
                      </div>
                      <div className="include-product__text">Assembly</div>
                    </div>
                    <div className="include-product__item">
                      <div className="include-product__icon">
                        <img src="../images/included/02.png" alt="" />
                      </div>
                      <div className="include-product__text">Delivery</div>
                    </div>
                    <div className="include-product__item">
                      <div className="include-product__icon">
                        <img src="../images/included/03.png" alt="" />
                      </div>
                      <div className="include-product__text">Warranty</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product__info info-product _tabs">
              <nav className="info-product__nav _tabs-nav">
                <div
                  className={
                    activeTab === 0
                      ? 'info-product__item _tabs-item _active'
                      : 'info-product__item _tabs-item '
                  }
                  onClick={() => {
                    setActiveTab(0);
                  }}>
                  <span>Description</span>
                </div>
                <div
                  className={
                    activeTab === 1
                      ? 'info-product__item _tabs-item _active'
                      : 'info-product__item _tabs-item '
                  }
                  onClick={() => {
                    setActiveTab(1);
                  }}>
                  <span>Сharacteristics</span>
                </div>
              </nav>
              <div className="info-product__body _tabs-body">
                <div
                  className={
                    activeTab === 0
                      ? 'info-product__block _tabs-block _active'
                      : 'info-product__block _tabs-block'
                  }>
                  <p>{item.description}</p>
                </div>
                <div
                  className={
                    activeTab === 1
                      ? 'info-product__block _tabs-block _active'
                      : 'info-product__block _tabs-block'
                  }
                  onClick={() => {
                    setActiveTab(1);
                  }}>
                  <table className="info-product__table">
                    <tbody>
                      {item.params.map((obj, index) => (
                        <tr key={index}>
                          <td>
                            <div className="info-product__label">{obj.label}</div>
                          </td>
                          <td>
                            <div className="info-product__value">{obj.value}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <SameProducts id={item.id} typeId={item.typeId} subtypeId={item.subtypeId} />
          </section>
        </div>
        {mobileView && (
          <>
            <SideNews />
            <SideReviews />
          </>
        )}
      </div>
    </main>
  );
};

export default SingleItem;
