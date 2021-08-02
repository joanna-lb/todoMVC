import React from "react";

const TodoCount = ({leftItemsCount}) => {
    return (
        <span
            className='todo-count'>
                <strong>{leftItemsCount}</strong>
                <span> item</span>
                <span> left</span>
            </span>
    )
}
export {TodoCount}