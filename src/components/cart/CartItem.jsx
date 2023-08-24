import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { countMinus, countPlus, removeItem, setQuantity } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="order-checkout__item item-order">
      <div className="item-order__content">
        <Link to={`/item/${item.id}`} className="item-order__image">
          <img src={item.imageUrl} alt="" />
        </Link>
        <div className="item-order__body">
          <Link to={`/item/${item.id}`} className="item-order__title">
            <span>{item.title}</span> {item.type}
          </Link>
          <div className="item-order__price">
            {item.currentPrice}
            <span>£</span>
          </div>
        </div>
      </div>
      <div className="item-order__settings">
        <div className="item-order__quantity">
          <div className={item.count === 1 ? 'quantity _first' : 'quantity'}>
            <div
              className="quantity__button quantity__button_minus"
              onClick={() => {
                dispatch(countMinus(item));
              }}></div>
            <div className="quantity__input">
              <input
                type="text"
                name="form[]"
                autoComplete="off"
                onChange={(event) => {
                  dispatch(setQuantity([item, event.target.value]));
                }}
                value={item.count}
              />
            </div>
            <div
              className="quantity__button quantity__button_plus"
              onClick={() => {
                dispatch(countPlus(item));
              }}></div>
          </div>
        </div>
        <div className="item-order__total">
          <div className="item-order__label">Total:</div>
          <div className="item-order__price">
            {(item.currentPrice * item.count).toFixed(2)}
            <span>£</span>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          dispatch(removeItem(item));
        }}
        className="item-order__delete"></div>
    </div>
  );
};

export default CartItem;
