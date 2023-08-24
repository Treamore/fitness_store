import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { setItemPage } from '../../redux/slices/filterSlice';

function ItemCard({ id, labels, params, imageUrl, title, type, oldPrice, currentPrice }) {
  const items = useSelector((state) => state.cartSlice.items);
  const [inCart, setInCard] = useState(false);

  const isInCart = () => {
    const findId = items.find((obj) => obj.id === id);
    if (findId) setInCard(true);
    else setInCard(false);
  };

  const labelRender = labels.map((size, index) => {
    return (
      <div key={index} className="item-product__label">
        {size}
      </div>
    );
  });

  const paramsRender = () => {
    let paramsArray = params.slice(0, 3);
    const paramsShown = paramsArray.map((item, index) => {
      return (
        <div className="options-item-product__item" key={index}>
          <div className="options-item-product__label">{item.label}</div>
          <div className="options-item-product__value">{item.value}</div>
        </div>
      );
    });
    return paramsShown;
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

  return (
    <div className="items-products__column">
      <div className="item-product">
        <div className="item-product__labels">{labels.length > 0 ? labelRender : <></>}</div>
        <Link
          to={`/item/${id}`}
          className="item-product__image"
          onClick={() => {
            dispatch(setItemPage(id));
          }}>
          <img src={`../../${imageUrl}`} alt="Table" />
        </Link>
        <div className="item-product__body">
          <Link
            to={`/item/${id}`}
            className="item-product__title"
            onClick={() => {
              dispatch(setItemPage(id));
            }}>
            <span>{title}</span> {type}
          </Link>
          <div className="item-product__footer">
            {oldPrice ? (
              <div className="item-product__old-price">
                {oldPrice}
                <p>£</p>
              </div>
            ) : (
              <></>
            )}

            <div
              className={inCart ? 'item-product__added' : 'item-product__add'}
              onClick={addItemToCart}></div>
            <div className="item-product__price">
              {currentPrice}
              <p>£</p>
            </div>
          </div>
        </div>
        <div className="item-product__hover hover-item-product">
          <Link
            to={`/item/${id}`}
            className="hover-item-product__title"
            onClick={() => {
              dispatch(setItemPage(id));
            }}>
            <span>{title}</span> {type}
          </Link>
          <div className="hover-item-product__options options-item-product">
            {params.length > 0 ? paramsRender() : <></>}
          </div>
          <div
            onClick={addItemToCart}
            className={inCart ? 'hover-item-product__cart_in' : 'hover-item-product__cart'}></div>
          <div className="hover-item-product__footer">
            {oldPrice ? (
              <div className="item-product__old-price">
                {oldPrice}
                <p>£</p>
              </div>
            ) : (
              <></>
            )}
            <div className="hover-item-product__stock">In stock</div>
            <div className="hover-item-product__price">
              {currentPrice}
              <p>£</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
