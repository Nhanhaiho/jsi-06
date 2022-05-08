import React from "react";
import TodoItems from "./TodoItems"
import {todos} from "../constants/mockData"
const TodoList = () => {
    return <div>
        {todos.map(todo => {
                return <TodoItems key={todo.id} todo={todo}/>
        })}
    </div>
}

export default TodoList;