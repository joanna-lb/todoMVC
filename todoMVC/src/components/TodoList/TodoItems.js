import React, {useState} from "react";
import './index.css'
import {

    editTodoList,
    deleteTodo,
    changeCompleteStatus,
    setTodoList,
} from '../../redux/action'
import {connect} from "react-redux";
import {deleteTodoAction,  updateTodoAction} from "../../shared";

const TodoItems = ({todo, editTodoList, deleteTodo, changeCompleteStatus}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [name, setName] = useState(todo.name)

    const handleKeyUp = async (e, todo, name) => {
        const reg = new RegExp(/^\s+$/)
        if (e.keyCode === 13 && !reg.test(name) && name.length > 0) {
            await updateTodoAction(todo.id, {name: name})
              await  editTodoList(todo.id, name) ;
                setIsEdit(false)

        } else if (name.length === 0 && e.keyCode === 13) {
            await deleteTodoAction(todo.id)
             await   deleteTodo(todo.id)
                setIsEdit(false)
        }

    }

    const handleComplete =async (todo, e) => {
        if(e.target.checked){
            await updateTodoAction(todo.id, {isComplete:true})
           await changeCompleteStatus(todo.id,true)
        }else {
            await updateTodoAction(todo.id, {isComplete:false})
           await changeCompleteStatus(todo.id,false)
        }
    }

    const handleClickDestroy= async (id) => {
        await deleteTodoAction(id)
         await   deleteTodo(id);
    }

    return (
        <>
            {
                < li key={todo.id} className={(todo.isComplete) ? 'completed' : 'none'}>
                    {!isEdit && < div className='view'>
                        <input className='toggle' type='checkbox'
                               onChange={(e) => handleComplete(todo, e)}
                        />
                        <label
                            className={todo.isComplete ? 'checkbox-checked' : 'checkbox-unchecked'}
                            onDoubleClick={() => setIsEdit(true)}
                        >{name === '' ? todo.name : name}</label>
                        <button className='destroy' data-testid="destroy" onClick={()=>handleClickDestroy(todo.id)}>x</button>
                    </div>}
                    {isEdit && <input className='edit' value={name}
                                      onKeyUp={(e) => handleKeyUp(e, todo, name)}
                                      onChange={(e) => setName(e.target.value)}
                    />}
                </li>
            }
        </>
    )
};

export default connect(
    state => ({
        todos: state.todos,
        filterType: state.filterType
    }),
    {
        editTodoList, deleteTodo, changeCompleteStatus,setTodoList
    }
)(TodoItems)
