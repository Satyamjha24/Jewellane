import axios from"axios"
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType"

export const getProduct=(obj)=>(dispatch)=>{
    console.log(obj)
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`https://taupe-waistcoat.cyclic.app/ring`,obj).then((res)=>{
        // console.log(res)
        dispatch({type:PRODUCT_SUCCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}