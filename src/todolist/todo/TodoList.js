import React from "react";
import {useTodoContext} from "../contexts/TodoProvider";
import TodoItem from "./TodoItem";


export default function TodoList() {
    // const {state} = useTodoContext();
    return (
        <section className='main'>
            <input id="toggle-all" className="toggle-all" type="checkbox"/>
            <label htmlFor='toggle-all'>
        </label>
            <ul className="todo-list">
              <li ><div className='view'>
                  <input className='toggle' type='checkbox'/>
                  <label>每列的内容</label>
                  <button className='destroy'></button>
              </div></li>
                {/*{*/}
                {/*    state.current === 'All' ?*/}
                {/*        state.todos.map((todo) => (*/}
                {/*            todo.name &&*/}
                {/*            <TodoItem key={todo.id} todo={todo} complete={todo.complete}/>*/}
                {/*        )) :*/}
                {/*        state.current === 'Complete' ?*/}
                {/*            state.completes && state.completes.map((todo) => (*/}
                {/*                todo.name &&*/}
                {/*                <TodoItem key={todo.id} todo={todo} complete={todo.complete}/>*/}
                {/*            )) : state.todos.filter(todo => !todo.complete).map((todo) => (*/}
                {/*                todo.name &&*/}
                {/*                <TodoItem key={todo.id} todo={todo} complete={todo.complete}/>*/}
                {/*            ))*/}
                {/*}*/}

            </ul>
        </section>)
}