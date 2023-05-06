import axios from 'axios';
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_USERLIST_FAILURE, GET_USERLIST_REQUEST, GET_USERLIST_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from './actionTypes';

const getProductDataRequest = () => ({ type: GET_PRODUCT_REQUEST });
const getProductDataSuccess = (payload) => ({ type: GET_PRODUCT_SUCCESS, payload });
const getProductDataFailure = () => ({ type: GET_PRODUCT_FAILURE });
const addProductRequest = () => ({ type: ADD_PRODUCT_REQUEST });
const addProductSuccess = (payload) => ({ type: ADD_PRODUCT_SUCCESS, payload });
const addProductFailure = () => ({ type: ADD_PRODUCT_FAILURE });
const deleteProductRequest = () => ({ type: DELETE_PRODUCT_REQUEST });
const deleteProductSuccess = (payload) => ({ type: DELETE_PRODUCT_SUCCESS, payload });
const deleteProductFailure = () => ({ type: DELETE_PRODUCT_FAILURE });
const updateProductRequest = () => ({ type: UPDATE_PRODUCT_REQUEST });
const updateProductSuccess = (payload) => ({ type: UPDATE_PRODUCT_SUCCESS, payload });
const updateProductFailure = () => ({ type: UPDATE_PRODUCT_FAILURE });
const getUserListRequest = () => ({ type: GET_USERLIST_REQUEST });
const getUserListSuccess = (payload) => ({ type: GET_USERLIST_SUCCESS, payload });
const getUserListFailure = () => ({ type: GET_USERLIST_FAILURE });
const deleteUserRequest = () => ({ type: DELETE_USER_REQUEST });
const deleteUserSuccess = (payload) => ({ type: DELETE_USER_SUCCESS, payload });
const deleteUserFailure = () => ({ type: DELETE_USER_FAILURE });

export const getProducts = (dispatch) => {
    dispatch(getProductDataRequest());
    axios.get(`https://taupe-waistcoat.cyclic.app/ring/`).then((res) => { dispatch(getProductDataSuccess(res.data)) })
      .catch((err) => {
        dispatch(getProductDataFailure());
      });
  };
  
  export const addProduct = (product) => async (dispatch) => {
    dispatch(addProductRequest());
    try {
      const { data } = await axios.post(
        "https://taupe-waistcoat.cyclic.app/ring/add",
        product
      );
      dispatch(addProductSuccess(data));
      return data;
    } catch (error) {
      dispatch(addProductFailure(error));
    }
  };

  export const deleteProduct = (id) => async (dispatch) => {
    dispatch(deleteProductRequest());
    try {
      axios.delete(`https://taupe-waistcoat.cyclic.app/ring/delete/${id}`);
      dispatch(deleteProductSuccess(id));
    } catch (error) {
      dispatch(deleteProductFailure(error));
    }
  };

  
  export const updateProduct = (id,product) => async (dispatch) => {
    dispatch(updateProductRequest());
    try {
      const { data } = await axios.patch(
        `https://taupe-waistcoat.cyclic.app/ring/update/${id}`,
        product
      );
      dispatch(updateProductSuccess(data));
    } catch (error) {
      dispatch(updateProductFailure(error));
    }
  };

  export const getUsersList = async (dispatch) => {
    dispatch(getUserListRequest());
    try {
      const { data } = await axios.get(
        "https://maroon-sea-urchin-tam.cyclic.app/users"
      );
      dispatch(getUserListSuccess(data));
    } catch (error) {
      dispatch(getUserListFailure(error));
    }
  };
  
  export const deleteUser = (id) => async (dispatch) => {
    dispatch(deleteUserRequest());
    try {
      let res = await axios.delete(`https://maroon-sea-urchin-tam.cyclic.app/users/delete/${id}`);
      dispatch(deleteUserSuccess(id));
      return res;
    } catch (error) {
      dispatch(deleteUserFailure("error", error));
    }
  };