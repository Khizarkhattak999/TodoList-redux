import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoListActions } from "../store/todoListSlice";
import TodoList from "./TodoList";

const AddTodoForm = () => {
    const [item, setItem] = useState('')

    const dispatch = useDispatch()

    
    const inputhandler = (e) => {
        setItem(e.target.value)
    }
    
    const Addtodo = (e) => {
        e.preventDefault()
        console.log(item)
         dispatch(TodoListActions.savetodo({
             title: item,
         }))

    }

  return (
    <div>
      <div className="input">
        <TextField
          label="Type your Todo"
          variant="outlined"
          fullWidth
          id="fullWidth"
          onChange={inputhandler}
          value={item}
        />
      </div>
      <Button variant="contained" sx={{backgroundColor:'#FF5733', marginTop: 1, marginLeft: 54}} onClick={Addtodo}>Add</Button>

    </div>
  );
};

export default AddTodoForm;
