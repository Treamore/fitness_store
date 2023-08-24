import React, { useState } from 'react';
import SideCatalogue from '../components/global/SideCatalogue';
import SideNews from '../components/global/SideNews';
import SideReviews from '../components/global/SideReviews';
import Search from '../components/global/Search';
import CartItem from '../components/cart/CartItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import CheckoutTabs from '../components/cart/CheckoutTabs';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const [mobileView, setMobileView] = useState(false);
  window.addEventListener('load', function (event) {
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    viewport_width > 992 ? setMobileView(false) : setMobileView(true);
  });
  window.addEventListener('resize', function (event) {
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    viewport_width > 992 ? setMobileView(false) : setMobileView(true);
  });

  const cartItems = useSelector((state) => state.cartSlice.items);
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
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
                <span className="breadcrumbs__item">Cart</span>
              </li>
            </ul>
          </nav>
          <form action="#" className="checkout">
            <div className="checkout__title">Checkout</div>
            <CheckoutTabs />
            <div className="checkout__order order-checkout">
              <div className="order-checkout__title">Your Order</div>
              <div className="order-checkout__items">
                {cartItems.map((item, index) => (
                  <CartItem item={item} key={index} />
                ))}
              </div>
              <div className="order-checkout__footer">
                <div className="order-checkout__total">
                  Total: <span> {totalPrice.toFixed(2)}£</span>
                </div>
                <button type="submit" className="order-checkout__btn">
                  Valide purchase
                </button>
              </div>
            </div>
          </form>
          {mobileView && (
            <>
              <SideNews />
              <SideReviews />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Checkout;
