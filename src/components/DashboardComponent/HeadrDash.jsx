import React from "react";
import { BiSolidChevronLeft } from "react-icons/bi";

function HeadrDash() {
  return (
    <div className="container-sm">
      <div className="opacity-75 fw-700 d-flex  f-mini">
        <p className="text-decoration-none text-body">خانه</p>
        <BiSolidChevronLeft
          size={"20px"}
          className="mx-2 icon-mini"
        ></BiSolidChevronLeft>
        <p className="text-decoration-none text-body">پنل کاربری</p>
      </div>
      <hr className="m-0" />

    </div>
  );
}
export default HeadrDash;
