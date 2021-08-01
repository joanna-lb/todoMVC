import React, {useState} from "react";
import {useTodoContext} from "../contexts/TodoProvider";
import {resetAllCompletes, setTodoList} from "../actions";

export default function Top() {
    //export-vs export const 唯一key
    // const {dispatch} = useTodoContext();
    // const [name, setName] = useState("")
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setTodoList(dispatch, name)
    //     setName("")
    // }
    // const handleToggleAll = () => {
    //     resetAllCompletes(dispatch)
    // }
    return (

        // <form onSubmit={handleSubmit}>     // </form>


            <header className='header'>
                <h1>todos</h1>
            <input className='new-todo'
                   placeholder="What needs to be done?"
                   onChange={(e) => setName(e.target.value)}
                   value={name}/>
            {/*    <label htmlFor='toggle-all'>
            </label>*/}
            </header>




    )
}