import {nanoid} from "nanoid";
import axios from "axios";


const newTodos = (name) => {
    return {
        id: nanoid(),
        name,
        isComplete: false
    }
}


const leftItemsCount = (todos) => {
    return todos.filter(todo => !todo.isComplete).length;
}

const checkAnyComplete = (todos) => {
    return todos.filter(todo => todo.isComplete).length > 0

}

export const BASE_URL = 'http://localhost:4000/todos'
const fetchTodoList = () => axios.get(BASE_URL)

const createTodo = todo => {
   return axios.post(BASE_URL, todo)
}

const deleteTodoAction = (id) => {
    return axios.delete(`${BASE_URL}/${id}`)
}

const updateTodoAction = (id, data) => axios.patch(`${BASE_URL}/${id}`, data)

export {
    leftItemsCount,
    checkAnyComplete,
    newTodos,
    fetchTodoList,
    deleteTodoAction,
    updateTodoAction,
    createTodo,
}
