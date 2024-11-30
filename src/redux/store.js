import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../redux/reducers/todoReducer';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});