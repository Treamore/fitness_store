import React from 'react';

export const ItemSlideSmall = ({ image }) => {
  return (
    <>
      <div className="images-product__subimage">
        <img src={`../../${image}`} alt="" />
      </div>
    </>
  );
};

export default ItemSlideSmall;
