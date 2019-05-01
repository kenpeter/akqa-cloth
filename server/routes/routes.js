//const sizeArr = ["XS", "S", "M", "L", "XL"];

const getProductsFilter = (filterText, products) => {
  let out = [];
  for(let i=0; i<products.length; i++) {
    if(products[i].size.includes(filterText.toUpperCase())) {
      out.push(products[i]);
    }
  }
  return out;
}

const getProducts = (filterText) => {
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
}

exports.searchClothes = (req, res) => {
  const filterText = req.params.filterText;
  let products = getProducts(filterText);
  res.status(200).json(products);
};

