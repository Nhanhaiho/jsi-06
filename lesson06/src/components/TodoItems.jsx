import React from "react";
import "./TodoItems.css"

const TodoItems = (props) => {
     
    return <div className="Todo-Item">
        
        <h3>{props.todo.title}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 delete-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            
</svg>
    </div>
}

export default TodoItems;