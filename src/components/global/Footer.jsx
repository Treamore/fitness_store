import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="page__info-menu info-menu">
        <div className="info-menu__container _container">
          <div className="info-menu__body">
            <div className="info-menu__line">
              <div className="info-menu__label">Information:</div>
              <ul className="info-menu__list">
                <li>
                  <Link to="/brands" className="info-menu__link">
                    Brands
                  </Link>
                </li>
                <li>
                  <Link to="/delivery" className="info-menu__link">
                    Delivery and Assembly
                  </Link>
                </li>
                <li>
                  <Link to="/sales" className="info-menu__link">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" className="info-menu__link">
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="info-menu__link">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <div className="info-menu__line">
              <div className="info-menu__label">Help:</div>
              <ul className="info-menu__list">
                <li>
                  <Link to="/how_to_order" className="info-menu__link">
                    How to order
                  </Link>
                </li>

                <li>
                  <Link to="/payment" className="info-menu__link">
                    Payment
                  </Link>
                </li>
                <li>
                  <Link to="/warranty" className="info-menu__link">
                    Warranty
                  </Link>
                </li>
                <li>
                  <Link to="/return" className="info-menu__link">
                    Return
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__content _container">
        <div className="footer__body">
          <div className="footer__column">
            <div className="footer__block block-footer">
              <div className="block-footer__column">
                <a href="#" className="logo-footer">
                  <img src="../../images/footer_logo.png" alt="" />
                </a>
                <div className="block-footer__phones">
                  <a href="tel:442079460419" className="block-footer__phone">
                    +44 20 7946 0419
                  </a>
                  <a href="tel:447700777777" className="block-footer__phone">
                    +44 7700 777777
                  </a>
                </div>
              </div>
              <div className="block-footer__column">
                <div className="block-footer__delivery delivery-footer">
                  <div className="delivery-footer__title">Delivery by transport companies:</div>
                  <div className="delivery-footer__items">
                    <div className="delivery-footer__item">
                      <img src="../../images/transport/1.png" alt="" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src="../../images/transport/2.png" alt="" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src="../../images/transport/3.png" alt="" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src="../../images/transport/3.png" alt="" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src="../../images/transport/2.png" alt="" />
                    </div>
                    <div className="delivery-footer__item">
                      <img src="../../images/transport/1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__payments">
              <div className="footer__payment">
                <img src="../../images/payments/MasterCard.png" alt="" />
              </div>
              <div className="footer__payment">
                <img src="../../images/payments/Maestro.png" alt="" />
              </div>
              <div className="footer__payment">
                <img src="../../images/payments/JCB.png" alt="" />
              </div>
              <div className="footer__payment">
                <img src="../../images/payments/UnionPay.png" alt="" />
              </div>
              <div className="footer__payment">
                <img src="../../images/payments/Visa.png" alt="" />
              </div>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__widgets widgets-footer">
              <div className="widgets-footer__column">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=270&height=250&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="270"
                  height="250"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              </div>
              <div className="widgets-footer__column">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=270&height=250&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="270"
                  height="250"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copy">©2023 All rights reserved.</div>
          <div className="footer__social social-footer">
            <a href="https://www.facebook.com/" className="social-footer__item">
              <img src="../../images/socials/facebook.svg" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/" className="social-footer__item">
              <img src="../../images/socials/instagram.svg" alt="instagram" />
            </a>
            <a href="https://twitter.com/" className="social-footer__item">
              <img src="../../images/socials/twitter.svg" alt="twitter" />
            </a>
            <a href="https://www.youtube.com/" className="social-footer__item">
              <img src="../../images/socials/youtube.svg" alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
