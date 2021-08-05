import React, {useState} from "react";
import './index.css'


const Header = ({setTodoList, todos, setAllTasksAsCompleted, clearAllCompletes, ifShowDecoration}) => {
    const [name, setName] = useState("")
    const [changeArrowStyle, setArrowStyle] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const reg = new RegExp(/^\s+$/)
        if (!reg.test(name) && name.length > 0) {
            setTodoList(name)
        }
        setName("")
    }

    const handleCompleteAll = () => {
        setArrowStyle(!changeArrowStyle)
        if (todos.filter(todo => !todo.isComplete).length > 0) {
            setAllTasksAsCompleted()
        } else if (todos.filter(todo => todo.isComplete).length > 0) {
            clearAllCompletes()
        }
    }


    return (
        <header className='header'>
            <h1>todos</h1>
            <form onSubmit={handleSubmit} className='new-todo-form'>
                <div className='new-todo-div' onClick={() => handleCompleteAll(todos)}>
                    {ifShowDecoration && <span className={changeArrowStyle ? 'toggle-all-checked' : 'toggle-all'} data-testid='toggle-all'>❯</span>}
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