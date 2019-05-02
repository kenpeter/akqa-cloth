/* eslint-disable global-require */
const getProductsFilter = (filterText, products) => {
  const out = [];
  for (let i = 0; i < products.length; i += 1) {
    if (products[i].size.includes(filterText.toUpperCase())) {
      out.push(products[i]);
    }
  }
  return out;
};

const getProducts = filterText => {
  let products = require('../data/products.json');
  if (
    filterText === undefined ||
    filterText === 'undefined' ||
    filterText.trim() === ''
  ) {
    // return everything
  } else {
    // depend on filterText
    products = getProductsFilter(filterText, products);
  }

  return products;
};

const getSizeFilterData = () => {
  const p = require('../data/products.json');

  let out = [];
  for (let i = 0; i < p.length; i += 1) {
    out = [...new Set([...out, ...p[i].size])];
  }
  return out;
};

exports.searchClothes = (req, res) => {
  const { filterText } = req.params;
  const products = getProducts(filterText);
  res.status(200).json(products);
};

exports.sizeFilterData = (req, res) => {
  const data = getSizeFilterData();
  res.status(200).json(data);
};
