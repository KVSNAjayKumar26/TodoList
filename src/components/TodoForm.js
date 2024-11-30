import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { todoActions } from '../redux/actions/todoActions';

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            dispatch(todoActions.addTodo(newTodo));
            setNewTodo('');  // Clear the input field after adding
        }
    }
  return (
    <form onSubmit={handleAddTodo} style={{ marginBottom: '20px'}}>
        <input
        type='text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder='Add a new task'
        style={{ marginRight: '10px'}}
        />
        <button type='submit'>Add</button>
    </form>
  );
};

export default TodoForm;