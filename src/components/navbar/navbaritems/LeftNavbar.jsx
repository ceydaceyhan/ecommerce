import React from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  return (
    <div className="flex items-center justify-between gap-5">
      <Link to="/" className="text-2xl">
        Home
      </Link>
      <Link to="/products" className="text-2xl">
        Products
      </Link>
    </div>
  );
};

export default LeftNavbar;
