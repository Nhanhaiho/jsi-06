import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import TodoContainer  from './components/TodoContainer';
function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    
  }
  return <div>
    
    <button type="button" >Subtract</button>
    <header>count</header>
    <button type="button">Add</button>
    {/* <TodoContainer/> */}
  </div>
}

export default App;
