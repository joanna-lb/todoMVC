import React, {Component, useEffect, useState} from "react";
import TodoItems from "./TodoItems";
import {FILTERS_TYPES} from "../../utils/constants";

import {useSelector} from "react-redux";

function TodoList() {

    const state = useSelector((state) => state.todoList)
    const {filterType, todos} = state

    useEffect(() => {
    }, [])
    return (
        <section className='main'>
            <ul className="todo-list">
                {filterType === FILTERS_TYPES.All &&
                todos.map(todo =>
                    <TodoItems todo={todo} todos={todos}
                               key={todo.id}
                    />
                )}

                {filterType === FILTERS_TYPES.Completed &&
                todos.filter(todo => todo.isComplete).map((todo) =>
                    <TodoItems todo={todo} todos={todos}
                               key={todo.id}
                    />
                )}

                {filterType === FILTERS_TYPES.Active && todos.filter(todo => !todo.isComplete).map((todo) => (
                    <TodoItems todo={todo} todos={todos}
                               key={todo.id}
                    />
                ))
                }
            </ul>
        </section>)


}

export default TodoList