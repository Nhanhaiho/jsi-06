import React from 'react'

const TodoInput = () => {
    const onClickHandler = () => { }
    const onChangeHandler = (event) => {
        console.log(event.target.value);
     }

    return (
        <div>
            <input type="text" onChange={onChangeHandler}></input>
            <button onClick={onClickHandler}>Add</button>
        </div>
    )
}
export default TodoInput;