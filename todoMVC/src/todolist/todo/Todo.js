import React from "react";
import TodoList from "../../components/TodoList/TodoList";
import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
import Footer from "../../components/Footer/Footer";
import {connect} from "react-redux";


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