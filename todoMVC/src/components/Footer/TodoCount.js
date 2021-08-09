import React from "react";
import {connect} from "react-redux";
import {leftItemsCount} from "../../shared";


const TodoCount = ({todos}) => {


    return (
        <span
            className='todo-count'>{`${leftItemsCount(todos)} item left`}
            </span>
    )
}

export default connect(
    state => ({todos: state.todos}),
    {leftItemsCount}
)(TodoCount);