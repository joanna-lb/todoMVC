import {nanoid} from "nanoid";

export const SET_TODOS = 'SET_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_COMPLETES = 'SET_COMPLETES'
export const CLEAR_COMPLETES = 'CLEAR_COMPLETES'
export const RESET_ALL_COMPLETES = 'RESET_ALL_COMPLETES'
export const SET_CURRENT_STATUS = 'SET_CURRENT_STATUS'
export const  DELETE_COMPLETE=' DELETE_COMPLETE'


const todoReducer = (state, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {
                ...state,
                todos: [...state.todos, newTodos(action.payload)],
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
                completes:state.completes && state.completes.length!==0 && state.completes.filter((complete)=>complete.id !== action.payload)
            };
        case DELETE_COMPLETE:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {...todo, complete:false}
                    }
                    return todo;
                }),
                completes: state.completes && state.completes.length!==0 && state.completes.filter((complete)=>complete.id !== action.payload)
            };
        case SET_COMPLETES:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {...todo, complete:true}
                    }
                    return todo;
                }),
                completes: state.completes && [...state.completes, newCompletes(action.payload)] ,
            }
        case SET_CURRENT_STATUS:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_COMPLETES:
            return {
                ...state,
                todos: action.payload.todos,
                completes: action.payload.completes
            }
        case RESET_ALL_COMPLETES:
            return {
                ...state,
                todos: state.todos.length !== state.completes.length || checkComplete(state.todos) ? resetCompletes(state.todos, true) : resetCompletes(state.todos, false),
                completes: state.todos.length !== state.completes.length || checkComplete(state.todos) ? resetCompletes(state.todos, true) : []
            }

        default:
            return state;
    }
}

function newTodos(name) {
    return {
        id: nanoid(),
        name,
        complete: false
    }

}

function newCompletes(todo) {
    return {
        id: todo.id,
        name: todo.name,
        complete: true
    }

}


function resetCompletes(todos, status) {
    return todos.map((todo) => {
        return {...todo, complete: status}
    })
}

function checkComplete(checkTodos) {
    return checkTodos.filter(todo => todo.complete === false).length === checkTodos.length
}

export default todoReducer;