import {
    DELETE_TODO,
    SET_TODOS,
    SET_COMPLETES,
    SET_CURRENT_STATUS,
    CLEAR_COMPLETES,
    RESET_ALL_COMPLETES,
    DELETE_COMPLETE
} from "../reducers";

const setTodoList=(dispatch,todos)=>
    dispatch({type:SET_TODOS,payload:todos})

const deleteTodo=(dispatch,id)=>
    dispatch({type:DELETE_TODO,payload:id})
const deleteComplete=(dispatch,id)=>
    dispatch({type:DELETE_COMPLETE,payload:id})
const setCompletes=(dispatch,todo) =>
    dispatch({type:SET_COMPLETES,payload: todo})

const setCurrent=(dispatch,currentStatus)=>{
    dispatch({type:SET_CURRENT_STATUS,payload:currentStatus})
}

const clearCompletes=(dispatch,allArray)=>{
    dispatch({type:CLEAR_COMPLETES,payload:allArray})
}

const resetAllCompletes=(dispatch)=> {
    dispatch({type:RESET_ALL_COMPLETES})


}
export {setTodoList,deleteTodo,setCompletes,setCurrent,clearCompletes,resetAllCompletes,deleteComplete}