import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Basket = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-xl font-bold">
            TOTAL PRICE: <span className="font-bold ml-2">{totalAmount} $</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center font-bold text-2xl">
          Your cart is empty.
        </div>
      )}
    </div>
  );
};

export default Basket;
