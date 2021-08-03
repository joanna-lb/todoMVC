import React, {Component} from "react";
import TodoItems from "./TodoItems";
import {FILTERS_TYPES} from "../../utils/constants";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completeAll: false,
        }
    }

    handleComplete = (todo, e) => {
        e.target.checked ? this.props.setCompletes(todo) : this.props.changeCompleteStatus(todo.id)
    }


    render() {
        const {filterTypes, todos} = this.props
        return (

            <section className='main'>
                <ul className="todo-list">
                    {filterTypes === FILTERS_TYPES.All &&
                        todos.map(todo =>
                            <TodoItems todo={todo} todos={this.props.todos} handleComplete={this.handleComplete}
                                       key={todo.id} deleteTodo={this.props.deleteTodo}/>
                        )
                        ||
                        filterTypes === FILTERS_TYPES.Completed &&
                            todos.filter(todo => todo.isComplete).map((todo) =>
                                <TodoItems todo={todo} todos={this.props.todos} handleComplete={this.handleComplete}
                                           key={todo.id} deleteTodo={this.props.deleteTodo}/>
                            )
                            ||
                            todos.filter(todo => !todo.isComplete).map((todo) => (
                                <TodoItems todo={todo} todos={this.props.todos} handleComplete={this.handleComplete}
                                           key={todo.id} deleteTodo={this.props.deleteTodo}/>
                            ))
                    }
                </ul>
            </section>)
    }


}

export default TodoList