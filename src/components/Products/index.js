import React from 'react';
import Config from '../../config.json';

const Products = ({ data }) => {
  const buildLayout = () => {
    const res = data.map(item => {
      const imgUrl = `${Config.imgUrl}/${item.productImage}`;
      return (
        <div className="productContainer" key={item.index}>
          <img src={imgUrl} alt={item.productImage} />
          <div className="productTags">
            {item.isSale ? <div className="sale">Sale</div> : ''}
            {item.isExclusive ? <div className="exclusive">Exclusive</div> : ''}
          </div>
          <div className="productContent">
            <span className="productName">{item.productName}</span>
            <span className="productPrice">{item.price}</span>
          </div>
        </div>
      );
    });

    return res;
  };

  return <div className="products">{buildLayout()}</div>;
};

export default Products;
