import React from "react";
import {useTodoContext} from "../contexts/TodoProvider";
import {deleteComplete, deleteTodo, setCompletes} from "../actions";

function TodoItem({todo}) {
    const {dispatch} = useTodoContext();
    const handleDelete = (id) => {
        deleteTodo(dispatch, id)
    }
    const handleComplete = (todo, e) => {
        e.target.checked ? setCompletes(dispatch, todo) : deleteComplete(dispatch, todo.id)
    }

    return (
        todo &&
        <li key={todo.id} className="completed">
            <div className="view">
                <input type='checkbox' id="checkbox" onChange={(e) => handleComplete(todo, e)}
                       className='toggle'
                />
                <label
                       style={{textDecoration: todo.complete ? 'line-through' : 'none'}} htmlFor='checkbox'>{todo.name}
                </label>
                <button className='destroy' onClick={() => handleDelete(todo.id)}/>
            </div>
            <input className="edit"/>
        </li>
    )
}

export default TodoItem