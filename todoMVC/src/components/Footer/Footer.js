import React from "react";
import Filters from "./Filters";
import TodoCount from "./TodoCount";
import './index.css'
import {connect} from "react-redux";
import {checkAnyComplete, deleteTodoAction} from '../../shared'
import {clearComplete} from '../../redux/action'

const Footer = ({todos, clearComplete}) => {

    const handleClearComplete =async () => {
        await   todos.filter(todo=>todo.isComplete).forEach(
            todo=> deleteTodoAction(todo.id))
        await clearComplete()
    }

    return (
        <footer className='footer'>
            <TodoCount/>
            <Filters/>
            <button data-testid='button' className='clear-completed' hidden={checkAnyComplete(todos) ? '' : 'hidden'}
                    onClick={handleClearComplete}>
                Clear completed
            </button>
        </footer>
    )
}

export default connect(
    state => ({todos: state.todos}),
    {clearComplete}
)(Footer);