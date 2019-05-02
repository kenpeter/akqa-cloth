/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/search-products/:filterText?', routes.searchClothes);
app.get('/api/size-filter-data/', routes.sizeFilterData);

const server = app.listen(8000, () => {
  console.log('app running on port.', server.address().port);
});
