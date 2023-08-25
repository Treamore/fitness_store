import React from 'react';
import UnderConstruction from '../../components/global/UnderConstruction';
import { Link } from 'react-router-dom';

export const Delivery = () => {
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
              <span className="breadcrumbs__item">Delivery</span>
            </li>
          </ul>
        </nav>
        <UnderConstruction />
      </div>
    </div>
  );
};

export default Delivery;
