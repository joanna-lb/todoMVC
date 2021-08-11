import React, {useEffect} from "react";
import {connect} from "react-redux";
import TodoItems from "./TodoItems";
import {FILTERS_TYPES} from "../../utils/constants";
import {setTodoList} from "../../redux/action";
import {fetchTodoList} from "../../shared";



const TodoList = ({todos, filterType,setTodoList}) => {

  useEffect( async ()=>{
     await fetchTodoList().then(res=>setTodoList(res.data))

  },[])

    return (
        <section className='main'>
            <ul className="todo-list">
                {filterType === FILTERS_TYPES.All &&
                todos.map(todo =>
                    <TodoItems todo={todo} todos={todos}
                               key={todo.id}
                    />
                )}

                {filterType === FILTERS_TYPES.Completed &&
                todos.filter(todo => todo.isComplete).map((todo) =>
                    <TodoItems todo={todo} todos={todos}
                               key={todo.id}
                    />
                )}

                {filterType === FILTERS_TYPES.Active && todos.filter(todo => !todo.isComplete).map((todo) => (
                    <TodoItems todo={todo} todos={todos}
                               key={todo.id}
                    />
                ))
                }
            </ul>
        </section>)


}


export default connect(
    state => ({
        todos: state.todos,
        filterType: state.filterType
    }),{setTodoList}
)(TodoList);