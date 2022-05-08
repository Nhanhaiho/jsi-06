import React from "react";
const TodoInput = () => {
    const hello = () => {
        console.log('hello');
    }
    const handleChange = (event) => {
       
        const value = event.target.value;
        // console.log(value);
        const newTodo = {
            // id: new Data().value(),
            title: value,
            isCompleted: false
        }
        console.log(newTodo);
    }
    return <div>
        <input type="text" placeholder="enter sth" onChange={handleChange}/>
        <button type="button" onClick={hello} >Add</button>
        
    </div>
}

export default TodoInput;