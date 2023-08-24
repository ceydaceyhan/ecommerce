import React from "react";
import LeftNavbar from "./navbaritems/LeftNavbar";
import RightNavbar from "./navbaritems/RightNavbar";
export const Navbar = () => {
  return (
    <div className="flex items-center justify-between border p-3 rounded-full bg-gray-300 my-5">
      <LeftNavbar />
      <RightNavbar />
    </div>
  );
};

export default Navbar;
