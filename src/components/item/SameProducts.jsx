import React from 'react';
import all from '../../json/AllItems.json';
import ItemCard from '../global/ItemCard';

export const SameProducts = ({ id, typeId, subtypeId }) => {
  let items = all;
  items = items.filter((item) => item.typeId === typeId);
  if (subtypeId) {
    items = items.filter((item) => item.subtypeId === subtypeId);
  }
  items = items.filter((item) => item.id !== id);
  items = items.slice(0, 3);
  return (
    <section className="product__same same-products">
      <h2 className="same-products__title">Similar products</h2>
      <div className="same-products__items items-products">
        {items.map((obj, index) => (
          <ItemCard
            id={obj.id}
            title={obj.title}
            type={obj.type}
            labels={obj.labels}
            oldPrice={obj.oldPrice}
            currentPrice={obj.currentPrice}
            imageUrl={`../../${obj.imagesUrl[0]}`}
            params={obj.params}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default SameProducts;
