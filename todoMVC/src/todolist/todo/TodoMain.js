import React from "react";
import {TodoProvider} from "../../contexts/TodoProvider";
import TodoList from "../../components/TodoList/TodoList";
import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
import Footer from "../../components/Footer/Footer";

function TodoMain() {
    return (
        <>
            <TodoProvider>
                <section className="todoapp">
                    <Header/>
                    <TodoList/>
                    <Footer/>
                </section>
                <Description/>
            </TodoProvider>
        </>
    )
}

export {TodoMain}
