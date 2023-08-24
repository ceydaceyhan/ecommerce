import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";

const RightNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div className="flex items-center gap-8">
      <Link to="/favorites">
        <FaHeart size={25} />
      </Link>
      <div onClick={() => navigate("basket")} className="relative">
        <Link to="/basket">
          <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </div>
          <SlBasket size={25} />
        </Link>
      </div>
      <Link to="/login">
        <FiLogIn size={25} />
      </Link>
    </div>
  );
};

export default RightNavbar;
