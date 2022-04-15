import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <React.Fragment>
      <h1 className="title">TODO LIST APP</h1>
      <div className="content">
        <AddTodoForm />
        <TodoList />
      </div>
    </React.Fragment>
  );
}

export default App;
