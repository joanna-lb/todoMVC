import React, {useEffect} from "react";
import {connect} from "react-redux";
import TodoItems from "./TodoItems";
import {FILTERS_TYPES} from "../../utils/constants";
import {setTodoList} from "../../redux/action";
import {fetchTodoList} from "../../shared";



const TodoList = ({todos}) => {



    return (
        <section className='main'>
            <ul className="todo-list">
                {
                todos.map(todo =>
                    <TodoItems todo={todo} todos={todos}
                               key={todo.id}
                    />
                )}
            </ul>
        </section>)


}
export default TodoList