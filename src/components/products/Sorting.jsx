import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-3 p-3 flex items-center justify-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-gray-300 py-3 px-3"
        name=""
        id=""
      >
        <option disabled value="">
          SELECT
        </option>
        <option value="inc">Increasing</option>
        <option value="dec">Decreasing</option>
      </select>
    </div>
  );
};

export default Sorting;
