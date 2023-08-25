import React from 'react';
import { Link } from 'react-router-dom';
import UnderConstruction from '../../components/global/UnderConstruction';

export const Brands = () => {
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
              <span className="breadcrumbs__item">Brands</span>
            </li>
          </ul>
        </nav>
        <UnderConstruction />
      </div>
    </div>
  );
};

export default Brands;
