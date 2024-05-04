"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const CardProduct = ({ params, data }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  let [products, setProducts] = useState([]);

  useEffect(() => {
      setProducts(data);
  }, [data]);

  let urlItems;
  if (params.url && params.urlItems === undefined) {
    urlItems = data;
  } else if (params.url && params.urlItems) {
    urlItems = data.filter((item) => item.subitems === params.urlItems);
  }

  return (
    <section className="mx-1 g-3 align-items-center  sectionAllProduct">
      {urlItems.map((product) => {
        const truncatedTitle = product.name.substring(0, 20);
        return (
          <div className="collectionProduct mt-4" key={product._id}>
            <Link
              href={`/${product.category}/${
                product.subitems || product.brand
              }/${product.name.replace(/[&:]/g, "").replace(/\s/g, "-")}`}
              className="productcard rounded-3"
            >
              <div className="img-card rounded-2 ">
                <Image
                  width={"180"}
                  height={"190"}
                  src={product.src}
                  className="card-img rounded-2"
                  alt={truncatedTitle}
                />
              </div>
              <div className="my-0 my-xl-4 description-pro">
                <div className="headPRO">
                  <h4 className=" fw-semibold nameProduct  w3-opacity-min">
                    {product.name}
                  </h4>
                </div>
                <div className="PricePRO d-flex flex-wrap justify-content-center">
                  <span className="fw-bolder fs-4 ms-2 mb-0 letter-spacing text-danger">
                    {numberWithCommas(product.price)}
                  </span>
                  <span className=" fs-5">تومان</span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
};
export default CardProduct;
