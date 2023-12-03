import {Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Fav from "./components/Fav";

const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </div>
  );
}

export default App