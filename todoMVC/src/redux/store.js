
import todoReducer from "./reducers";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";

// export default configureStore({
//     reducer: {
//         todoList: todoReducer,
//     },
// })

export default createStore(todoReducer,applyMiddleware(thunk))
