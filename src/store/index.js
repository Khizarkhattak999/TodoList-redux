import { configureStore } from "@reduxjs/toolkit";
import TodoListSlice from "./todoListSlice";

const store = configureStore({
    reducer: { 
        todolist: TodoListSlice,
    }
})

export default store