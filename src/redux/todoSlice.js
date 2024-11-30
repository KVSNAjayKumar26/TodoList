import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, isEditing: false});
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if (todo) {
                todo.text = newText;
                todo.isEditing = false;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        toggleEdit: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) todo.isEditing = !todo.isEditing;
        },
    },
});

export const { addTodo, editTodo, deleteTodo, toggleEdit } = todoSlice.actions;
export default todoSlice;