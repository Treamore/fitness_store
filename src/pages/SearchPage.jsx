import React, { useState } from 'react';
import SideCatalogue from '../components/global/SideCatalogue';
import Filter from '../components/catalogue/Filter';
import Search from '../components/global/Search';

import Sort from '../components/catalogue/Sort';
import Items from '../components/catalogue/Items';
import { Link } from 'react-router-dom';
import SearchPagination from '../components/search/SeacrhPagination';

export const SearchPage = () => {
  return (
    <main className="page">
      <div className="page__container _container">
        <aside className="page__side">
          <SideCatalogue />
          <Filter />
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
                <span className="breadcrumbs__item">Search</span>
              </li>
            </ul>
          </nav>
          <div className="catalog">
            <Sort />
            <SearchPagination />
            <div className="products-slider__slide swiper-slide">
              <Items />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
