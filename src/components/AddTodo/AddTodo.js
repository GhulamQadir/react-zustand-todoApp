import './AddTodo.css'
import useTodoStore from '../../store/todoStore';
import { useState } from 'react';

function AddTodo() {
    const [todoValue, setTodoValue] = useState("")

    const addTodo = useTodoStore((state) => state.addTodo)


    return (
        <div className="addTodoDiv">
            <input value={todoValue} onChange={(e) => setTodoValue(e.target.value)} type="text" placeholder="Enter todo" />
            <button onClick={() => addTodo({ todoVal: todoValue, isEdit: false }, setTodoValue)}>Add Todo</button>
        </div>
    )
}
export default AddTodo;