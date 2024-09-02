import useTodoStore from '../../store/todoStore';
import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";

function AddTodo() {
    const [todoValue, setTodoValue] = useState("")

    const addTodo = useTodoStore((state) => state.addTodo)


    return (
        <div>
            <div className="flex justify-center items-center w-full m-auto p-6">
                <input className='rounded-md placeholder:text-white w-full sm:w-2/3 md:w-2/5 pl-3 pr-2 pt-1 pb-1 bg-transparent border-2 border-inputBorder shadow-sm focus:outline-none focus:border-purple-700 focus:text-white' value={todoValue} onChange={(e) => setTodoValue(e.target.value)} type="text" placeholder="Enter todo" />
                <button className='text-white font-bold text-2xl bg-addBtnBg rounded-md pt-1 pb-1 pl-2 pr-2 ml-2' onClick={() => addTodo({ todoVal: todoValue, isEdit: false }, setTodoValue)}><IoMdAdd /></button>
            </div>
        </div>
    )
}
export default AddTodo;