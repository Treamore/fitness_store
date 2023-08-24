import React, { useEffect } from 'react';
import ItemCard from '../global/ItemCard';
import ItemCardRow from '../global/ItemCardRow';
import { useSelector } from 'react-redux';

export const Items = () => {
  const cardType = useSelector((state) => state.filterSlice.cardType);
  const items = useSelector((state) => state.itemsSlice.currentItems);

  return (
    <div className="products-slider__items items-products">
      {items.map((obj, index) =>
        cardType ? (
          <ItemCardRow
            id={obj.id}
            title={obj.title}
            type={obj.type}
            labels={obj.labels}
            oldPrice={obj.oldPrice}
            currentPrice={obj.currentPrice}
            imageUrl={obj.imagesUrl[0]}
            params={obj.params}
            key={index}
          />
        ) : (
          <ItemCard
            id={obj.id}
            title={obj.title}
            type={obj.type}
            labels={obj.labels}
            oldPrice={obj.oldPrice}
            currentPrice={obj.currentPrice}
            imageUrl={obj.imagesUrl[0]}
            params={obj.params}
            key={index}
          />
        ),
      )}
    </div>
  );
};

export default Items;
