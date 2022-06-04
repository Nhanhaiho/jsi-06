import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
// import TodoComponent from './components/TodoComponents';
// import Login from './components/Login'
import DemoNextUi  from './components/DemoNextUi';
export default function App() {
//   const [isLogin, setIsLogin] = useState(false)

// const OnClickHandler = () => {
// setIsLogin(!isLogin)
// }
  
  return (
    <div className="app">
    {/* {isLogin === true ? <TodoComponent /> : <Login />}
      <button onClick={OnClickHandler}>
        {isLogin === true ? "Logout button": "Login button" }
      </button> */}
      <DemoNextUi/>
  </div>
  )
}
   


