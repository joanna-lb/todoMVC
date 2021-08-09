import {nanoid} from "nanoid";

import {
    setFilterTypesRedux,
    clearCompleteRedux,
    setAllTasksAsCompletedRedux,
    clearAllCompletesRedux,
    changeCompleteStatusRedux,
    setCompletesRedux,
    editTodoListRedux,
    setTodoListRedux,
    deleteTodoRedux
} from "../redux/todoSlice";

import {useSelector} from "react-redux";


const newTodos = (name) => {
    return {
        id: nanoid(),
        name,
        isComplete: false
    }
}


const setTodoList = (dispatch, name) => {
    dispatch(setTodoListRedux(name))
}


const setAllTasksAsCompleted = (dispatch) => {
    dispatch(setAllTasksAsCompletedRedux())
}


const clearAllCompletes = (dispatch) => {
    dispatch(clearAllCompletesRedux())
}


const setCompletes = (dispatch, id) => {
    dispatch(setCompletesRedux(id))
}

const changeCompleteStatus = (dispatch, id) => {
    dispatch(changeCompleteStatusRedux(id))
}


const editTodoList = (dispatch, id, name) => {
    dispatch(editTodoListRedux({id, name}))
}


const deleteTodo = (dispatch, id) => {
    dispatch(deleteTodoRedux(id))
}


const setFilterTypes = (dispatch, filterType) => {
    dispatch(setFilterTypesRedux(filterType))
}


const clearComplete = (dispatch) => {
    dispatch(clearCompleteRedux())
}


const checkIfShowDecoration = () => {
    const state = useSelector((state) => state.todoList)
    return state.todos.length !== 0
}


const leftItemsCount = (todos) => {
    return todos.filter(todo => !todo.isComplete).length;
}

const checkAnyComplete = (todos) => {
    return todos.filter(todo => todo.isComplete).length > 0

}


export {
    checkIfShowDecoration,
    leftItemsCount,
    checkAnyComplete,
    newTodos,
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
// export const TODOS_URL='http://localhost:4000/todos'
// const fetchTodos=()=>axios.get('http://localhost:4000/todos');
// const addTodo=(name)=>axios.post(TODOS_URL,name)