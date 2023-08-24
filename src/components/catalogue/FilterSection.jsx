import React, { useState } from 'react';

export const FilterSection = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const changeState = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="filter__section section-filter" key={props.index}>
      <div
        className={
          isOpen ? 'section-filter__title _spoller' : 'section-filter__title _spoller _active'
        }
        onClick={() => {
          changeState();
        }}>
        {props.obj.label}:
      </div>
      <div className="section-filter__body">
        {props.obj.values.map((item, index) => {
          return (
            <label className="checkbox" key={index}>
              <input type="checkbox" className="checkbox__input" />
              <span className="checkbox__styled"></span>
              <span className="checkbox__text">{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSection;
