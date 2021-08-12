import React, {useEffect, useState} from "react";
import TodoList from "../../components/TodoList/TodoList";
import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
import Footer from "../../components/Footer/Footer";
import {connect} from "react-redux";
import {FILTERS_TYPES} from "../../utils/constants";
import {fetchTodoList, leftItemsCount} from "../../shared";
import {setTodoList} from "../../redux/action";

function Todo({todos,setTodoList}) {
    const [showContent,setShowContent]=useState(todos);
    useEffect( async ()=>{
        await fetchTodoList().then(
            res=>
                setTodoList(res.data) &&
                setShowContent(res.data)
        )
    },[leftItemsCount(todos),todos.length])


    const handleChangeShowContent=(filterTypes)=>{
        switch (filterTypes) {
            case FILTERS_TYPES.All:
               return  setShowContent(todos)
            case FILTERS_TYPES.Active:
              return   setShowContent(todos.filter(todo=>!todo.isComplete))
            case FILTERS_TYPES.Completed:
              return   setShowContent(todos.filter(todo=>todo.isComplete))
            default:
                return setShowContent(todos)
        }
    }

    return (
        <>
            <section className="todoapp">
                <Header/>
                <TodoList todos={showContent}/>
                {todos.length > 0 && <Footer changeShowContent={handleChangeShowContent}/>}
            </section>
            <Description/>
        </>
    )
}


export default connect(
    state => ({
        todos: state.todos,
    }),
    {setTodoList}
)(Todo);