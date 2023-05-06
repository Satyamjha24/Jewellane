import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as adminReducer } from "./Admin/reducer";
import {reducer as productReducer} from"./Product/reducer"

const rootReducer = combineReducers({productReducer, adminReducer});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

//export { store };