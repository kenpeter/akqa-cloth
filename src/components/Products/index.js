import React from 'react';

const Products = ({ data }) => {
  const buildLayout = () => {
    const res = data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
        </tr>
      );
    });

    return res;
  };

  return <div className="products">list products</div>;
};

export default Products;
