import axios from 'axios';
import { ADD_ADMIN_REQUEST, ADD_ADMIN_SUCCESS, ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADMIN_FAILURE_REQUEST, ADMIN_LOGIN_REQUEST, ADMIN_REQUEST, DELETE_ADMIN_FAILURE, DELETE_ADMIN_REQUEST, DELETE_ADMIN_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_ADMINLIST_FAILURE, GET_ADMINLIST_REQUEST, GET_ADMINLIST_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_USERLIST_FAILURE, GET_USERLIST_REQUEST, GET_USERLIST_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from './actionTypes';

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
const getAdminListRequest = () => ({ type: GET_ADMINLIST_REQUEST });
const getAdminListSuccess = (payload) => ({ type: GET_ADMINLIST_SUCCESS, payload });
const getAdminListFailure = () => ({ type: GET_ADMINLIST_FAILURE });
const addAdminRequest = () => ({ type: ADD_ADMIN_REQUEST });
const addAdminSuccess = (payload) => ({ type: ADD_ADMIN_SUCCESS, payload });
const addAdminFailure = () => ({ type: ADD_PRODUCT_FAILURE });
const deleteAdminRequest = () => ({ type: DELETE_ADMIN_REQUEST });
const deleteAdminSuccess = (payload) => ({ type: DELETE_ADMIN_SUCCESS, payload });
const deleteAdminFailure = () => ({ type: DELETE_ADMIN_FAILURE });

export const getProducts = (endpoint) => (dispatch) => {
  dispatch(getProductDataRequest());
  axios.get(`https://taupe-waistcoat.cyclic.app/${endpoint}`).then((res) => { dispatch(getProductDataSuccess(res.data)) })
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


export const updateProduct = (id, product) => async (dispatch) => {
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
      "https://taupe-waistcoat.cyclic.app/admin/users",{
        headers:{
          "Authorization": `bearer ${localStorage.getItem("adminToken")}`,
      }
      }
    );
    dispatch(getUserListSuccess(data));
  } catch (error) {
    dispatch(getUserListFailure(error));
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch(deleteUserRequest());
  try {
    let res = await axios.delete(`https://taupe-waistcoat.cyclic.app/admin/users/delete/${id}`,{
      headers:{
        "Authorization": `bearer ${localStorage.getItem("adminToken")}`,
    }
    });
    dispatch(deleteUserSuccess(id));
    return res;
  } catch (error) {
    dispatch(deleteUserFailure("error", error));
  }
};

export const getAdminList = async (dispatch) => {
  dispatch(getAdminListRequest());
  try {
    const { data } = await axios.get(
      "https://taupe-waistcoat.cyclic.app/admin",{
        headers:{
          "Authorization": `bearer ${localStorage.getItem("adminToken")}`,
      }
      });
      console.log(data);
    dispatch(getAdminListSuccess(data));
  } catch (error) {
    dispatch(getAdminListFailure(error));
  }
};
export const addAdmin = (admin) => async (dispatch) => {
  dispatch(addAdminRequest());
  try {
    let { data } = await axios.post("https://taupe-waistcoat.cyclic.app/admin/register", admin , {
      headers:{
        "Authorization": `bearer ${localStorage.getItem("adminToken")}`,
    }
    });
    dispatch(addAdminSuccess(data));
    return data;
  } catch (error) {
    dispatch(addAdminFailure(error));
  }
};

export const deleteAdmin = (id) => async (dispatch) => {
  dispatch(deleteAdminRequest());
  try {
    let { data } = await axios.delete(
      `https://taupe-waistcoat.cyclic.app/admin/delete/${id}`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      }
      }
    );
    dispatch(deleteAdminSuccess(id));
    return data;
  } catch (error) {
    dispatch(deleteAdminFailure(error));
  }
};

export const adminLogin = (Obj) => (dispatch) => {
  dispatch({ type: ADMIN_REQUEST })

  return axios.post(`https://taupe-waistcoat.cyclic.app/admin/login`, Obj).then((res) => {
    localStorage.setItem('adminToken', res.data.token)
    localStorage.setItem('adminName', res.data.name)
    localStorage.setItem('adminImage', res.data.image)
    dispatch({ type: ADMIN_LOGIN_REQUEST, payload: res.data.token })
  }).catch(() => {
    dispatch({ type: ADMIN_FAILURE_REQUEST })
  })
}