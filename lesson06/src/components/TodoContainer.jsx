import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./TodoContainer.css";
const TodoContainer= () => {
    return <div className="TodoContainer">
        <TodoInput />
        <TodoList />
    </div>
        
    

}

export default TodoContainer;