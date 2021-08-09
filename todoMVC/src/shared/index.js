import {nanoid} from "nanoid";



import {useSelector} from "react-redux";


const newTodos = (name) => {
    return {
        id: nanoid(),
        name,
        isComplete: false
    }
}


const checkIfShowDecoration = (todos) => {

    return todos.length !== 0
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

}
// export const TODOS_URL='http://localhost:4000/todos'
// const fetchTodos=()=>axios.get('http://localhost:4000/todos');
// const addTodo=(name)=>axios.post(TODOS_URL,name)