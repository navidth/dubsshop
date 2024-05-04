"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";

function ResualtCat({pageFather,pageFatherUrl,items,}: {pageFather: string;pageFatherUrl: string; items:[];}) {
  const [itemCategory, setItemCategory]= useState([])
  useEffect(()=>{
    setItemCategory(items)
  },[items])
  return (
    <div className="card mt-4 border-0">
      <div className="">
        <h5 className="text-end my-3 fw-bold card-header-tab border-0 border-bottom">
          {" "}
          دسته بندی ها
        </h5>
      </div>

      <div className="d-flex flex-column card-body  border-muted">
        <div className="d-flex ">
          <Link href={`/${pageFatherUrl}`} className="">
            {itemCategory.length > 1 ? <MdExpandMore className="text-muted" size={"22px"} /> : null}
            <span className="letter-spacing fw-bold">
              {pageFather}
            </span>
          </Link>
        </div>
        <div className="d-flex flex-column me-4  mt-2">
          {itemCategory? items.map((name:any, index) => {
            return (
              <li className="list-group-item" key={index}>
                <Link
                  href={`/${pageFatherUrl}/${name.urlItems}`}
                  className="item-result  mb-1"
                >
                  {name.name}
                </Link>
              </li>
            );
          }): null}
        </div>
      </div>
    </div>
  );
}

export default ResualtCat;
