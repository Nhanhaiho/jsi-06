import './App.css';
import { sum } from "./math"
import Header from "./Header"
import Navigation from "./Nav"
import Sidebar from "./Sidebar"
import Content from "./Content"
import Footer from "./Footer"
function App() {
  return (
    <div className="App">
    {/* <h1>hello world!</h1>
      <h2>Result ={sum(1, 2)}</h2> */}
      <Header />
      <Navigation />
      <div className="content_sidebar">
        <Sidebar />
        <Content />
      </div>
      <Footer/>
      </div>
  );
}

export default App;
