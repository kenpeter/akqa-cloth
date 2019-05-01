/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import Config from '../config';

export const getProducts = filterText => {
  return fetch(`${Config.apiUrl}/search-products/${filterText}`, {
    method: 'GET'
  });
};
