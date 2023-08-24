import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCardType, setSortType } from '../../redux/slices/filterSlice';

export const Sort = () => {
  const cardType = useSelector((state) => state.filterSlice.cardType);
  const dispatch = useDispatch();
  return (
    <div className="catalog__actions actions-catalog">
      <div className="actions-catalog__order order-catalog">
        <div className="order-catalog__label">Sort by:</div>
        <div className="order-catalog__select">
          <select
            onChange={(e) => {
              dispatch(setSortType(e.target.value));
            }}
            name="form[]"
            className="_select">
            <option value="0" defaultValue="selected">
              Best Match
            </option>
            <option value="1">Product Name</option>
            <option value="2">Price (Low to High)</option>
            <option value="3">Price (High to Low)</option>
          </select>
        </div>
      </div>
      <div className="ations-catalog__view view-catalog">
        <div
          className={
            !cardType
              ? 'view-catalog__item view-catalog__item_grid _active'
              : 'view-catalog__item view-catalog__item_grid '
          }
          onClick={() => {
            dispatch(setCardType(false));
          }}></div>
        <div
          className={
            cardType
              ? 'view-catalog__item view-catalog__item_list _active'
              : 'view-catalog__item view-catalog__item_list'
          }
          onClick={() => {
            dispatch(setCardType(true));
          }}></div>
      </div>
    </div>
  );
};

export default Sort;
