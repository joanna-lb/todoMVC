import React, {Component} from 'react';
import TodoList from "../../components/TodoList/TodoList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
import '../../index.css'
import {newTodos} from "../../actions";


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            filterTypes: 'All',
        }
    }

    showDecoration() {
        return this.state.todos.length !== 0
    }

    setTodoList = (name) => {
        this.setState({
            todos: [...this.state.todos, newTodos(name)]
        })
    }
    setCompletes = (todoSelected) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === todoSelected.id) {
                    return {...todo, isComplete: true}
                }
                return todo;
            })
        })
    }


    changeCompleteStatus = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, isComplete: false}
                }
                return todo;
            })
        })
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id),
        })
    };

    showContent = (filterTypes) => {
        this.setState({
            filterTypes
        })
    }

    clearComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.isComplete),
        })
    }

    clearAllCompletes = () => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                return {...todo, isComplete: false}
            }),
        })
    }


    selAllTasksAsCompleted = () => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                return {...todo, isComplete: true}
            }),
        })
    }


    render() {
        return (
            <>
                <section className="todoapp">
                    <Header setTodoList={this.setTodoList}
                            ifShowDecoration={this.showDecoration()}
                            todos={this.state.todos}
                            clearAllCompletes={this.clearAllCompletes}
                            selAllTasksAsCompleted={this.selAllTasksAsCompleted}
                    />
                    {this.showDecoration() && <TodoList
                        todos={this.state.todos}
                        setCompletes={this.setCompletes}
                        deleteTodo={this.deleteTodo}
                        changeCompleteStatus={this.changeCompleteStatus}
                        filterTypes={this.state.filterTypes}
                    />}
                    {this.showDecoration() && <Footer showContent={this.showContent}
                                                      leftItemsCount={this.state.todos.filter(todo => !todo.isComplete).length}
                                                      clearComplete={this.clearComplete}
                                                      filterTypes={this.state.filterTypes}
                                                      anyComplete={this.state.todos.filter(todo => todo.isComplete).length > 0}
                    />}
                </section>
                <Description/>
            </>
        );
    }

}

export default Todo;
