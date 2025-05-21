import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/TodoListSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        todoList: todoReducer,
        userInfo: userReducer,
    },
});

export default store;