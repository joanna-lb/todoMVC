import React from "react";
import './index.css'
import {TodoRedux} from "./todolist/todo/TodoRedux";
import store from "./redux/store";

export default function App() {
    return (
        <div>
           <TodoRedux store={store}/>
        </div>
    );

}


