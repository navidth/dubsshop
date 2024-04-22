import { getCategory} from "@/Data/GetData";
import CardProduct from "@/components/CardProduct";
import Header from "@/components/Header";
import Moshavere from "@/components/Moshavere";
import PriceRange from "@/components/PriceBox";
import ResualtCat from "@/components/ResualtCat";
import Sortby from "@/components/Sortby";
import React from "react";

async function PageItemsMenu({
  params,
}: {
  params: { urlItems: string; url: string };
}) {
  const categoryItems = await getCategory();
  const resualtCat = categoryItems.find((cat) => cat.url === params.url);
  const resualtCatItems = resualtCat?.subitems || [];
  const category: any = resualtCatItems.find(
    (sub) => sub.urlItems === params.urlItems
  );

  return (
    <main className="mt-5 d-flex mx-5">
      <section className="article me-3 w3-animate-right">
        <Moshavere />
        {resualtCat && (
          <ResualtCat
            pageFather={resualtCat.name}
            pageFatherUrl={resualtCat.url}
            names={resualtCat.subitems || []}
          />
        )}
        <PriceRange />
      </section>
      <section className="card-prudoct me-sm-5 me-0 rounded mb-5">
        {resualtCat && (
          <Header pageFather={resualtCat.name} pageChild={category?.name} />
        )}
        <Sortby />
        <CardProduct params={params} />
      </section>
    </main>
  );
}

export default PageItemsMenu;
