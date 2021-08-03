import React, {useState} from "react";
import './index.css'

const TodoItems = ({todo, todos, handleComplete, deleteTodo}) => {

    return (
        <>
            {
                < li key={todo.id} className={(todo.isComplete) ? 'completed' : 'none'}>
                    < div className='view'>
                        <input className='toggle' type='checkbox'
                               id='checkbox'
                               onChange={(e) => handleComplete(todo, e, todos)}/>
                        <label
                            htmlFor='checkbox'
                            className={todo.isComplete?'checkboxChecked':'checkboxUnchecked'}
                          >
                            {todo.name}
                        </label>
                        <button className='destroy' onClick={() => deleteTodo(todo.id)}>x</button>
                    </div>
                </li>
            }
        </>
    )
}

export default TodoItems
