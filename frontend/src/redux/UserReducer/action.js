import axios from "axios"
import { USER_FAILURE_REQUEST, USER_LOGIN_REQUEST, USER_REGISTER_REQUEST, USER_REQUEST } from "./actionTypes"

export const userRegister = (Obj) => (dispatch) => {
    dispatch({ type: USER_REQUEST })

    return axios.post(`https://taupe-waistcoat.cyclic.app/users/register`, Obj).then((res) => {
        dispatch({ type: USER_REGISTER_REQUEST })
    }).catch(() => {
        dispatch({ type: USER_FAILURE_REQUEST })
    })
}

export const userLogin = (Obj) => (dispatch) => {
    dispatch({ type: USER_REQUEST })

    return axios.post(`https://taupe-waistcoat.cyclic.app/users/login`, Obj).then((res) => {
        localStorage.setItem('token', res.data.token)
        dispatch({ type: USER_LOGIN_REQUEST, payload: res.data.token })
    }).catch(() => {
        dispatch({ type: USER_FAILURE_REQUEST })
    })
}