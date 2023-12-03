import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 w-full fixed top-0 left-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="text-white font-bold text-lg">Shopify</div>
          </Link>
          <div className=" flex justify-center items-center gap-5">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
            <div className=" flex gap-2 items-center">
              <button className=" flex justify-center items-center gap-2 text-[#1F2937] bg-white px-2 py-1 rounded border hover:text-white hover:bg-[#1F2937]">
                <FaShoppingCart />
                <p>10</p>
              </button>
              <Link to={"/fav"}>
                <button className=" flex justify-center items-center gap-2 text-red-500 bg-white px-2 py-1 rounded border hover:text-white hover:bg-[#1F2937]">
                  <FaHeart />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
