import Image from "next/image";
import Link from "next/link";
import Rubbers from "../../public/images/slideshow/slideshow.jpg"
import nexus from "../../public/images/slideshow/81m-8ZkC9EL.jpg"
import blades from "../../public/images/slideshow/3er_Grid_1er_Seite_V2-Ovtcharov_H_lzer.webp"
import kanoy from "../../public/images/slideshow/Hero_Teaser_wide_2545_x_975_Dignics_Series_1.jpg"
import balls from "../../public/images/ABS-HD-3-Balls.jpg.webp"
import shoes from "../../public/images/slideshow/soessgewo.jpg"
import cleaner from "../../public/images/slideshow/cleaner.jpg"
import table from "../../public/images/dcd479810e3d4487995d4e705dd1d6e9.jpg"

export default function Home() {
  return (
    <section className="pageIndex">
      {/* <!-...................- top container -..........-> */}
      <div className="top-container">
        <div className=" slide1 align-items-center d-flex">
          <div className="mx-auto container">
            <div className="d-flex text-light flex-column letter-spacing justify-content-center align-item-flex-start position-absolute text-light pt-5 xxl-my px-2">
              <h1 className="h1 text-top">جدیدترین لباس ها و محصولات </h1>
              <h3 className="h3 text-top-miani"> کالکشن 2023</h3>
              <Link href="/brand" className="btn btn-light shadoow btn-top fw-bold">
                بیشتر
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!--................... main container --..........> */}
      <main className="container">
        <section className="my-5 px-3 px-lg-5">
          <header className="headline d-flex flex-column align-items-center justify-content-center">
            <h1 className="fw-bold letter-spacing">محصولات ما</h1>
            <h5 className="text-secondary letter-spacing">تنوع در انتخاب محصول</h5>
          </header>
        </section>
        {/* <!-....................-slide ..................................--> */}
        <section className="container mt-3">
          <div className=" bg-center bg-cover overflow-hidden w-full mx-auto d-flex">
            <div className="grid grid-rows-3 lg:grid-rows-2 lg:grid-flow-col gap-2 mb-5">
              <div className="position-relative mb-5 mb-lg-1 p-2">
                <picture>
                  <Image
                    src={Rubbers}
                    alt="slideRubbers"
                    className="w-full h-full object-fit-cover rounded-2 shadoow"
                  ></Image>
                </picture>
                <div className="position-absolute right-0 bottom-0 px-2 me-5 letter-spacing ">
                  <h1 className=" shadoww my-1 my-sm-3 fw-700 text-head">
                    {" "}
                    انواع رویه راکت ها
                  </h1>
                  <h4 className="shadoww fw-700 h4 text-head-2">
                    حرفه ای و خوش دست{" "}
                  </h4>
                  <Link
                    href="/rubbers"
                    className="mb-8 btn btn-dark py-2 p-4 letter-spacing shadoow btn-buy "
                  >
                    {" "}
                    بیشتر
                  </Link>
                </div>
              </div>
              {/* <!........................-- slide ..............................................--> */}
              <div className="position-relative mb-5 mb-lg-3 p-3">
                <picture>
                  <Image
                    src={nexus}
                    alt="nexsus"
                    className="w-full h-full object-fit-cover rounded-2 shadoow"
                  ></Image>
                </picture>
                <div className="position-absolute right-0 bottom-0  me-5 px-2 letter-spacing ">
                  <h1 className="shadoww my-1 fw-700 h1 text-head">
                    رویه راکت های جوو
                  </h1>
                  <h5 className="shadoww fw-700  text-head-2">
                    {" "}
                    جدید ترین محصولات جوو
                  </h5>
                  <Link href="/rubbers/gewo" className="mb-8 btn btn-dark py-2 p-4 letter-spacing btn-buy">
                    {" "}
                    بیشتر
                  </Link>
                </div>
              </div>
              {/* <!........................-- slide ..............................................--> */}
              <div className="position-relative p-2">
                <picture>
                  <Image
                    src={blades}
                    className="w-full h-full object-fit-cover bg-center bg-cover h-2full rounded-2 shadoow"
                    alt="blades"
                  ></Image>
                </picture>
                <div className="position-absolute baleds-banner right-0 bottem-0 text-light mx-5 mb-4 letter-spacing ">
                  <h1 className=" shadoww my-1 fw-700 h1 text-head">
                    {" "}
                    انواع چوب راکت
                  </h1>
                  <h4 className=" shadoww fw-700 h4 text-head-2">
                    تخصصی از انواع برند ها
                  </h4>
                  <Link
                    href="/blades"
                    className="mb-8 btn btn-dark py-2 border-2 btn-buy shadoow p-4 letter-spacing"
                  >
                    {" "}
                    بیشتر
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!........................-- slide .......................--> */}
        <section className="container">
          <div className="bg-center bg-cover mx-auto w-full overflow-hidden d-flex mb-5">
            <div className="position-relative">
              <Image
                src={kanoy}
                alt="kanoy"
                className="rounded-2 kanoy shadoow "
              />
              <div className="position-absolute bottom-0 right-0 me-5 px-1">
                <h1 className=" shadoww my-2 h1 text-head">  رویه راکت های باترفلای</h1>
                <h5 className="shadoww  text-head-2">
                  جدید ترین محصولات
                </h5>
                <Link
                  href="/clothings"
                  className="mb-8 btn btn-dark py-2 p-4  letter-spacing border-2 btn-buy shadoow"
                >
                  بیشتر
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mb-5 mt-5">
          <div className="mx-auto bg-center bg-cover">
            <div className="row justify-content-center align-items-center g-4">
              {/* <!........................-- slide ..............................................--> */}
              <div className="col-lg-6 ">
                <div className="position-relative p-3 ">
                  <picture className="object-fit-cover w-full  h-full ">
                    <Image
                      src={balls}
                      alt="balls"
                      className="rounded-2 w-full h-full shadoow"
                    ></Image>
                  </picture>
                  <div className="position-absolute bottom-0 right-0 justify-content-center me-5 text-light px-2">
                    <h1 className=" shadoww my-2 h1 text-head text-dark"> انواع توپ </h1>
                    <h4 className="shadoww h4 text-head-2 text-dark">
                      {" "}
                      حرفه ای و تمرینی{" "}
                    </h4>
                    <Link
                      href="/balls"
                      className="fw-bold shadoow border-2 btn p-4 letter-spacing  mb-8 btn-dark py-2 btn-buy"
                    >
                      بیشتر  
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!........................-- slide ..............................................--> */}
              <div className="col-lg-6">
                <div className="position-relative p-3">
                  <picture className=" object-fit-cover w-full p-1 h-full ">
                    <Image
                      src={shoes}
                      className="rounded-2 w-full h-full shadoow"
                      alt="soessgewo"
                    />
                  </picture>
                  <div className="position-absolute d-flex flex-column right-0 bottom-0 justify-content-center me-5 align-item-flex-start px-2">
                    <h1 className="my-1 shadoww h1 text-head"> انواع کفش </h1>
                    <h4 className="shadoww h4 text-head-2">
                      {" "}
                      اصل و انواع برند ها
                    </h4>
                    <Link
                      href="/clothings/shoes"
                      className="btn btn-dark shadoow border-2 p-4 py-2 mb-8 btn-buy  letter-spacing"
                    >
                      بیشتر{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!........................-- slide ...................--> */}
        <section className="mb-5">
          <div className="mx-auto w-full h-full overflow-hidden mb-8">
            <div className=" row justify-content-center align-items-center g-2">
              {/* <!........................-- slide ..............................................--> */}
              <div className="col-lg-6 position-relative p-4">
                <picture className="object-fit-cover w-full h-full">
                  <Image
                    src={cleaner}
                    alt="cleaner"
                    className="w-full h-full rounded-2 d-block shadoow "
                  ></Image>
                </picture>
                <div className="position-absolute d-flex flex-column right-0 bottom-0 justify-content-center me-5 mb-2 px-2 align-item-flex-start">
                  <h1 className="my-2 shadoww h1 text-head">
                    لوازم جانبی
                  </h1>
                  <h4 className="shadoww h4 text-head-2">
                    تخصصی از انواع برند ها
                  </h4>
                  <Link
                    href="/accessory"
                    className="btn btn-dark shadoow border-2 p-4  letter-spacing py-2 mb-8 btn-buy"
                  >
                    بیشتر{" "}
                  </Link>
                </div>
              </div>
              {/* <!........................-- slide ..............................................--> */}
              <div className="position-relative col-lg-6 p-4">
                <picture className="w-full h-full">
                  <Image
                    src={table}
                    alt="table"
                    className="w-full h-full rounded-2 shadoow d-block"
                  ></Image>
                </picture>
                <div className="position-absolute d-flex flex-column right-0 bottom-0 justify-content-center me-5 mb-2 px-2 align-item-flex-start">
                  <h1 className=" shadoww my-1 h1 text-head">
                    انواع میز پینگ پنگ
                  </h1>
                  <h4 className=" shadoww h4 text-head-2">تخصصی و خانگی </h4>
                  <Link
                    href="/table-ball"
                    className=" border-2 btn shadoow mb-8 btn-dark py-2 p-4 letter-spacing btn-buy"
                  >
                    بیشتر
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
