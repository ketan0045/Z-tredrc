import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todoapp/action';
import { useState } from 'react';


function App() {
  const todos = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();

  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const [editTodo, setEditTodo] = useState('');

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  }
  
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }
    

  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
        cancelUpdate={cancelUpdate} />
      <Todos editFormVisibility={editFormVisibility} handleEditClick={handleEditClick} />

      {todos.length > 1 && (
        <button className='btn btn-danger btn-md delete-all'
          onClick={() => dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;











