import {Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Fav from "./components/Fav";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App