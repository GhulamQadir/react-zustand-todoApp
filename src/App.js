import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import useTodoStore from './store/todoStore';

function App() {

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
    <>
      <AddTodo />

      {todos && todos.map((todo, index) => {
        return <div key={index} className='todoDiv'>
          {todo.isEdit ? <div>
            <input value={updatedVal} type='text' onChange={(e) => setUpdatedVal(e.target.value)} />
            <button onClick={() => updateTodo(index, updatedVal)}>Update</button>
            <button onClick={() => cancelEdit(index)}>Cancel</button>
          </div> : <div><p style={{ color: "white" }}>{todo.todoVal}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button></div>}
        </div>
      }
      )}

    </>
  );
}

export default App;
