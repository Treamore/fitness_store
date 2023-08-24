import React, { useState } from 'react';

export const CheckoutTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="checkout__content content-checkout _tabs">
      <nav className="content-checkout__nav _tabs-nav">
        <div
          className={
            activeTab === 0
              ? 'content-checkout__item _tabs-item _active'
              : 'content-checkout__item _tabs-item  '
          }
          onClick={() => {
            setActiveTab(0);
          }}>
          <span>Quick order</span>
        </div>
        <div
          className={
            activeTab === 1
              ? 'content-checkout__item _tabs-item _active'
              : 'content-checkout__item _tabs-item  '
          }
          onClick={() => {
            setActiveTab(1);
          }}>
          <span>Courier in London</span>
        </div>
        <div
          className={
            activeTab === 2
              ? 'content-checkout__item _tabs-item _active'
              : 'content-checkout__item _tabs-item  '
          }
          onClick={() => {
            setActiveTab(2);
          }}>
          <span>Shipping within the UK</span>
        </div>
      </nav>
      <div className="content-checkout__body _tabs-body">
        <div
          className={
            activeTab === 0
              ? 'content-checkout__block _tabs-block _active'
              : 'content-checkout__block _tabs-block  '
          }>
          <div action="" className="content-checkout__form form-checkout">
            <div className="form-checkout__column">
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Name: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Mobile number: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">Your e-mail</div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label"></div>
                <label className="form-checkout__input checkbox">
                  <input type="checkbox" className="checkbox__input" />
                  <span className="checkbox__styled"></span>
                  <span className="checkbox__text">Subscribe to news and discounts</span>
                </label>
              </div>
            </div>
            <div className="form-checkout__column">
              <div className="form-checkout__text">
                <p>
                  <span>* </span>Required fields
                </p>
                <p>
                  Sending goods is made only after 100% payment goods. Shipping costs can be paid on
                  receiving an order.
                </p>
                <p>
                  * The online store is not responsible for the delay delivery of the order related
                  to the work of courier services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            activeTab === 1
              ? 'content-checkout__block _tabs-block _active'
              : 'content-checkout__block _tabs-block  '
          }>
          <div action="" className="content-checkout__form form-checkout">
            <div className="form-checkout__column">
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Surname: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Name: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Mobile number: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Your e-mail: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">Payment method:</div>
                <div className="form-checkout__input">
                  <select name="form[]" className="_select">
                    <option defaultValue="1">Bank transfer</option>
                    <option value="2">PayPal Express Checkout</option>
                    <option value="3">Credit card</option>
                    <option value="4">Phone payment</option>
                  </select>
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Index: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  City: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Delivery address: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line form-checkout__textarea-line">
                <div className="form-checkout__label">Comments:</div>
                <div className="form-checkout__input">
                  <textarea></textarea>
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label"></div>
                <label className="form-checkout__input checkbox">
                  <input type="checkbox" className="checkbox__input" />
                  <span className="checkbox__styled"></span>
                  <span className="checkbox__text">Subscribe to news and discounts</span>
                </label>
              </div>
            </div>
            <div className="form-checkout__column">
              <div className="form-checkout__text">
                <p>
                  <span>* </span>Required fields
                </p>
                <p>
                  Sending goods is made only after 100% payment goods. Shipping costs can be paid on
                  receiving an order.
                </p>
                <p>
                  Delivery to the regions is carried out (within 5-14 days) and courier service
                  (within 3-5 days) from the date of transfer of the order to the delivery service.
                  The cost depends on the weight of the order and distance.
                </p>
                <p>
                  * The online store is not responsible for the delay delivery of the order related
                  to the work of courier services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            activeTab === 2
              ? 'content-checkout__block _tabs-block _active'
              : 'content-checkout__block _tabs-block  '
          }>
          <div action="" className="content-checkout__form form-checkout">
            <div className="form-checkout__column">
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Surname: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Name: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Mobile number: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Your e-mail: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">Payment method:</div>
                <div className="form-checkout__input">
                  <select name="form[]" className="_select">
                    <option defaultValue="1">Bank transfer</option>
                    <option value="2">PayPal Express Checkout</option>
                    <option value="3">Credit card</option>
                    <option value="4">Phone payment</option>
                  </select>
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Index: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  City: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label">
                  Delivery address: <span>*</span>
                </div>
                <div className="form-checkout__input">
                  <input type="text" />
                </div>
              </div>
              <div className="form-checkout__line form-checkout__textarea-line">
                <div className="form-checkout__label">Comments:</div>
                <div className="form-checkout__input">
                  <textarea></textarea>
                </div>
              </div>
              <div className="form-checkout__line">
                <div className="form-checkout__label"></div>
                <label className="form-checkout__input checkbox">
                  <input type="checkbox" className="checkbox__input" />
                  <span className="checkbox__styled"></span>
                  <span className="checkbox__text">Subscribe to news and discounts</span>
                </label>
              </div>
            </div>
            <div className="form-checkout__column">
              <div className="form-checkout__text">
                <p>
                  <span>* </span>Required fields
                </p>
                <p>
                  Sending goods is made only after 100% payment goods. Shipping costs can be paid on
                  receiving an order.
                </p>
                <p>
                  Delivery to the regions is carried out (within 5-14 days) and courier service
                  (within 3-5 days) from the date of transfer of the order to the delivery service.
                  The cost depends on the weight of the order and distance.
                </p>
                <p>
                  * The online store is not responsible for the delay delivery of the order related
                  to the work of courier services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTabs;
