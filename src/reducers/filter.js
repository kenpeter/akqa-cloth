import { getSizeFilterData } from '../api/filter';

export const GET_SIZE_FILTER_DATA_SUCCESS =
  'app/filter/GET_SIZE_FILTER_DATA_SUCCESS';

const initState = {
  data: [],
  loading: false,
  isError: false,
  errors: ''
};

export const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_SIZE_FILTER_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        isError: false,
        errors: ''
      };
    default:
      return state;
  }
};

export const getSizeFilterDataSuccess = data => {
  return {
    type: GET_SIZE_FILTER_DATA_SUCCESS,
    data,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const getSizeFilterDataAPI = () => {
  return dispatch => {
    getSizeFilterData()
      .then(res => {
        return res.json();
      })
      .then(res => {
        const data = res;
        dispatch(getSizeFilterDataSuccess(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
