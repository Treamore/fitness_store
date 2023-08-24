import React, { useState } from 'react';
import Nouislider from 'nouislider-react';
import wNumb from 'wnumb';
import SortCategories from '../../json/SortCategories.json';
import FilterSection from './FilterSection';

export const Filter = () => {
  const [leftHandle, setLeftHandle] = useState(0);
  const [rightHandle, setRightHandle] = useState(20000);
  const categoriesArray = SortCategories[0].sort;

  const handleSlider = (sliderVal) => {
    setLeftHandle(parseInt(sliderVal[0]));
    setRightHandle(parseInt(sliderVal[1]));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'leftHandle') {
      setLeftHandle(value);
    } else if (name === 'rightHandle') {
      setRightHandle(value);
    }
  };

  if (document.querySelector('.filter__title')) {
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 992) {
      let filterTitle = document.querySelector('.filter__title');
      filterTitle.classList.toggle('_active');
      filterTitle.addEventListener('click', function (e) {
        filterTitle.classList.toggle('_visible');
      });
    }
  }

  return (
    <form action="#" className="filter">
      <div className="filter__title">Product filter</div>
      <div className="filter__main">
        <div className="filter__body">
          <div className="filter__section section-filter">
            <div className="section-filter__title">Price (gbp.):</div>
            <div className="section-filter__body">
              <div className="price-filter">
                <div className="price-filter__slider">
                  <Nouislider
                    onChange={handleSlider}
                    range={{ min: 0, max: 20000 }}
                    start={[leftHandle, rightHandle]}
                    step={1}
                    connect
                    tooltips={[wNumb({ decimals: 0 }), wNumb({ decimals: 0 })]}
                  />
                </div>
                <div className="price-filter__values values-price-filter">
                  <div className="values-price-filter__column">
                    <div className="values-price-filter__label">from:</div>
                    <div className="values-price-filter__input">
                      <input
                        id="price-start"
                        autoComplete="off"
                        className="input"
                        name="leftHandle"
                        type="text"
                        value={leftHandle}
                        onChange={handleChange}
                        placeholder="left"
                      />
                    </div>
                  </div>
                  <div className="values-price-filter__column">
                    <div className="values-price-filter__label">to:</div>
                    <div className="values-price-filter__input">
                      <input
                        id="price-end"
                        autoComplete="off"
                        className="input"
                        type="text"
                        name="rightHandle"
                        value={rightHandle}
                        onChange={handleChange}
                        placeholder="right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filter__section section-filter">
            <div className="section-filter__title">Compare:</div>
            <div className="section-filter__body">
              <div className="compare-filter">
                <div className="compare-filter__items">
                  <div className="compare-filter__item">
                    <a href="#" className="compare-filter__link">
                      NordicTrack C100
                    </a>
                    <a href="#" className="compare-filter__remove"></a>
                  </div>
                  <div className="compare-filter__item">
                    <a href="#" className="compare-filter__link">
                      Clear Fit Luxury LT.20
                    </a>
                    <a href="#" className="compare-filter__remove"></a>
                  </div>
                  <div className="compare-filter__item">
                    <a href="#" className="compare-filter__link">
                      Ammity ATM 720 TFT+
                    </a>
                    <a href="#" className="compare-filter__remove"></a>
                  </div>
                </div>
                <div className="compare-filter__footer">
                  <a
                    href="#"
                    onClick={() => alert('This feature is under development')}
                    className="compare-filter__button">
                    <span>Compare</span>
                  </a>
                  <a
                    href="#"
                    onClick={() => alert('This feature is under development')}
                    className="compare-filter__clean"></a>
                </div>
              </div>
            </div>
          </div>
          {categoriesArray.map((obj, index) => (
            <FilterSection obj={obj} index={index} />
          ))}
        </div>
        <div className="filter__footer">
          <div
            onClick={() => alert('This feature is under development')}
            className="filter__btn _btn">
            Filter
          </div>
          <div
            onClick={() => alert('This feature is under development')}
            className="filter__btn _btn _btn__grey">
            Clear
          </div>
        </div>
      </div>
    </form>
  );
};

export default Filter;
