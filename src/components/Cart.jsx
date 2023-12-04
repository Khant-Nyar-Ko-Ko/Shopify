import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../services/cartSlice";

const Cart = () => {
  const cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const calcTotal = () => {
    const result = cart?.reduce((a,c) => a + c?.price, 0);
    setTotal(result);
  };

  useEffect(() => {
    calcTotal()
  }, [cart])

  return (
    <div className=" mx-[100px] mt-[80px]">
      <div className=" grid grid-cols-3">
        <div className=" col-span-2 ">
          <div className="">
            {cart?.map((c) => (
              <div key={c?.id} className=" mt-5">
                <img src={c?.image} className=" h-[100px]" alt="" />
                <h4>{c?.title}</h4>
                <p>${c?.price}</p>
                <button
                  onClick={() => dispatch(removeFromCart(c))}
                  className=" bg-[#1F2937] text-white px-4 py-1 rounded"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>1
        <div className=" ">
          <h4 className=" text-[#1F2937]">Total Price: </h4>
          <h3 className=" text-[#1F2937]">${total}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart