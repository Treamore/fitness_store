import { useEffect, useState } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const [mobileView, setMobileView] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  const isMounted = React.useRef(false);
  window.addEventListener('load', function (event) {
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    viewport_width > 770 ? setMobileView(false) : setMobileView(true);
  });
  window.addEventListener('resize', function (event) {
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    viewport_width > 770 ? setMobileView(false) : setMobileView(true);
  });
  const setMenuActive = () => {
    setButtonState(!buttonState);
  };

  const { items } = useSelector((state) => state.cartSlice);
  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <header className="header">
      <div className="header__top top-header">
        <div className="top-header__content _container">
          <div className="top-header__column">
            <div className="top-header__menu menu">
              <div
                className={buttonState ? 'menu__icon icon-menu active' : 'menu__icon icon-menu'}
                onClick={setMenuActive}>
                <span></span>
              </div>
              <nav className={buttonState ? 'menu__body open' : 'menu__body'}>
                <ul className="menu__list">
                  <li>
                    <Link to="/brands" className="menu__link">
                      Brands
                    </Link>
                  </li>
                  <li>
                    <Link to="/sales" className="menu__link">
                      Sales
                    </Link>
                  </li>
                  <li>
                    <Link to="/delivery" className="menu__link">
                      Delivery and Assembly
                    </Link>
                  </li>
                  <li>
                    <Link to="/warranty" className="menu__link">
                      Warranty
                    </Link>
                  </li>
                  <li>
                    <Link to="/payment" className="menu__link">
                      Payment
                    </Link>
                  </li>
                  <li>
                    <Link to="/contacts" className="menu__link">
                      Contacts
                    </Link>
                  </li>
                </ul>
                {mobileView && (
                  <ul className="bottom-header__actions actions-header">
                    <li>
                      <div
                        className="actions-header__item actions-header__item-login"
                        onClick={() => alert('This feature is under development')}>
                        <span>Login</span>
                      </div>
                    </li>
                    <li>
                      <div
                        className="actions-header__item actions-header__item-reg"
                        onClick={() => alert('This feature is under development')}>
                        <span>Registration</span>
                      </div>
                    </li>
                    <li>
                      <a
                        href="mailto:sport@gmail.com"
                        className="actions-header__item actions-header__item-email">
                        <span>sport@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                )}
              </nav>
            </div>
          </div>
          <div className="top-header__column">
            <Link to="/" className="top-header__logo">
              <img src="../../images/logo.png" alt="" />
            </Link>
          </div>
          <div className="top-header__column">
            <div className="top-header__contacts contacts-header">
              <div className="contacts-header__column contacts-header__item-local">
                <a href="tel:447700777777" className="contacts-header__data">
                  <div className="contacts-header__item contacts-header__first-phone">
                    <div className="contacts-header__label">London</div>
                    <div className="contacts-header__phone">+44 20 7946 0419</div>
                  </div>
                </a>
              </div>
              <div className="contacts-header__column contacts-header__item-global">
                <a href="tel:442079460419" className="contacts-header__data">
                  <div className="contacts-header__item contacts-header__second-phone">
                    <div className="contacts-header__label">Free for United Kingdom</div>
                    <div className="contacts-header__phone">+44 7700 777777</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom bottom-header">
        <div className="bottom-header__container _container">
          <div className="bottom-header__column">
            {!mobileView && (
              <ul className="bottom-header__actions actions-header">
                <li>
                  <div
                    className="actions-header__item actions-header__item-login"
                    onClick={() => alert('This feature is under development')}>
                    <span>Login</span>
                  </div>
                </li>
                <li>
                  <div
                    className="actions-header__item actions-header__item-reg"
                    onClick={() => alert('This feature is under development')}>
                    <span>Registration</span>
                  </div>
                </li>
                <li>
                  <a
                    href="mailto:sport@gmail.com"
                    className="actions-header__item actions-header__item-email">
                    <span>sport@gmail.com</span>
                  </a>
                </li>
              </ul>
            )}
            {mobileView && (
              <div
                className="info-header__callback"
                onClick={() => alert('This feature is under development')}>
                <span>Call back</span>
              </div>
            )}
          </div>
          <div className="bottom-header__column">
            <div className="bottom-header__info info-header">
              <div className="info-header__column">
                {!mobileView && (
                  <div
                    className="info-header__callback"
                    onClick={() => alert('This feature is under development')}>
                    <span>Call back</span>
                  </div>
                )}
              </div>
              <div className="info-header__column">
                <div className="info-header__schedule">
                  <p>
                    <span>Mon-Fri: </span>09:00-21:00
                  </p>
                  <p>
                    <span>Sat-Sun: </span>10:00-20:00
                  </p>
                </div>
              </div>
              <div className="info-header__column">
                <Link to="/checkout" className="info-header__cart">
                  {items.length > 0 && (
                    <span>
                      {items.reduce(function (sum, elem) {
                        return sum + +elem.count;
                      }, 0)}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
