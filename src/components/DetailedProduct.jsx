"use client";
import React, { useEffect, useState } from "react";
import { BsBookmark, BsBookmarkFill, BsShare } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { LuPlus, LuMinus } from "react-icons/lu";
import { RiDeleteBin2Fill } from "react-icons/ri";
import ModalImage from "react-modal-image";
import { useDispatch, useSelector } from "react-redux";
import DesceriptionsProduct from "./DesceriptionsProduct";
import CardSimilar from "./CardSimilar";
import {
  addToCart,
  removeToCart,
  setBookMarks,
  removeToBookMarks,
} from "./redux/productSlice";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {sessions} from "@/utils/isLoginIn"

function DetailedProduct({ similarProduct, detailData }) {
  const [isBookMarks, setIsBookmarks] = useState(false);
  const [showQuantity, setShowQuantity] = useState(false);
  const [selectColor, setSelectColor] = useState(0);
  const [selectSize, setSelectSize] = useState(0);
  const [count, setCount] = useState(detailData.count);
  const [available, setAvailable] = useState(true);
  const dispatch = useDispatch();
  const { products, bookMarks } = useSelector((product) => product.products);
  
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    if (detailData.count > 0) {
      setAvailable(true);
    } else {
      setAvailable(false);
    }
    setIsBookmarks(bookMarks.find((item) => item._id === detailData._id));
  }, [detailData.count, detailData._id, bookMarks]);

  const path = usePathname();
  const handleDashbordShare = () => {
    var url = `http://localhost:3000${path}`;
    navigator.clipboard.writeText(url);
    toast.success("با موفقیت انجام شد", {
      position: "bottom-right",
      autoClose: 1000,
    });

  };

  const handleDashbordFavorite = (data) => {
    if (sessions) {
      if (isBookMarks) {
        dispatch(removeToBookMarks(data));
        setIsBookmarks(false);
      } else {
        dispatch(setBookMarks(data));
        setIsBookmarks(true);
        toast.success("با موفقیت انجام شد", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } else {
      toast.error(
        <div className="d-felx align-items-center justify-content-center me-2">
          <p>لطفا وارد حساب کاربری خود شوید</p>
          <Link href="./login" className="btn btn-outline-danger">
            عضویت در سایت
          </Link>
        </div>,
        {
          position: "bottom-right",
          autoClose: 2000,
          style: {
            color: "black",
            fontFamily: "inherit",
          },
        }
      );
    }
  };

  const selectedColor = (index) => {
    setSelectColor(index);
  };
  const selectedSize = (index) => {
    setSelectSize(index);
  };

  const quanterHandler = (e, detailData, op) => {
    setShowQuantity(true);
    const parentElement =
      e.currentTarget.parentElement.parentElement.parentElement.parentElement;

    setCount(count - op);
    const newData = {
      name: parentElement.querySelector(".brandName").innerText,
      id: detailData._id,
      operation: op,
      quantity: Number(parentElement.querySelector(".values").value),
      price: detailData.price,
      image: detailData.src,
      color: detailData.color
        ? selectColor
          ? selectColor
          : detailData.color[0]
        : null,
      size: detailData.size
        ? selectSize
          ? selectSize
          : detailData.size[0]
        : null,
      IsYetInCart: true,
      totalPirce:
        Number(detailData.price) *
        Number(parentElement.querySelector(".values").value),
      count,
    };
    dispatch(addToCart(newData));
  };

  const removeHandler = () => {
    setShowQuantity(false);
    dispatch(
      removeToCart(products.find((product) => product.id === detailData._id))
    );
    setCount(detailData.count);
  };

  return (
    <div className="">
      <ToastContainer />
      <div className="detailed-items my-5 rounded-4">
        <div className="information-product mx-3 bg-light rounded-4">
          {/* modal img */}

          <div className="img-products mt-md-4">
            <div className="img-asli-div">
              <Image
                width={700}
                height={700}
                src={detailData.src}
                alt={detailData.name}
                className="me-md-3 img-asli"
              />
            </div>
            <div className="modal-img my-4 me-3">
              {detailData.images ? (
                detailData.images.map((image, index) => (
                  <ModalImage
                    key={index}
                    small={image}
                    large={image}
                    hideDownload={true}
                    hideZoom={true}
                    showRotate={true}
                    autoFocus={true}
                  />
                ))
              ) : (
                <ModalImage
                  small={detailData.src}
                  large={detailData.src}
                  hideDownload={true}
                  hideZoom={true}
                  showRotate={true}
                  autoFocus={true}
                />
              )}
            </div>
          </div>

          {/* body information products */}
          <div className="body-product mt-3">
            {/* Brand name and name product.............................. */}
            <section>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-700 brandName my-2">{detailData.name}</h4>
                <div className=" d-flex justify-content-center align-items-center">
                  <BsShare
                    id="dashbord-svg"
                    onClick={handleDashbordShare}
                    size={"24px"}
                    className="ms-3"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="کپی لینک محصول"
                    data-tooltip-place="top"
                    style={{ cursor: "pointer" }}
                  />
                  {isBookMarks ? (
                    <BsBookmarkFill
                      size={"24px"}
                      onClick={() => {
                        handleDashbordFavorite(detailData);
                      }}
                      className="ms-5"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="حذف از علاقه مندی ها"
                      data-tooltip-place="top"
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <BsBookmark
                      id="dashbord-svg"
                      size={"24px"}
                      onClick={() => {
                        handleDashbordFavorite(detailData);
                      }}
                      className="ms-5"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="افزودن به علاقه مندی ها"
                      data-tooltip-place="top"
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
              </div>
              {detailData.brand ? (
                <div className="brand">
                  <label htmlFor="brand" className="fw-bold mt-2 ms-2">
                    برند :{" "}
                  </label>
                  <span id="brand" className=" letter-spacing text-muted">
                    {detailData.brand}
                  </span>
                </div>
              ) : null}
            </section>
            {/* information data .............................................. */}
            <section>
              {detailData.detailedItens ? (
                <ul className="mt-3 mx-2 p-0">
                  {detailData.detailedItens.map((detail, index) => (
                    <li className="py-1 detailProduct" key={index}>
                      <div className="inform">
                        <span className="fw-bold letter-spacing">
                          {detail.attr} :{" "}
                        </span>
                        <span
                          className="text-muted px-4"
                          style={{ direction: "ltr" }}
                        >
                          {" "}
                          {detail.value}{" "}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="mt-3 p-0">
                  <li className="py-1 detailProduct">
                    <span className="fw-bold ms-3">برند :</span>
                    {detailData.brand}
                  </li>
                </ul>
              )}
              {count > 0 && detailData.size ? (
                <div className="d-flex align-items-center ">
                  <div className="">
                    <h6 className="fw-bold ms-3">سایز ها: </h6>
                  </div>
                  <div className="d-flex flex-wrap mb-3">
                    {detailData.size.map((size, index) => (
                      <div key={index} className=" mx-1">
                        <button
                          className={`size btn border btn-outline-dark border-2 rounded-3 ${
                            selectSize === size || selectSize === index
                              ? "btn-dark text-white"
                              : ""
                          }`}
                          style={{ width: "auto" }}
                          onClick={() => {
                            selectedSize(size);
                          }}
                        >
                          {size}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>

            {available ? (
              <>
                {/*......................... price nad buy product............................................ */}
                <section className="pb-4">
                  <div className="priceSection d-flex align-items-baseline text-danger">
                    <h1 className="px-2 letter-spacing ms-2 price">
                      {numberWithCommas(detailData.price)}
                    </h1>{" "}
                    <h6 className="letter-spacing">تومان </h6>
                  </div>

                  {showQuantity ? (
                    <ul
                      className={`quantity align-items-center justify-content-end ms-md-4 ms-0 ${
                        showQuantity ? "animationOpcL d-flex" : "d-none"
                      }`}
                    >
                      <li>
                        <button
                          className={`add border-0 border-2 ${
                            count === 0 ? " pointer-events-none" : "d-block"
                          }`}
                          onClick={(e) => quanterHandler(e, detailData, 1)}
                        >
                          <LuPlus size={"25px"} />
                        </button>
                      </li>
                      <li className=" mx-3">
                        <p className=" my-auto fw-bold fs-5">
                          {products.find(
                            (product) => product.id === detailData._id
                          )?.quantity || 0}
                        </p>
                        <input
                          type="text"
                          className="values visually-hidden hidden"
                          value={1}
                        />
                      </li>
                      <li>
                        {" "}
                        <button
                          className={`minus border-0 ${
                            products.find(
                              (product) => product.id === detailData._id
                            )?.IsYetInCart
                              ? ""
                              : "pointer-events-none"
                          }`}
                          onClick={(e) => quanterHandler(e, detailData, -1)}
                        >
                          <LuMinus size={"25px"} />
                        </button>
                      </li>{" "}
                      <li>
                        <RiDeleteBin2Fill
                          size={"29px"}
                          className={`delete text-danger mx-3`}
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="حذف از سبد خرید"
                          onClick={removeHandler}
                        />
                      </li>
                    </ul>
                  ) : (
                    <div
                      className={`button-price mx-lg-5 mx-2 ${
                        showQuantity ? "d-none" : "d-block"
                      }`}
                    >
                      <button
                        className="btn btn-danger rounded-5 p-3"
                        type="button"
                        onClick={(e) => quanterHandler(e, detailData, 0)}
                      >
                        <MdAddShoppingCart size={"24px"}></MdAddShoppingCart>
                        <span className="mx-3">افزودن به سبد خرید</span>
                      </button>
                    </div>
                  )}
                </section>
                {/*...............................color product..........................................  */}
                <section>
                  {detailData.color ? (
                    <div className="d-flex flex-column">
                      <div className="mx-3">
                        <h6 className="fw-bold">رنگ های موجود</h6>
                      </div>
                      <div className="d-flex align-items-center mb-3 mt-1 mx-3">
                        {detailData.color.map((color, index) => (
                          <div key={index} className=" ms-4">
                            <button
                              className={`btn btn-outline-dark shadoow rounded-3 px-3 ${
                                selectColor === color || selectColor === index
                                  ? "btn-dark text-white"
                                  : ""
                              }`}
                              style={{ width: "85px" }}
                              onClick={() => {
                                selectedColor(color);
                              }}
                            >
                              {color}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </section>
              </>
            ) : (
              <div className={`d-flex mt-2 `}>
                <button
                  className={`btn btn-danger rounded-2 mt-4 mx-auto px-5 py-3 disabled `}
                  type="button"
                >
                  <span className="mx-3">ناموجود</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* // desceriptions...........................  */}
        <DesceriptionsProduct data={detailData} />
        {/* Similar Products............................ */}
        <CardSimilar similar={similarProduct} />
      </div>
    </div>
  );
}

export default DetailedProduct;
