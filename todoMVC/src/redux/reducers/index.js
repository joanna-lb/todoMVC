import {newTodos} from "../../shared";
import {SET_TODO_LIST, DELETE_TODO,SET_COMPLETES,
    SET_ALL_TASKS_AS_COMPLETED,SET_FILTER_TYPES,
    CHANGE_COMPLETE_STATUS,CLEAR_ALL_COMPLETES,
    EDIT_TODO_LIST,CLEAR_COMPLETE} from "../../utils/constants";

const initialState= {
    todos:[],
    filterType:'All'
}

export default function todoReducer(state=initialState,action) {
    switch (action.type) {
        case  SET_TODO_LIST:
            return {
                ...state,
               todos : [...state.todos, newTodos(action.data)]
            }
        case  CLEAR_COMPLETE:
            return {
              ...state,
              todos : state.todos.filter(todo => !todo.isComplete)
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
                todos : state.todos.map((todo) => {
                    return {...todo, isComplete: false}
                })
            }
        case CHANGE_COMPLETE_STATUS:
            return {
                ...state,
              todos : state.todos.map((todo) => {
                    if (todo.id === action.data) {
                        return {...todo, isComplete: false}
                    }
                    return todo;
                })
            }
        case SET_COMPLETES:
            return {
                ...state,
                todos:  state.todos.map((todo) => {
                    if (todo.id === action.data) {
                        return {...todo, isComplete: true}
                    }
                    return todo;
                })
            }
        case EDIT_TODO_LIST:
            return {
                ...state,
                todos:state.todos.map(todo => {
                    if (todo.id === action.data.id) {
                        return {...todo, name: action.data.name}
                    }
                    return todo;
                })
            }
        case DELETE_TODO:
            return {
                ...state,
                todos : state.todos.filter((todo) => todo.id !== action.data)
            }
        case SET_FILTER_TYPES:
            return {
                ...state,
               filterType : action.data
            }
        default:
            return state

    }
}