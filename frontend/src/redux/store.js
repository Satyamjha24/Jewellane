import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as adminReducer } from "./Admin/reducer";
import { reducer as productReducer } from "./Product/reducer";
import { reducer as userReducer } from "./UserReducer/reducer";

const rootReducer = combineReducers({ productReducer, adminReducer, userReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

