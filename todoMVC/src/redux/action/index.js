import {
    CHANGE_COMPLETE_STATUS,
    CLEAR_ALL_COMPLETES, CLEAR_COMPLETE, DELETE_TODO, EDIT_TODO_LIST,
    SET_ALL_TASKS_AS_COMPLETED,
    SET_COMPLETES, SET_FILTER_TYPES,
    SET_TODO_LIST
} from "../../utils/constants";


const setTodoList = name => {
    return ({type: SET_TODO_LIST, data: name})
}


const setAllTasksAsCompleted = () =>
    ({type: SET_ALL_TASKS_AS_COMPLETED})


const clearAllCompletes = () =>
    ({type: CLEAR_ALL_COMPLETES})


const setCompletes = (id) =>
    ({type: SET_COMPLETES, data: id})


const changeCompleteStatus = (id) =>
    ({type: CHANGE_COMPLETE_STATUS, data: id})


const editTodoList = (id, name) =>
    ({type: EDIT_TODO_LIST, data: {id, name}})


const deleteTodo = (id) =>
    ({type: DELETE_TODO, data: id})


const setFilterTypes = (filterType) =>
    ({type: SET_FILTER_TYPES, data: filterType})


const clearComplete = () =>
    ({type: CLEAR_COMPLETE})


const leftItemsCount = (todos) => {
    return todos.filter(todo => !todo.isComplete).length;
}


export {
    leftItemsCount,
    setTodoList,
    setAllTasksAsCompleted,
    clearAllCompletes,
    setCompletes,
    changeCompleteStatus,
    editTodoList,
    deleteTodo,
    setFilterTypes,
    clearComplete
}