exports.searchClothes = (req, res) => {
  const filterText = req.params.filterText;
  let products = getProducts(filterText);
  res.status(200).json(products);
};

const getProducts = (filterText) => {
  let products = require('../data/products.json');
  if (
    filterText === undefined ||
    filterText === 'undefined' ||
    filterText.trim() === ''
  ) {
  
  } else {

  }

  return products;
}