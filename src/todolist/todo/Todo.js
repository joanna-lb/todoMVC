import React from 'react';
import TodoList from "./TodoList";
import Footer from "./Footer";
import Top from "./Top";
import Description from "./Description";
import '../../index.css'


export default function Todo() {
    return (
        <>
            <section className="todoapp">
                <Top/>
                <TodoList/>
                <Footer/>

                {/*        /!*    重构：div放里面，名字*!/*/}
                {/*        <TodoList/>*/}
                {/*        <Footer/>*/}
                {/*    <Description/>*/}
                {/*/!*    改名extra information*!/*/}
            </section>
            <Description/>
        </>
    );
}
