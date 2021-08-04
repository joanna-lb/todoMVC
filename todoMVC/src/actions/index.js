import {nanoid} from "nanoid";

const newTodos = (name) => {
    return {
        id: nanoid(),
        name,
        isComplete: false
    }
}




export {newTodos}