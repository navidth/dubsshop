import CardProduct from "@/components/CardProduct";
import Header from "@/components/Header";
import Moshavere from "@/components/Moshavere";
import PriceRange from "@/components/PriceBox";
import ResualtCat from "@/components/ResualtCat";
import Sortby from "@/components/Sortby";
import Api from '@/utils/api'

async function PageItemsMenu({ params }) {
  const res = await fetch(
    `${Api}/api/products/${params.url}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  const { product = data.data, category } = data;

  const subitems = category.subitems.find(
    (items) => items.urlItems === params.urlItems
  );

  return (
    <main className="mt-5 d-flex justify-content-center container-lg">
      <section className="article me-3 w3-animate-right">
        <Moshavere />
        <ResualtCat
          pageFatherUrl={category.url}
          pageFather={category.name}
          items={category.subitems}
        />

        <PriceRange />
      </section>
      <section className="card-prudoct me-sm-5 me-0 rounded mb-5">
        <Header pageFather={category.name} pageChild={subitems.name} />
        <Sortby />
        <CardProduct params={params} data={product} />
      </section>
    </main>
  );
}

export default PageItemsMenu;
