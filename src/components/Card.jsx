/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";

const Card = ({product}) => {
  return (
    <div className=" w-[300px] gap-2 m rounded shadow bg-slate-50 h-auto py-5">
      <div className=" w-[100%] p-2 object-contain h-auto flex justify-center items-center">
        <img src={product?.image} alt={product?.title} className=" h-32" />
      </div>
      <div className=" px-4">
        <h2 className="text-md font-bold mb-2 text-[#1F2937]">
          {product?.title.substring(0, 25)}...
        </h2>
        <p className=" mb-2 text-[#1F2937]">${product?.price}</p>
        <p className="text-sm text-gray-500 mb-4">
          {product?.description.substring(0, 90)}...
        </p>
        <div className=" flex justify-center gap-2 mt-2">
          <button className=" bg-[#1F2937] text-white px-4 py-1 rounded">
            Add To Cart
          </button>
          <button className=" bg-[#1F2937] text-white px-4 py-1 rounded">
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card