import AddTodo from './components/AddTodo/AddTodo';
import ShowTodos from './components/ShowTodos/ShowTodos';

function App() {
  return (
    <div className='bg-appColor'>
      <p className='mt-14 mb-7 text-3xl font-bold text-center text-white'>Tasks Manager</p>

      <AddTodo />

      <ShowTodos />

    </div>
  );
}

export default App;
