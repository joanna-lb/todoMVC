import {createSlice} from '@reduxjs/toolkit'
import {newTodos} from "../actions"

export const initialState = {
    todos: [],
    filterType: 'All'
}

export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        setTodoListRedux: (state, action) => {
            state.todos = [...state.todos, newTodos(action.payload)]
        },
        setAllTasksAsCompletedRedux: (state) => {
            state.todos = state.todos.map((todo) => {
                return {...todo, isComplete: true}
            })
        },
        clearAllCompletesRedux: (state, action) => {
            state.todos = state.todos.map((todo) => {
                return {...todo, isComplete: false}
            })
        },
        deleteTodoRedux: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodoListRedux: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, name: action.payload.name}
                }
                return todo;
            })
        },
        setCompletesRedux: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {...todo, isComplete: true}
                }
                return todo;
            })
        },
        changeCompleteStatusRedux: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {...todo, isComplete: false}
                }
                return todo;
            })
        },
        clearCompleteRedux: (state, action) => {
            state.todos = state.todos.filter(todo => !todo.isComplete)
        },
        setFilterTypesRedux: (state, action) => {
            state.filterType = action.payload
        }


    },
})


export const {
    setFilterTypesRedux,
    clearCompleteRedux,
    changeCompleteStatusRedux,
    setCompletesRedux,
    editTodoListRedux,
    deleteTodoRedux,
    clearAllCompletesRedux,
    setAllTasksAsCompletedRedux,
    setTodoListRedux
} = todoSlice.actions

export default todoSlice.reducer