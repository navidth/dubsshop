"use client";
import Link from "next/link";
import { MdExpandMore } from "react-icons/md";
import { Category, Products } from "../app/lib/interface/type";
import { usePathname } from "next/navigation";

function ResualtCat({
  pageFather,
  pageFatherUrl,
  names,
}: {
  pageFather: string;
  pageFatherUrl: string;
  names: any[];
}) {
  return (
    <div className="card  mt-4 border-0">
      <div className="">
        <h5 className="text-end my-3 fw-bold card-header-tab border-0 border-bottom">
          {" "}
          دسته بندی نتایج
        </h5>
      </div>

      <div className="d-flex flex-column card-body border-muted">
        <div className="d-flex ">
          <Link href={`/${pageFatherUrl}`}>
            <MdExpandMore className="text-muted" size={"22px"} />
            <span className="text-decoration-none  fw-bold">
              {pageFather}
            </span>
          </Link>
        </div>
        <div className="d-flex flex-column me-4  mt-2">
          {names.map((name, index) => {
            return (
              <li className="list-group-item" key={index}>
                <Link
                  href={`/${pageFatherUrl}/${name.urlItems}`}
                  className={` item-result  mb-1`}
                >
                  {name.name}
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ResualtCat;
