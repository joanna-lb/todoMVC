import React, {useState} from "react";
import './index.css'
import { createTodo, newTodos, updateTodoAction} from "../../shared";
import {connect} from "react-redux";
import { setAllTasksAsCompleted, clearAllCompletes,addTodo} from "../../redux/action";

const Header = ({setAllTasksAsCompleted, clearAllCompletes, todos,addTodo}) => {

    const [name, setName] = useState("")
    const [allCompleteArrowStyle, setAllCompleteArrowStyle] = useState(false)

    const handleSubmit =async (e) => {
        e.preventDefault();
        const reg = new RegExp(/^\s+$/)
        if (!reg.test(name) && name.length > 0) {
            const newTodo = newTodos(name)
            await createTodo(newTodo)
            await addTodo(newTodo)
            setName("");
        }
    }

    const handleCompleteAll =async () => {
        if (todos.filter(todo => !todo.isComplete).length > 0) {
            setAllCompleteArrowStyle(true)
          await  todos.forEach(todo=>updateTodoAction(todo.id,{isComplete:true}))
              await setAllTasksAsCompleted()
        //    await
        } else if (todos.filter(todo => todo.isComplete).length > 0) {
            setAllCompleteArrowStyle(false)
            await  todos.forEach(todo=>updateTodoAction(todo.id,{isComplete:false}))
           await clearAllCompletes()
        }
    }


    return (
        <header className='header'>
            <h1>todos</h1>
            <form onSubmit={handleSubmit} className='new-todo-form'>
                <div className='new-todo-div' onClick={(e) => handleCompleteAll(e, todos)}>
                    {todos.length>0 && <span className={allCompleteArrowStyle ? 'toggle-all-checked' : 'toggle-all'}
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
export default connect(
    state => ({todos: state.todos}),
    { setAllTasksAsCompleted, clearAllCompletes,addTodo}
)(Header);