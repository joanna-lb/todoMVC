import React, {useState} from "react";
import './index.css'
import {checkIfShowDecoration} from "../../actions";
import {setTodoList, setAllTasksAsCompleted, clearAllCompletes} from "../../actions";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.todoList)
    const ifShowDecoration = checkIfShowDecoration()
    const [name, setName] = useState("")
    const [changeArrowStyle, setArrowStyle] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const reg = new RegExp(/^\s+$/)
        if (!reg.test(name) && name.length > 0) {
            setTodoList(dispatch, name)
        }
        setName("")
    }

    const handleCompleteAll = (e) => {
        setArrowStyle(!changeArrowStyle)
        if (state.todos.filter(todo => !todo.isComplete).length > 0) {
            setAllTasksAsCompleted(dispatch)
        } else if (state.todos.filter(todo => todo.isComplete).length > 0) {
            clearAllCompletes(dispatch)
        }
    }


    return (
        <header className='header'>
            <h1>todos</h1>
            <form onSubmit={handleSubmit} className='new-todo-form'>
                <div className='new-todo-div' onClick={(e) => handleCompleteAll(e, state.todos)}>
                    {ifShowDecoration && <span className={changeArrowStyle ? 'toggle-all-checked' : 'toggle-all'}
                                               data-testid='toggle-all'>❯</span>}
                </div>
                <input className='new-todo-input'
                       placeholder="What needs to be done?"
                       onChange={(e) => setName(e.target.value)}
                       value={name}/>
            </form>
        </header>
    )
}
export default Header;