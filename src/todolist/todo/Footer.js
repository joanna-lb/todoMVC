import {useTodoContext} from "../contexts/TodoProvider";
import {clearCompletes, setCurrent} from "../actions";
import React from "react";

export default function Footer({itemLength}) {
    // const {state} = useTodoContext();
    // const {dispatch} = useTodoContext();
    // const showComplete = () => {
    //     setCurrent(dispatch, 'Complete')
    // }
    //
    // const showAll = () => {
    //     setCurrent(dispatch, 'All')
    // }
    //
    // const showActive = () => {
    //     setCurrent(dispatch, 'Active')
    // }
    //
    // const handleClearComplete = () => {
    //     let result = state.todos.filter(todo => !todo.complete && todo.name)
    //     clearCompletes(dispatch, {todos: result, completes: []})
    // }
    return (
        <footer className='footer'>
            <span
                className='todo-count'>
                <strong>留下的数量</strong>
                {/*<strong> {state.todos.length - state.completes.length >= 0 ? state.todos.length - state.completes.length : 0}</strong>*/}
                <span>item</span>
                <span> left</span>
            </span>
            <ul className='filters'>
                <li><a href='#/all' className='selected'>All</a></li>
                <li><a href='#/active' >Active</a></li>
                <li><a href='#/complete' >Completed </a></li>
                            {/*<li><a href='#/all' onClick={showAll}*/}
                {/*       className={state.current === 'All' ? 'selected' : 'notSelected'}>All</a></li>*/}
                {/*<li><a href='#/active' onClick={showActive}*/}
                {/*       >Active</a></li>*/}
                {/*<li><a href='#/complete' onClick={showComplete}*/}
                {/*      >Completed</a></li>*/}
            </ul>
            {/*// onClick={handleClearComplete}>Clear completed*/}
            <button className='clear-completed'>
                Clear completed
            </button>
        </footer>
    )
}