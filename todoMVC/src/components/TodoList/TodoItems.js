import React, {useState} from "react";
import './index.css'

const TodoItems = ({todo, todos, handleComplete, deleteTodo,editTodoList}) => {
    const[isEdit,setIsEdit]=useState(false)
    const[name,setName]=useState('')

    const handleKeyDown=(e,todo)=>{
        if(e.keyCode===13){
            editTodoList(todo.id,name)
            setIsEdit(false)
        }
    }
    return (
        <>
            {
                < li key={todo.id} className={(todo.isComplete) ? 'completed' : 'none'} >
                    { !isEdit &&< div className='view'>
                        <input className='toggle' type='checkbox'
                               id='checkbox'
                               onChange={(e) => handleComplete(todo, e)}
                        />
                        <label
                            htmlFor='checkbox'
                            className={todo.isComplete?'checkboxChecked':'checkboxUnchecked'}
                            onDoubleClick={()=>setIsEdit(true)}
                          >{name===''?todo.name:name}</label>
                        <button className='destroy' onClick={() => deleteTodo(todo.id)}>x</button>
                    </div>}
                    { isEdit && <input className='edit' value={name===''?todo.name:name}
                                      onKeyDown={(e)=>handleKeyDown(e,todo)}
                                      onChange={(e) => setName(e.target.value)}
                    />}
                </li>
            }
        </>
    )
};

export default TodoItems
