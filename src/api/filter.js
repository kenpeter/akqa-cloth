/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import Config from '../config';

export const getSizeFilterData = () => {
  return fetch(`${Config.apiUrl}/size-filter-data`, {
    method: 'GET'
  });
};
