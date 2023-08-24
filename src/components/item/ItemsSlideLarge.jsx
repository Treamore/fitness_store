import React from 'react';

export const ItemsSlideLarge = ({ item, image }) => {
  return (
    <div className="images-product__mainslide swiper-slide">
      {item.oldPrice ? (
        <div className="images-product__sale">
          -{Math.floor((1 - item.currentPrice / item.oldPrice) * 100)}%
        </div>
      ) : (
        <></>
      )}
      <div className="items-product__image">
        <img src={`../../${image}`} alt="" />
      </div>
    </div>
  );
};

export default ItemsSlideLarge;
