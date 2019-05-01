import React from 'react';
import Config from '../../config.json';

const Products = ({ data }) => {
  const buildLayout = () => {
    const res = data.map(item => {
      const imgUrl = `${Config.imgUrl}/${item.productImage}`;
      return (
        <div className="productContainer" key={item.index}>
          <div className="productImg">
            <img src={imgUrl} alt={item.productImage} />
          </div>
          <div className="productTags">
            <div className="productTag">{item.isSale}</div>
            <div className="productTags">{item.isExclusive}</div>
          </div>
          <div className="productContent">
            <div className="productName">{item.productName}</div>
            <div className="productPrice">{item.price}</div>
          </div>
        </div>
      );
    });

    return res;
  };

  return <div className="products">{buildLayout()}</div>;
};

export default Products;
