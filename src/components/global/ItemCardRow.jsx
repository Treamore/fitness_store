import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { setItemPage } from '../../redux/slices/filterSlice';

function ItemCardRow({ id, title, type, labels, oldPrice, currentPrice, imageUrl, params }) {
  const items = useSelector((state) => state.cartSlice.items);
  const [inCart, setInCard] = useState(false);
  const isInCart = () => {
    const findId = items.find((obj) => obj.id === id);
    if (findId) setInCard(true);
    else setInCard(false);
  };

  const dispatch = useDispatch();
  const addItemToCart = () => {
    const item = {
      id,
      title,
      currentPrice,
      imageUrl,
    };
    dispatch(addItem(item));
  };

  useEffect(() => {
    isInCart();
  }, [items]);

  const labelRender = labels.map((size, index) => {
    return (
      <div key={index} className="item-product__label">
        {size}
      </div>
    );
  });

  const paramsRender = () => {
    let paramsArray = params.slice(0, 6);
    const paramsShown = paramsArray.map((item, index) => {
      return (
        <div className="options-item-product_str__item" key={index}>
          <div className="options-item-product_str__label">{item.label}</div>
          <div className="options-item-product_str__value">{item.value}</div>
        </div>
      );
    });
    return paramsShown;
  };

  return (
    <div className="items-products_str__column">
      <div className="item-product_str">
        <div className="item-product_str__labels">{labels.length > 0 ? labelRender : <></>}</div>
        <div className="item-product_str__content">
          <Link
            to={`/item/${id}`}
            className="item-product_str__image"
            onClick={() => {
              dispatch(setItemPage(id));
            }}>
            <img src={`../${imageUrl}`} alt="Table" />
          </Link>

          <div className="item-product_str__body">
            <Link
              to={`/item/${id}`}
              className="item-product_str__title"
              onClick={() => {
                dispatch(setItemPage(id));
              }}>
              <span>{title}</span> {type}
            </Link>
            <div className="item-product_str__footer_mobile">
              {oldPrice ? (
                <div className="item-product_str__old-price">
                  {oldPrice}
                  <p>£</p>
                </div>
              ) : (
                <></>
              )}

              <div className="item-product_str__price">
                {currentPrice}
                <p>£</p>
              </div>
              <div
                onClick={() => {
                  addItemToCart();
                }}
                className={inCart ? 'actions-product_str__cart_in' : 'actions-product_str__cart'}>
                <span>{inCart ? 'In cart' : 'To the cart'}</span>
              </div>
            </div>
            <div className="item-product_str__info">{paramsRender()}</div>
          </div>
          <div className="item-product_str__footer">
            {oldPrice ? (
              <div className="item-product_str__old-price">
                {oldPrice}
                <p>£</p>
              </div>
            ) : (
              <></>
            )}

            <div className="item-product_str__price">
              {currentPrice}
              <p>£</p>
            </div>
            <div
              onClick={() => {
                addItemToCart();
              }}
              className={inCart ? 'actions-product_str__cart_in' : 'actions-product_str__cart'}>
              <span>{inCart ? 'In cart' : 'To the cart'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCardRow;
