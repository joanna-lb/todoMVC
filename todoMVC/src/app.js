import React from "react";
import './index.css'
import {TodoMain} from "./todolist/todo/TodoMain";
import {TodoRedux} from "./todolist/todo/TodoRedux";

export default function App() {
    return (
        <div>
           <TodoRedux/>
        </div>
    );

}


