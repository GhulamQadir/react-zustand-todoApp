import { useEffect, useState } from 'react';
import useTodoStore from '../../store/todoStore';
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";


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
        <div className='flex flex-col justify-center items-center ml-2 mr-2'>
            <div className='w-full sm:w-1/2 md:w-2/4'>
                <p className='m-2 text-white text-2xl font-bold'>Tasks to do - {todos.length}</p>
            </div>
            {todos && todos.map((todo, index) => {
                return <div key={index} className='w-full sm:w-1/2 md:w-2/4 bg-gray-900 m-2 pt-2 pb-2 pl-3 pr-3'>
                    {todo.isEdit ? <div className='inline-block align-middle'>
                        <input value={updatedVal} type='text' onChange={(e) => setUpdatedVal(e.target.value)} />
                        <button className='bg-slate-50 p-2 m-2' onClick={() => updateTodo(index, updatedVal)}>Update</button>
                        <button className='bg-slate-50 p-2 m-2' onClick={() => cancelEdit(index)}>Cancel</button>
                    </div> : <div className='flex items-center'>
                        <div className='align-middle w-full'>
                            <p className='text-purple-300'>{todo.todoVal}</p>
                        </div>
                        <div className='flex justify-end 2/5'>
                            <button className='text-purple-400 text-xl p-2 m-2 mt-1 mb-1' onClick={() => handleEdit(index)}><MdOutlineEdit /></button>
                            <button className='text-purple-400 text-xl p-2 m-2 mt-1 mb-1' onClick={() => deleteTodo(index)}><AiOutlineDelete /></button>
                        </div>
                    </div>}
                </div>
            }
            )}
        </div>
    )
}
export default ShowTodos;