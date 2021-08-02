import React, {useState} from "react";


const TodoItems = ({todo, todos, handleComplete, deleteTodo}) => {
    const [
        checkboxBackground
    ] = useState('url(\'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E\')')

    const [
        checkboxUncheckedBackground
    ] = useState('url(\'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E\')')


    return (
        <>
            {
                < li key={todo.id} className={(todo.complete) ? 'completed' : 'none'}>
                    < div className='view'>
                        <input className='toggle' type='checkbox'
                               onChange={(e) => handleComplete(todo, e, todos)}/>
                        <label
                            style={{backgroundImage: (todo.complete) ? checkboxBackground : checkboxUncheckedBackground}}>
                            {todo.name}
                        </label>
                        <button className='destroy' onClick={() => deleteTodo(todo.id)}/>
                    </div>
                </li>
            }
        </>
    )
}

export default TodoItems
// currentContent === 'All' ?
//     todos &&
//     todos.map(todo =>
//         < li key={todo.id} className={(todo.complete) ? 'completed' : 'none'}>
//             < div className='view'>
//                 <input className='toggle' type='checkbox'
//                        onChange={(e) => this.handleComplete(todo, e, todos)}/>
//                 <label
//                     style={{backgroundImage: (todo.complete) ? this.state.checkboxBackground : this.state.checkboxUncheckedBackground}}>
//                     {todo.name}
//                 </label>
//                 <button className='destroy' onClick={() => this.props.deleteTodo(todo.id)}/>
//             </div>
//         </li>