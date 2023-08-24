import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="w-[468px]">
        <div className="text-xl font-bold">{cart?.title}</div>
      </div>
      <div className="font-bold text-2xl">
        {cart?.price} $ ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 border rounded-full text-white text-lg w-[100px] h-10 cursor-pointer flex items-center justify-center"
      >
        Delete
      </div>
    </div>
  );
};

export default CartComp;
