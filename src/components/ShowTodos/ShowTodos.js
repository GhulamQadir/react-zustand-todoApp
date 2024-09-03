import { useEffect, useState } from 'react';
import useTodoStore from '../../store/todoStore';
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";


function ShowTodos() {

    const [updatedVal, setUpdatedVal] = useState()
    const { todos, deleteTodo, editTodo, resetTodoEdits, updateTodo, cancelEdit } = useTodoStore((state) => ({
        todos: state.todos,
        deleteTodo: state.deleteTodo,
        editTodo: state.editTodo,
        resetTodoEdits: state.resetTodoEdits,
        updateTodo: state.updateTodo,
        cancelEdit: state.cancelEdit
    }))
    useEffect(() => {
        resetTodoEdits()
    }, [])

    const handleEdit = async (index) => {
        await resetTodoEdits()
        editTodo(index)
        setUpdatedVal(todos[index].todoVal)
    }


    return (
        <div className='flex flex-col justify-center items-center ml-2 mr-2 mt-3'>
            {todos.length>0 && <div className='w-full sm:w-2/3 md:w-2/4'>
                <p className='m-2 text-white text-2xl font-bold'>Tasks to do - {todos.length}</p>
            </div>}
            {todos && todos.map((todo, index) => {
                return <div key={index} className='w-full sm:w-2/3 md:w-2/4 bg-gray-900 m-2 pt-2 pb-2 pl-3 pr-3'>
                    {todo.isEdit ? <div className='flex items-center'>
                        <div className='w-full'>
                            <input className='rounded-md text-white placeholder:text-white w-full pl-3 pr-2 pt-1 pb-1 bg-transparent border-2 border-inputBorder shadow-sm focus:outline-none focus:border-purple-700 focus:text-white' value={updatedVal} type='text' onChange={(e) => setUpdatedVal(e.target.value)} placeholder="Enter todo" />
                        </div>
                        <div className='flex justify-end'>
                            <button className='text-green-500 text-2xl p-2 m-1' onClick={() => updateTodo(index, updatedVal)}><TiTick /></button>
                            <button className='text-red-500 text-2xl p-2 m-1 ' onClick={() => cancelEdit(index)}><RxCross2 /></button>
                        </div>
                    </div> :
                        <div className='flex items-center'>
                            <div className='w-full'>
                                <p className='text-purple-300'>{todo.todoVal}</p>
                            </div>
                            <div className='flex justify-end'>
                                <button className='text-purple-400 text-xl p-2 m-1' onClick={() => handleEdit(index)}><MdOutlineEdit /></button>
                                <button className='text-purple-400 text-xl p-2 m-1' onClick={() => deleteTodo(index)}><AiOutlineDelete /></button>
                            </div>
                        </div>
                    }
                </div>
            }
            )}
        </div>
    )
}
export default ShowTodos;