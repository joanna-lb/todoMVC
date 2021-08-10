import React from "react";
import TodoList from "../../components/TodoList/TodoList";
import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
import Footer from "../../components/Footer/Footer";
import store from "../../redux/store";
import {connect} from "react-redux";
import {setTodoList} from "../../redux/action";

function Todo({todos}) {

    return (
        <>
            <section className="todoapp">
                <Header/>
                <TodoList/>
                {todos.length > 0 && <Footer/>}
            </section>
            <Description/>
        </>
    )
}


export default connect(
    state => ({
        todos: state.todos,
    })
)(Todo);