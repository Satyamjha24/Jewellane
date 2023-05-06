import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType"


const initialState={
    isLoading:false,
    products:[],
    isError:false,
}



export const reducer=(state=initialState,{type,payload})=>{
switch(type){
case PRODUCT_REQUEST:
    return{...state,isLoading:true}
case PRODUCT_FAILURE:
return{...state,isError:true,isLoading:false}
case PRODUCT_SUCCESS:
    return{...state,isLoading:false,products:payload}
    default:
        return state
}
}