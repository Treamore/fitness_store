import React, { useState } from 'react';
import SideCatalogue from '../components/global/SideCatalogue';
import Filter from '../components/catalogue/Filter';
import Search from '../components/global/Search';
import Pagination from '../components/catalogue/Pagination';
import Sort from '../components/catalogue/Sort';
import Items from '../components/catalogue/Items';
import { Link, useParams } from 'react-router-dom';
import categories from '../json/catalogue.json';

export const Catalogue = () => {
  const params = useParams();
  const categoryId = params.category;
  const currentCategory = categories.find((item) => item.id == categoryId);
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
                <span className="breadcrumbs__item">Catalogue</span>
              </li>
            </ul>
          </nav>
          <div className="catalog">
            <h1 className="catalog__title">{currentCategory.title}</h1>
            <Sort />
            <Pagination />
            <div className="products-slider__slide swiper-slide">
              <Items />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Catalogue;
