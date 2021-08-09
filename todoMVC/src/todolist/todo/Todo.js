import React, {useEffect, useReducer, useState} from 'react';
import TodoList from "../../components/TodoList/TodoList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
import '../../index.css'
import {fetchTodos, newTodos} from "../../shared";
import {useTodoContext} from "../../contexts/TodoProvider";
import {setTodoList} from "../../shared";
import {TodoProvider} from "../../contexts/TodoProvider";

// const defaultState = JSON.parse(localStorage.getItem("todos") || [])
//【】


    //const [todos, setTodos] = useState(defaultState)
    // const [filterTypes, setFilterTypes] = useState('All')

    // useEffect(() => {
    //     localStorage.setItem("todos", JSON.stringify(todos))
    //     // console.log(fetchTodos().then((res)=>setTodos(dispatch,res.data)))
    // }, [todos])
function Todo() {

    // const showDecoration = () => {
    //     return state.todos.length !== 0
    // }

    // const setTodoList = (name) => {
    //     setTodos([...todos, newTodos(name)]
    //     )
    // }

    // const editTodoList = (id, name) => {
    //     setTodos(todos.map(todo => {
    //             if (todo.id === id) {
    //                 return {...todo, name: name}
    //             }
    //             return todo;
    //         })
    //     )
    // }
    // const setCompletes = (id) => {
    //     setTodos(todos.map(todo => {
    //             if (todo.id === id) {
    //                 return {...todo, isComplete: true}
    //             }
    //             return todo;
    //         })
    //     )
    // }
    //
    //
    // const changeCompleteStatus = (id) => {
    //     setTodos(todos.map((todo) => {
    //             if (todo.id === id) {
    //                 return {...todo, isComplete: false}
    //             }
    //             return todo;
    //         })
    //     )
    // }
    //
    // const deleteTodo = (id) => {
    //     setTodos(todos.filter((todo) => todo.id !== id))
    // };
    //
    // const showContent = (filterTypes) => {
    //     setFilterTypes(
    //         filterTypes
    //     )
    // }
    //
    // const clearComplete = () => {
    //     setTodos(todos.filter(todo => !todo.isComplete))
    // }
    //
    // const clearAllCompletes = () => {
    //     setTodos(todos.map((todo) => {
    //         return {...todo, isComplete: false}
    //     }))
    // }
    //
    //
    // const setAllTasksAsCompleted = () => {
    //     setTodos(todos.map((todo) => {
    //             return {...todo, isComplete: true}
    //         })
    //     )
    // }
    //
    // const leftItemsCount = () => {
    //     return todos.filter(todo => !todo.isComplete).length;
    // }
    //
    // const checkAnyComplete = () => {
    //     return todos.filter(todo => todo.isComplete).length > 0
    // }


    return (
        <>
                <section className="todoapp">
                    <Header
                        // setTodoList={setTodoList}
                        // ifShowDecoration={showDecoration()}
                        // todos={state.todos}
                        // clearAllCompletes={clearAllCompletes}
                        // setAllTasksAsCompleted={setAllTasksAsCompleted}
                    />
                    {showDecoration() && <TodoList
                        // todos={state.todos}
                        // filterTypes={filterTypes}
                        // setCompletes={setCompletes}
                        // deleteTodo={deleteTodo}
                        // changeCompleteStatus={changeCompleteStatus}
                        //
                        // editTodoList={editTodoList}
                    />}
                    {/*{showDecoration() && <Footer*/}
                    {/*    filterTypes={filterTypes}*/}
                    {/*    // showContent={showContent}*/}
                    {/*    //                          leftItemsCount={leftItemsCount()}*/}
                    {/*    //                          clearComplete={clearComplete}*/}
                    {/*    //                          anyComplete={checkAnyComplete()}*/}
                    {/*/>}*/}
                </section>
                <Description/>
            </>
            )
            }

            export default Todo;
