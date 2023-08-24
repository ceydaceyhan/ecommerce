import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: product?.id,
        title: product?.title,
        image: product?.image,
        price: product?.price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="image-container w-[320px] p-3 mb-5 mx-5 border-rounded-md relative cursor-pointer">
      <div className="text-2xl font-bold absolute rounded-md px-2 m-2 bg-gray-200 text-black p-2 m-1">
        {product?.price} <span className="text-sm">$</span>
      </div>
      <img
        className="w-[250px] h-[250px] object-cover m-auto"
        src={product?.image}
        alt=""
      />
      <div className="overlay d-flex align-items-center justify-content-center"></div>
      <div className="text-center px-3 m-3 font-bold text-xl">
        {product?.title}
      </div>
      <div className="flex items-center gap-5 my-4">
        <div onClick={decrement} className="text-xl cursor-pointer">
          -
        </div>
        <input
          className="w-10 text-center text-xl font-bold"
          type="text"
          value={quantity}
        />
        <div onClick={increment} className="text-xl cursor-pointer">
          +
        </div>
      </div>
      <div
        onClick={addBasket}
        className="my-4 border w-100 h-10 rounded-full bg-gray-300 cursor-pointer flex items-center justify-center"
      >
        Add To Cart
      </div>
    </div>
  );
};

export default Product;
