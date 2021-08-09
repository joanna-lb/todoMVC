import React, {useState} from "react";
import './index.css'
import {editTodoList, deleteTodo, setCompletes, changeCompleteStatus} from "../../actions";
import {useDispatch} from "react-redux";

const TodoItems = ({todo}) => {

    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = useState(false)
    const [name, setName] = useState(todo.name)

    const handleKeyUp = (e, todo, name) => {
        const reg = new RegExp(/^\s+$/)
        if (e.keyCode === 13 && !reg.test(name) && name.length > 0) {
            editTodoList(dispatch, todo.id, name)
            setIsEdit(false)
        } else if (name.length === 0 && e.keyCode === 13) {
            deleteTodo(dispatch, todo.id)
            setIsEdit(false)
        }
    }

    const handleComplete = (todo, e) => {
        e.target.checked ? setCompletes(dispatch, todo.id) : changeCompleteStatus(dispatch, todo.id)
    }

    return (
        <>
            {
                < li key={todo.id} className={(todo.isComplete) ? 'completed' : 'none'}>
                    {!isEdit && < div className='view'>
                        <input className='toggle' type='checkbox'
                               onChange={(e) => {
                                   handleComplete(todo, e)
                               }}
                        />
                        <label
                            className={todo.isComplete ? 'checkbox-checked' : 'checkbox-unchecked'}
                            onDoubleClick={() => setIsEdit(true)}
                        >{name === '' ? todo.name : name}</label>
                        <button className='destroy' onClick={() => deleteTodo(dispatch, todo.id)}>x</button>
                    </div>}
                    {isEdit && <input className='edit' value={name}
                                      onKeyUp={(e) => handleKeyUp(e, todo, name)}
                                      onChange={(e) => setName(e.target.value)}
                    />}
                </li>
            }
        </>
    )
}

export default TodoItems
