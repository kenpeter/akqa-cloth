import React from 'react';
import Filter from '../../containers/Filter';
import Products from '../../containers/Products';

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <Filter />
      <Products />
    </div>
  );
};

export default MainContainer;
