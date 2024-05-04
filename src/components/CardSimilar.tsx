import Image from "next/image";
import Link from "next/link";

function CardSimilar({ similar }: { similar: any }) {
  let data = similar.map((i:any)=>i.name)
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="similar-products bg-light rounded-4 mb-3 mt-5">
      <section className="header-similar px-3 py-2">
        <h3>محصولات مشابه </h3>
      </section>
      <div className="px-3 pt-4">
        <ul className="list-similar-product">
          {similar.map((item: any) => {
            return (
              <li key={item._id} className="list-group-item mb-3">
                <div className="product-similar border rounded-3 bg-white">
                  <div className="img-similar mx-auto mb-3 border-0 pb-1 border-bottom">
                    <Image
                      src={item.src}
                      className="card-img-top"
                      alt={item.name}
                      width={150}
                      height={150}
                    />
                  </div>

                  <div className="title-prodcuts-similar">
                    <p className="fw-700 text-center"> {item.name} </p>
                  </div>

                  <div className="price-prodcuts-similar">
                    <span className="mx-2 fs-5 fw-bold my-2">{item.price}</span>
                    <span>تومان</span>
                  </div>

                  <div className="link-product-similar w-75 mx-auto">
                    <Link
                      href={`/${item.category}/${
                        item.subitems || item.brand
                      }/${item.name.replace(/[&:]/g, "").replace(/\s/g, "-")}`}
                      onClick={handleScrollToTop}
                      className="btn btn-danger py-2 mt-2 mx-auto d-block"
                    >
                      مشاهده
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CardSimilar;
