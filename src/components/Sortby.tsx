"use client";
import { BiSortDown } from "react-icons/bi";
import { AiFillFilter } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import PriceRange from "./PriceBox";
const Sortby = () => {
  const sort = ["محبوب ترین", "گرانترین", "ارزانترین", "جدید ترین"];
  const [filter, setFilter] = useState(false);
  const [ClickSort, setClickSort] = useState(0);
  const [useComponent, setuseComponent] = useState(false);

  function handleFilter() {
    setuseComponent(!useComponent);
  }

  function filterDropdown() {
    setFilter(!filter);
  }

  function OnClickSortby(index: any) {
    setClickSort(index);
  }

  return (
    <div className="filter">
      {/* desktop---------filter */}
      <div className="mt-4 rounded p-2 align-items-center container-md d-md-flex d-none desktop-filter flex-wrap">
        <label className="font-size-small me-2 mb-1">
          {" "}
          مرتب سازی بر اساس :{" "}
        </label>
        <div className="d-flex flex-wrap">
          {sort.map((itemSort, index) => (
            <button
              type="button"
              className={`btn-sort-by border border-2 rounded-2 mx-3 py-2 px-3 fw-bold ${
                ClickSort === index ? "text-bg-dark fw-bold" : ""
              } `}
              onClick={() => OnClickSortby(index)}
              key={index}
            >
              {itemSort}
            </button>
          ))}
        </div>
      </div>
      {/* mobile ---------------filter----- */}
      <div className=" mobile-fliter mt-4 bg-light rounded p-2  align-items-center d-md-none d-flex">
        <div className="sort position-relative">
          <BiSortDown className="button-sort" size={"25px"}></BiSortDown>
          <select className="bg-light border-0">
            {sort.map((item, index)=>(
             <option key={index}  value={index+1}> {item}</option>
            ))}
          </select>
        </div>

        <div className="category-resualt d-md-none d-block">
          <button className="btn button-filter" onClick={handleFilter}>
            {" "}
            <label htmlFor="button-filter">فیلتر</label>
            <AiFillFilter size={"25px"}></AiFillFilter>
          </button>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center ms-2">
        {useComponent && <PriceRange></PriceRange>}
      </div>
    </div>
  );
};
export default Sortby;
