import React, { useReducer, useState } from 'react';
import Todo from './Todo';

export const ACTIONS = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo',
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, action.payload.todo];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodos(name) {
  return {
    id: Date.now(),
    name,
    complete: false,
  };
}

export default function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        todo: newTodos(name),
      },
    });
    setName('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <section>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </section>
    </div>
  );
}
