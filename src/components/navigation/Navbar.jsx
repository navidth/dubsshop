"use client";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, clickAction } from "../redux/MenuSlice";
import Link from "next/link";
import {useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = ({data}) => {

  const toggleMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  const blades = useSelector((state) => state.menu.bladesMenu);
  const bladesHover = useSelector((state) => state.menu.bladesMenuHover);

  const rubbers = useSelector((state) => state.menu.rubbersMenu);
  const rubbersHover = useSelector((state) => state.menu.rubbersMenuHover);

  const table = useSelector((state) => state.menu.tableMenu);
  const tableHover = useSelector((state) => state.menu.tableMenuHover);

  const clothings = useSelector((state) => state.menu.clothingsMenu);
  const clothingsHover = useSelector((state) => state.menu.clothingsMenuHover);

  const dispatch = useDispatch();
  const pathname = usePathname();

  const handlerToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const handleItemsMenu = (fieldName) => {
    dispatch(clickAction(fieldName));
  };
  const handleCancel = (filedName) => {
    dispatch(clickAction((filedName = false)));
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-lg">
        <button
          className="navbar-toggler mt-3"
          type="button"
          onClick={() => {
            dispatch(toggleMenu());
          }}
          aria-controls="navbarText"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div
          className={`collapse navbar-collapse offcanvas offcanvas-end ms-5 w-100 
        ${toggleMenuOpen ? "show" : ""}`}
          id="navbarText"
        >
          <ul className="navbar-nav ul-menu mb-0 ">
            <button
              type="button"
              className="btn d-flex justify-content-end ms-2 mt-2"
              onClick={() => {
                dispatch(toggleMenu());
              }}
            >
              <VscChromeClose
                size={"25px"}
                className="d-block d-lg-none btn-outline-dark"
              ></VscChromeClose>
            </button>
            {/*-------------------------------منو */}
            {data.map((item) => {
              return (
                <li key={item.id} className="nav-item ms-2 dropdown drop">
                  {item.id === "0" && (
                    <div>
                      <Link
                        href={`/${item.url}`}
                        className={`${
                          pathname === "/" ? "active" : "text-block"
                        } nav-link ms-xl-5 ms-2 fw-bold`}
                        onClick={() => {
                          handlerToggleMenu(item.url);
                        }}
                      >
                        {item.name}
                      </Link>
                    </div>
                  )}
                  {/* .............................................................. */}
                  {item.id === "1" && (
                    <div>
                      <Link
                        href={`/${item.url}`}
                        className={`${
                          pathname.startsWith(`/${item.url}`)
                            ? "active"
                            : "text-block"
                        } nav-link ms-xl-5 ms-2 fw-bold`}
                        onClick={() => {
                          handlerToggleMenu();
                        }}
                        onMouseEnter={() => handleItemsMenu("bladesMenuHover")}
                        onMouseLeave={() => handleItemsMenu("bladesMenuHover")}
                      >
                        {item.name}
                      </Link>
                      <button
                        className={`btn d-block d-lg-none  ms-2 ${
                          blades ? "opendrop" : "closedrop"
                        }`}
                        type="button"
                        onClick={() => handleItemsMenu("bladesMenu")}
                        id="btn-menu"
                      >
                        <AiOutlineArrowLeft
                          size={"24px"}
                          color={"black"}
                        ></AiOutlineArrowLeft>
                      </button>
                      <ul
                        className={`dropdown-menu drop-menu ${
                          bladesHover || blades ? "dropdown-blades" : ""
                        }`}
                        onMouseEnter={() => handleItemsMenu("bladesMenuHover")}
                        onMouseLeave={() => handleItemsMenu("bladesMenuHover")}
                        onClick={() => {
                          handlerToggleMenu(Number(item.id));
                        }}
                      >
                        {item.subitems &&
                          item.subitems.map((sub, index) => (
                            <li key={index}>
                              <Link
                                className="dropdown-item drop-item fw-semibold pe-4"
                                href={`/${item.url}/${sub.urlItems}`}
                                onClick={() => {
                                  handleCancel("bladesMenu");
                                }}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                  {/* ........................................................... */}
                  {item.id === "2" && (
                    <div>
                      <Link
                        href={`/${item.url}`}
                        className={`${
                          pathname.startsWith(`/${item.url}`)
                            ? "active"
                            : "text-block"
                        } nav-link ms-xl-5 ms-2 fw-bold`}
                        onClick={() => {
                          handlerToggleMenu();
                        }}
                        onMouseEnter={() => handleItemsMenu("rubbersMenuHover")}
                        onMouseLeave={() => handleItemsMenu("rubbersMenuHover")}
                      >
                        {item.name}
                      </Link>
                      <button
                        className={`btn d-block d-lg-none  ms-2 ${
                          rubbers ? "opendrop" : "closedrop"
                        }`}
                        type="button"
                        onTouchStart={() => handleItemsMenu("rubbersMenu")}
                        id="btn-menu"
                      >
                        <AiOutlineArrowLeft
                          size={"24px"}
                          color={"black"}
                        ></AiOutlineArrowLeft>
                      </button>
                      <ul
                        className={`dropdown-menu drop-menu ${
                          rubbersHover || rubbers ? "dropdown-blades" : ""
                        }`}
                        onMouseLeave={() => handleItemsMenu("rubbersMenuHover")}
                        onMouseEnter={() => handleItemsMenu("rubbersMenuHover")}
                        onClick={() => {
                          handlerToggleMenu(Number(item.id));
                        }}
                      >
                        {item.subitems &&
                          item.subitems.map((sub, index) => (
                            <li key={index}>
                              <Link
                                className="dropdown-item drop-item fw-semibold pe-4"
                                href={`/${item.url}/${sub.urlItems}`}
                                onClick={() => {
                                  handleCancel("rubbersMenu");
                                }}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}

                  {/* .............................................................. */}

                  {item.id === "3" && (
                    <div>
                      <Link
                        href={`/${item.url}`}
                        className={`${
                          pathname.startsWith(`/${item.url}`)
                            ? "active"
                            : "text-block"
                        } nav-link ms-xl-5 ms-2 fw-bold`}
                        onClick={() => {
                          handlerToggleMenu();
                        }}
                        onMouseEnter={() => handleItemsMenu("tableMenuHover")}
                        onMouseLeave={() => handleItemsMenu("tableMenuHover")}
                      >
                        {item.name}
                      </Link>
                      <button
                        className={`btn d-block d-lg-none  ms-2 ${
                          table ? "opendrop" : "closedrop"
                        }`}
                        type="button"
                        onTouchStart={() => handleItemsMenu("tableMenu")}
                        id="btn-menu"
                      >
                        <AiOutlineArrowLeft
                          size={"24px"}
                          color={"black"}
                        ></AiOutlineArrowLeft>
                      </button>
                      <ul
                        className={`dropdown-menu drop-menu ${
                          tableHover || table ? "dropdown-blades" : ""
                        }`}
                        onMouseEnter={() => handleItemsMenu("tableMenuHover")}
                        onMouseLeave={() => handleItemsMenu("tableMenuHover")}
                        onClick={() => {
                          handlerToggleMenu(Number(item.id));
                        }}
                      >
                        {item.subitems &&
                          item.subitems.map((sub, index) => (
                            <li key={index}>
                              <Link
                                className="dropdown-item drop-item fw-semibold pe-4"
                                href={`/${item.url}/${sub.urlItems}`}
                                onClick={() => {
                                  handleCancel("tableMenu");
                                }}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                  {/* ............................................................... */}
                  {item.id === "4" && (
                    <div>
                      <Link
                        href={`/${item.url}`}
                        className={`${
                          pathname.startsWith(`/${item.url}`)
                            ? "active"
                            : "text-block"
                        } nav-link ms-xl-5 ms-2 fw-bold`}
                        onClick={() => {
                          handlerToggleMenu();
                        }}
                        onMouseEnter={() =>
                          handleItemsMenu("clothingsMenuHover")
                        }
                        onMouseLeave={() =>
                          handleItemsMenu("clothingsMenuHover")
                        }
                      >
                        {item.name}
                      </Link>
                      <button
                        className={`btn d-block d-lg-none  ms-2 ${
                          clothings ? "opendrop" : "closedrop"
                        }`}
                        type="button"
                        onTouchStart={() => handleItemsMenu("clothingsMenu")}
                        id="btn-menu"
                      >
                        <AiOutlineArrowLeft
                          size={"24px"}
                          color={"black"}
                        ></AiOutlineArrowLeft>
                      </button>
                      <ul
                        className={`dropdown-menu drop-menu ${
                          clothingsHover || clothings ? "dropdown-blades" : ""
                        }`}
                        onMouseEnter={() =>
                          handleItemsMenu("clothingsMenuHover")
                        }
                        onMouseLeave={() =>
                          handleItemsMenu("clothingsMenuHover")
                        }
                        onClick={() => {
                          handlerToggleMenu(Number(item.id));
                        }}
                      >
                        {item.subitems &&
                          item.subitems.map((sub, index) => (
                            <li key={index}>
                              <Link
                                className="dropdown-item drop-item fw-semibold pe-4"
                                href={`/${item.url}/${sub.urlItems}`}
                                onClick={() => {
                                  handleCancel("clothingsMenu");
                                }}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                  {/* ............................................................... */}

                  {item.id === "5" && (
                    <Link
                      href={`/${item.url}`}
                      className={`${
                        pathname.startsWith(`/${item.url}`)
                          ? "active"
                          : "text-block"
                      } nav-link ms-xl-5 ms-2 fw-bold`}
                      onClick={() => {
                        handlerToggleMenu();
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
