import {nanoid} from "nanoid";

const newTodos=(name)=> {
    return {
        id: nanoid(),
        name,
        complete: false
    }

}


const newCompletes=(todo)=> {
    return {
        id: todo.id,
        name: todo.name,
        complete: true
    }

}

const addAllTodosToCompletes=(todos)=>{
     return  todos.map(todo=>todo.complete===true)
}


export {newTodos,newCompletes,addAllTodosToCompletes}