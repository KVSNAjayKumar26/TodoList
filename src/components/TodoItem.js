import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../redux/actions/todoActions';

const TodoItem = ({ id, text, isEditing }) => {
    const dispatch = useDispatch();
    const [editText, setEditText] = useState(text);

    const handleSave = () => {
        if (editText.trim()) {
            dispatch(todoActions.editTodo({ id, newText: editText }));
        }
    };

  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', }}>
        {isEditing ? (
            <>
            <input
            type='text'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{ marginRight: '10px' }}
            />
            <button onClick={handleSave}>Save</button>
            </>
        ) : (
            <>
            <span style={{ marginRight: '10px' }}>{text}</span>
            <button 
            onClick={() => dispatch(todoActions.toggleEdit(id))}
            style={{ marginRight: '5px' }}
            >
                Edit
            </button>
            </>
        )}
        <button onClick={() => dispatch(todoActions.deleteTodo(id))}>Delete</button>
    </li>
  );
};

export default TodoItem;