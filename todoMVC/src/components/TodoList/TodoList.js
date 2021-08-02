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

    handleCompleteAll = (e) => {
        if (e.target.checked) {
            this.props.setAllCompletes()
        } else if (!e.target.checked) {
            this.props.clearAllCompletes()
        }
    }

    handleComplete = (todo, e) => {
        e.target.checked ? this.props.setCompletes(todo) : this.props.deleteComplete(todo.id)
    }


    render() {
        const {currentContent, todos} = this.props
        return (

            <section className='main'>
                <input id="toggle-all" className="toggle-all" type="checkbox"
                       onChange={(e) => this.handleCompleteAll(e, todos)}/>
                <label htmlFor='toggle-all'>
                </label>
                <ul className="todo-list">
                    {currentContent === FILTERS_TYPES["All"] ?
                        todos &&
                        todos.map(todo =>
                            <TodoItems todo={todo} todos={this.props.todos} handleComplete={this.handleComplete}
                                       key={todo.id} deleteTodo={this.props.deleteTodo}/>
                        )
                        :
                        currentContent === FILTERS_TYPES["Completed"] ?
                            todos.filter(todo => todo.complete).map((todo) =>
                                <TodoItems todo={todo} todos={this.props.todos} handleComplete={this.handleComplete}
                                           key={todo.id} deleteTodo={this.props.deleteTodo}/>
                            )
                            :
                            todos.filter(todo => !todo.complete).map((todo) => (
                                todo.name &&
                                <TodoItems todo={todo} todos={this.props.todos} handleComplete={this.handleComplete}
                                           key={todo.id} deleteTodo={this.props.deleteTodo}/>
                            ))
                    }
                </ul>
            </section>)
    }


}

export default TodoList