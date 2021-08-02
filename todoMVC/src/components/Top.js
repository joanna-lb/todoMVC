import React, {useState} from "react";

const Top = ({setTodoList}) => {
    const [name, setName] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const reg = new RegExp(/^\s+$/)
        if (!reg.test(name) && name.length > 0) {
            setTodoList(name)
        }
        setName("")
    }

    return (
        <header className='header'>
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input className='new-todo'
                       placeholder="What needs to be done?"
                       onChange={(e) => setName(e.target.value)}
                       value={name}/>
            </form>
        </header>
    )
}
export default Top;