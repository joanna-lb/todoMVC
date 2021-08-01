
import React, {createContext,useReducer,useEffect,useContext} from "react";
import todoReducer from "../reducers";
import {setTodoList} from "../actions";
const TodoContext=createContext({todos:[]});

const TodoProvider =({children})=>{
    const [state,dispatch]=useReducer(todoReducer,{
        todos:[],
        completes:[],
        current:'All'
    });

    useEffect( ()=>{
        if(children.todos && children.todos[0].name!==undefined){
            setTodoList(dispatch,children.todos)// eslint-disable-line react-hooks/exhaustive-deps
        }
    },[children.todos]);

    return (
        <TodoContext.Provider
            value={{
                state,
                dispatch
            }}
        >{children}
        </TodoContext.Provider>
    );
};

const useTodoContext = ()=> useContext(TodoContext);

export {TodoProvider,TodoContext,useTodoContext}