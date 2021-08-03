import React from "react";

const TodoCount = ({leftItemsCount}) => {
    return (
            <span
            className='todo-count'>{`${leftItemsCount} item left`}
            </span>
    )
}
export {TodoCount}