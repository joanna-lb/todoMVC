import {
    SET_TODO_LIST, DELETE_TODO, SET_COMPLETE_FALSE,
    SET_ALL_TASKS_AS_COMPLETED, SET_FILTER_TYPES,
    SET_COMPLETE_TRUE, CLEAR_ALL_COMPLETES,
    EDIT_TODO_LIST, CLEAR_COMPLETE,ADD_TODO,CHANGE_COMPLETE_STATUS
} from "../../utils/constants";


const initialState = {
    todos: [],
    filterType: 'All'
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case  SET_TODO_LIST:
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos,action.payload]
            }
        case  CLEAR_COMPLETE:
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.isComplete)
            }
        case SET_ALL_TASKS_AS_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    return {...todo, isComplete: true}
                })
            }
        case CLEAR_ALL_COMPLETES:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    return {...todo, isComplete: false}
                })
            }
        case CHANGE_COMPLETE_STATUS:

            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {...todo, isComplete:action.payload.isComplete }
                    }
                    return todo;
                })
            }
        case EDIT_TODO_LIST:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {...todo, name: action.data.name}
                    }
                    return todo;
                })
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        case SET_FILTER_TYPES:
            return {
                ...state,
                filterType: action.payload
            }
        default:
            return state

    }
}