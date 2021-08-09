import React from "react";
import Filters from "./Filters";
import TodoCount from "./TodoCount";
import './index.css'
import {connect} from "react-redux";
import {checkIfShowDecoration, checkAnyComplete} from '../../shared'
import {clearComplete} from '../../redux/action'

const Footer = ({todos, clearComplete}) => {

    const handleClearComplete = () => {
        clearComplete()
    }


    const ifShowDecoration =
        checkIfShowDecoration(todos)

    return (
        ifShowDecoration && <footer className='footer'>
            <TodoCount/>
            <Filters/>

            <button className='clear-completed' hidden={checkAnyComplete(todos) ? '' : 'hidden'}
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