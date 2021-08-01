import React, {Component} from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completeAll: false,
            checkboxBackground: 'url(\'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E\')',
            checkboxUncheckedBackground: 'url(\'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E\')'
        }
    }

    handleCompleteAll = (e, todos) => {
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
        const {todos, currentContent} = this.props
        return (
            <section className='main'>
                <input id="toggle-all" className="toggle-all" type="checkbox"
                       onChange={(e) => this.handleCompleteAll(e, todos)}/>
                <label htmlFor='toggle-all'>
                </label>
                <ul className="todo-list">
                    {currentContent === 'All' ?
                        todos &&
                        todos.map(todo =>
                            < li key={todo.id} className={(todo.complete) ? 'completed' : 'none'}>
                                < div className='view'>
                                    <input className='toggle' type='checkbox'
                                           onChange={(e) => this.handleComplete(todo, e, todos)}/>
                                    <label
                                        style={{backgroundImage: (todo.complete) ? this.state.checkboxBackground : this.state.checkboxUncheckedBackground}}>
                                        {todo.name}
                                    </label>
                                    <button className='destroy' onClick={() => this.props.deleteTodo(todo.id)}/>
                                </div>
                            </li>
                        )
                        :
                        currentContent === 'Complete' ?
                            todos.filter(todo => todo.complete).map((todo) =>
                                < li key={todo.id}
                                     className={this.state.completeAll || todo.complete ? 'completed' : 'none'}>
                                    < div className='view'>
                                        <input className='toggle' type='checkbox'
                                               onChange={(e) => this.handleComplete(todo, e)}/>
                                        <label
                                            style={{backgroundImage: this.state.completeAll || todo.complete ? this.state.checkboxBackground : this.state.checkboxUncheckedBackground}}>
                                            {todo.name}
                                        </label>
                                        <button className='destroy' onClick={() => this.props.deleteTodo(todo.id)}/>
                                    </div>
                                </li>
                            )
                            :
                            todos.filter(todo => !todo.complete).map((todo) => (
                                todo.name &&
                                < li key={todo.id}
                                     className={this.state.completeAll || todo.complete ? 'completed' : 'none'}>
                                    < div className='view'>
                                        <input className='toggle' type='checkbox'
                                               onChange={(e) => this.handleComplete(todo, e)}/>
                                        <label
                                            style={{backgroundImage: this.state.completeAll || todo.complete ? this.state.checkboxBackground : this.state.checkboxUncheckedBackground}}>
                                            {todo.name}
                                        </label>
                                        <button className='destroy' onClick={() => this.props.deleteTodo(todo.id)}/>
                                    </div>
                                </li>
                            ))
                    }
                </ul>
            </section>)
    }


}

export default TodoList