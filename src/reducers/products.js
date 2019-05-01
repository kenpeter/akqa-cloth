import { getProducts } from '../api/products';

export const START_LOAD_PRODUCTS = 'app/products/START_LOAD_PRODUCTS';
export const LOAD_PRODUCTS_SUCCESS = 'app/products/LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_FAIL = 'app/products/LOAD_PRODUCTS_FAIL';

const initState = {
  data: [],
  loading: false,
  isError: false,
  errors: ''
};

export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case START_LOAD_PRODUCTS:
      return {
        ...state,
        loading: true,
        isError: false,
        errors: ''
      };
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        isError: false,
        errors: ''
      };
    case LOAD_PRODUCTS_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        isError: true,
        errors: action.errors
      };
    default:
      return state;
  }
};

export const startLoadProducts = () => {
  return {
    type: START_LOAD_PRODUCTS,
    loading: true,
    isError: false,
    errors: ''
  };
};

export const loadProductsSuccess = data => {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    data,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const loadProductsFail = errors => {
  return {
    type: LOAD_PRODUCTS_FAIL,
    data: [],
    loading: false,
    isError: true,
    errors
  };
};

export const loadProductsAPI = filterText => {
  return dispatch => {
    dispatch(startLoadProducts());
    getProducts(filterText)
      .then(res => {
        return res.json();
      })
      .then(res => {
        const data = res;
        dispatch(loadProductsSuccess(data));
      })
      .catch(err => {
        loadProductsFail(err);
      });
  };
};
