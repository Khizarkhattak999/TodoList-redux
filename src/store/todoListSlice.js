import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: 'Todo1', completed: false},
    {id: 2, title: 'Todo2', completed: false},
    {id: 3, title: 'Todo3', completed: false},
]

const TodoListSlice = createSlice({
    name: 'TodoListSlice',
    initialState,
    reducers: {
        savetodo: (state, action) => {
            const newtodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            }
            state.push(newtodo)
        },
        togglecomplete: (state, action) => {
           const index = state.findIndex((todo) => (
               todo.id === action.payload.id
           ))
           state[index].completed = action.payload.completed
        },
        deletebtn: (state, action) => {
           return state.filter((todo) => (todo.id !== action.payload.id ))
        }
    }
})


export const TodoListActions = TodoListSlice.actions

export default TodoListSlice.reducer