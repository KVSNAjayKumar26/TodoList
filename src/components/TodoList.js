import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    console.log(todos);

   
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto'}}>
        <h2>Todo List</h2>
        <TodoForm />  {/* Add TodoForm at the top */}
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {todos?.map((todo) => (
               <TodoItem
               key={todo.id}
               id={todo.id}
               text={todo.text}
               isEditing={todo.isEditing}
               />
            ))}
        </ul>
    </div>
  );
};

export default TodoList;