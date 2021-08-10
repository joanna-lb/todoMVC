
import todoReducer from "./reducers";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";


export default createStore(todoReducer,applyMiddleware(thunk))
//不需要
