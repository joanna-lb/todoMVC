import {
    ADD_TODO,
    CLEAR_ALL_COMPLETES, CLEAR_COMPLETE, DELETE_TODO, EDIT_TODO_LIST,
    SET_ALL_TASKS_AS_COMPLETED,
    SET_TODO_LIST, CHANGE_COMPLETE_STATUS
} from "../../utils/constants";


const setTodoList = name => ({type: SET_TODO_LIST, payload: name})


const addTodo = todo => ({type: ADD_TODO, payload: todo})


const setAllTasksAsCompleted = () =>
    ({type: SET_ALL_TASKS_AS_COMPLETED})


const clearAllCompletes = () =>
    ({type: CLEAR_ALL_COMPLETES})


const changeCompleteStatus = (id, isComplete) =>
    ({type: CHANGE_COMPLETE_STATUS, payload: {id, isComplete}})


const editTodoList = (id, name) =>
    ({type: EDIT_TODO_LIST, payload: {id, name}})


const deleteTodo = (id) =>
    ({type: DELETE_TODO, payload: id})





const clearComplete = () =>
    ({type: CLEAR_COMPLETE})





export {
    setTodoList,
    setAllTasksAsCompleted,
    clearAllCompletes,
    changeCompleteStatus,
    editTodoList,
    deleteTodo,
    clearComplete,
    addTodo
}