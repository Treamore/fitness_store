import { useState } from 'react';
import items from '../../json/catalogue.json';
import goods from '../../json/AllItems.json';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory, setSubcategory } from '../../redux/slices/filterSlice';
import { setItemPage } from '../../redux/slices/filterSlice';

function SideCatalogue() {
  const [buttonState, setButtonState] = useState(false);
  const setMenuActive = () => {
    setButtonState(!buttonState);
  };
  const dispatch = useDispatch();

  const menuParents = document.querySelectorAll('.menu-page__parent');
  for (let index = 0; index < menuParents.length; index++) {
    const menuParent = menuParents[index];
    menuParent.addEventListener('mouseenter', function (e) {
      menuParent.classList.add('_active');
    });
    menuParent.addEventListener('mouseleave', function (e) {
      menuParent.classList.remove('_active');
    });
  }

  const labelRender = (labels) => {
    const list = labels.map((size, index) => {
      return (
        <div key={index} className="item-product__label">
          {size}
        </div>
      );
    });
    return list;
  };

  const categoriesBuild = (categories, id) => {
    return categories.map((category, index) => {
      return (
        <li key={index}>
          <Link
            to={`/catalogue/${id}/${index + 1}`}
            className="submenu-page__link"
            onClick={() => {
              dispatch(setSubcategory(index + 1));
              dispatch(setCategory(id));
            }}>
            {category}
          </Link>
        </li>
      );
    });
  };

  const sideMenu = (side, id) => {
    let popular = goods;
    popular = popular.filter((item) => id == item.typeId);
    popular = popular.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    return (
      <div className="menu-page__submenu submenu-page">
        <div className="submenu-page__item">
          <ul className="submenu-page__menu">{categoriesBuild(side.subtypes, id)}</ul>
          <div className="submenu-page__product">
            <div className="item-product">
              <div className="item-product__labels">
                <div className="item-product__label">Product of the Day</div>
                {popular[0].labels.length > 0 ? labelRender(popular[0].labels) : <></>}
              </div>
              <Link
                to={`/item/${popular[0].id}`}
                className="item-product__image"
                onClick={() => {
                  dispatch(setItemPage(popular[0].id));
                }}>
                <img src={`../../${popular[0].imagesUrl[0]}`} alt="hi" />
              </Link>
              <div className="item-product__body">
                <Link
                  to={`/item/${popular[0].id}`}
                  className="item-product__title"
                  onClick={() => {
                    dispatch(setItemPage(popular[0].id));
                  }}>
                  <span>{popular[0].title} </span> {popular[0].type}
                </Link>
                <div className="item-product__footer">
                  {popular[0].oldPrice ? (
                    <div className="item-product__old-price">
                      {popular[0].oldPrice}
                      <p>£</p>
                    </div>
                  ) : (
                    <></>
                  )}

                  <a href="" className="item-product__add"></a>
                  <div className="item-product__price pound">
                    {popular[0].currentPrice} <span>£</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const sideBars = (items) => {
    let barsList = items.map((item, index) => {
      return (
        <li className={item.side ? 'menu-page__parent' : ''} key={index}>
          <Link
            to={`/catalogue/${item.id}`}
            className="menu-page__link"
            onClick={() => {
              dispatch(setCategory(item.id));
              dispatch(setSubcategory(''));
            }}>
            {item.title}
          </Link>
          {item.side ? sideMenu(item.side, item.id) : <></>}
        </li>
      );
    });
    return barsList;
  };

  return (
    <nav className="page__menu menu-page">
      <div className="menu-page__header">
        <div className="menu-page__title">Catalogue</div>
        <div
          className={buttonState ? 'menu-page__burger active' : 'menu-page__burger'}
          onClick={setMenuActive}>
          <span></span>
        </div>
      </div>
      <div className={buttonState ? 'menu-page__body _open' : 'menu-page__body'}>
        <ul className="menu-page__list">{sideBars(items)}</ul>
      </div>
    </nav>
  );
}

export default SideCatalogue;
