import React from "react";

import {useSelector} from "react-redux";
import {leftItemsCount} from '../../actions'

const TodoCount = () => {

    const state = useSelector((state) => state.todoList)
    return (
        <span
            className='todo-count'>{`${leftItemsCount(state.todos)} item left`}
            </span>
    )
}
export {TodoCount}