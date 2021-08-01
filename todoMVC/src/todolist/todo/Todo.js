import React, {Component} from 'react';
import TodoList from "./TodoList";
import Footer from "./Footer";
import Top from "./Top";
import Description from "./Description";
import '../../index.css'
import {newTodos, newCompletes, addAllTodosToCompletes} from "../../actions";


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            completes: [],
            current: 'All',
            showDecoration: false,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.todos !== this.state.todos) {
            this.state.todos.length !== 0 ? this.setState({showDecoration: true}) : this.setState({showDecoration: false})
        }
    }

    setTodoList = (name) => {
        this.setState({
            todos: [...this.state.todos, newTodos(name)]
        })
    }
    setCompletes = (todoSelected) => {
        this.setState({
            ...this.state,
            todos: this.state.todos.map(todo => {
                if (todo.id === todoSelected.id) {
                    return {...todo, complete: true}
                }
                return todo;
            }),
            completes: [...this.state.completes, newCompletes(todoSelected)]
        })
    }


    deleteComplete = (id) => {
        this.setState({
            ...this.state,
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, complete: false}
                }
                return todo;
            }),
            completes: this.state.completes && this.state.completes.length !== 0 && this.state.completes.filter((complete) => complete.id !== id)
        })
    }

    deleteTodo = (id) => {
        this.setState({
            ...this.state,
            todos: this.state.todos.filter((todo) => todo.id !== id),
            completes: this.state.completes && this.state.completes.length !== 0 && this.state.completes.filter((complete) => complete.id !== id)
        })

    };

    showContent = (current) => {
        this.setState({
            current
        })
    }

    clearComplete = () => {
        this.setState({
            ...this.state,
            todos: this.state.todos.filter(todo => !todo.complete),
            completes: []
        })
    }

    clearAllCompletes = () => {
        this.setState({
            ...this.state,
            todos: this.state.todos.map((todo) => {
                return {...todo, complete: false}
            }),
            completes: []
        })
    }

    setAllCompletes = () => {
        this.setState({
            ...this.state,
            todos: this.state.todos.map((todo) => {
                return {...todo, complete: true}
            }),
            completes: addAllTodosToCompletes(this.state.todos)
        })
    }


    render() {
        return (
            <>
                <section className="todoapp">
                    <Top setTodoList={this.setTodoList}/>
                    {this.state.showDecoration && <TodoList
                        todos={this.state.todos}
                        completes={this.state.completes}
                        setCompletes={this.setCompletes}
                        deleteTodo={this.deleteTodo}
                        deleteComplete={this.deleteComplete}
                        currentContent={this.state.current}
                        clearAllCompletes={this.clearAllCompletes}
                        setAllCompletes={this.setAllCompletes}
                    />}
                    {this.state.showDecoration && <Footer showContent={this.showContent}
                                                          leftItemsCount={this.state.todos.filter(todo => !todo.complete).length}
                                                          clearComplete={this.clearComplete}
                                                          currentContent={this.state.current}
                                                          anyComplete={this.state.completes.length > 0}
                    />}
                </section>
                <Description/>
            </>
        );
    }

}

export default Todo;
