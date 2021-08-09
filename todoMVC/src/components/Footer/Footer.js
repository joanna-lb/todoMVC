import React from "react";
import {Filters} from "./Filters";
import {TodoCount} from "./TodoCount";
import './index.css'

import {checkIfShowDecoration} from "../../actions";
import {clearComplete} from "../../actions";

import {checkAnyComplete} from "../../actions";
import {useDispatch, useSelector} from "react-redux";

const Footer = () => {

    const state = useSelector((state) => state.todoList)
    const dispatch = useDispatch()
    const handleClearComplete = () => {
        clearComplete(dispatch)
    }
    const ifShowDecoration = checkIfShowDecoration()


    return (
        ifShowDecoration && <footer className='footer'>
            <TodoCount/>
            <Filters/>

            <button className='clear-completed' hidden={checkAnyComplete(state.todos) ? '' : 'hidden'}
                    onClick={handleClearComplete}>
                Clear completed
            </button>
        </footer>
    )
}
export default Footer;