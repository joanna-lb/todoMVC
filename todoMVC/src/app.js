import React from "react";
import './index.css'
import Todo from "./todolist/todo/Todo";
import store from "./redux/store";

export default function App() {
    return (
        <div>
          <Todo store={store}/>
        </div>
    );

}


