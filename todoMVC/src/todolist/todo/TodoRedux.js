import React from "react";
import TodoList from "../../components/TodoList/TodoList";
import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
import Footer from "../../components/Footer/Footer";

function TodoRedux() {
    return (
        <>
            <section className="todoapp">
                <Header/>
                <TodoList/>
                <Footer/>
            </section>
            <Description/>
        </>
    )
}

export {TodoRedux}
