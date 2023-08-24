import React from 'react';
import image from '../../images/under_construction.jpg';
import { Link } from 'react-router-dom';

export const Return = () => {
  return (
    <div className="_container">
      <div className="construction-page">
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li>
              <Link to="/" className="breadcrumbs__link">
                Main
              </Link>
            </li>
            <li>
              <span className="breadcrumbs__item">Return</span>
            </li>
          </ul>
        </nav>
        <div className="construction">
          <div className="construction__text">Page under construction</div>
          <img className="construction__image" src={image} alt="Under construction" />
        </div>
      </div>
    </div>
  );
};

export default Return;
