/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Filter from '../../containers/Filter';
import Products from '../../containers/Products';

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="topBar">
        <div className="topBarText">Women's tops</div>
        <Filter />
      </div>
      <Products />
    </div>
  );
};

export default MainContainer;
