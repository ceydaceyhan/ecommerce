import React, { useState } from "react";
import SliderComp from "../components/products/SliderComp";
import Sorting from "../components/products/Sorting";
import Category from "../components/products/Category";
import AllProducts from "../components/products/AllProducts";

const Products = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div className="flex">
        <Category setCategory={setCategory} />
        <AllProducts category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
