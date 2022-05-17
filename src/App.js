import './App.css';
import Products from './product';
import {Routes,Route} from "react-router-dom";
// import ProductDetail from './productDetail';
import MyCart from './mycart';
import Navbar from './navbar';
import Contact from './contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/product" element={<Products />}/>
        <Route path="/cart" element={<MyCart />}></Route>
        <Route path="/contact" element={<Contact />}></Route> 
        {/* <Route path="/productdetail/:id" element={<ProductDetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
