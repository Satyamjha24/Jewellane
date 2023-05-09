import axios from "axios";
import {
  ADDTOCART_FAILURE,
  ADDTOCART_REQUEST,
  ADDTOCART_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./actionType";

export const getProduct = (obj,endpoint) => (dispatch) => {
  console.log(obj);
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`https://taupe-waistcoat.cyclic.app/${endpoint}`, obj)
    .then((res) => {
      // console.log(res)
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const addToCart = (Obj) => (dispatch) => {
  dispatch({ type: ADDTOCART_REQUEST });

  return axios
    .post(`https://taupe-waistcoat.cyclic.app/cart/add`, Obj, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      dispatch({ type: ADDTOCART_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: ADDTOCART_FAILURE });
    });
};
