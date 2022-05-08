import "./App.css";
import Header from "./Header";
import ProductList from "./ProductList";
import LatesTrend from "./LatesTrend";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <LatesTrend />
      <Footer />
    </div>
  );
}

export default App;