import CardProduct from "@/components/CardProduct";
import Header from "@/components/Header";
import Sortby from "@/components/Sortby";
import Moshavere from "@/components/Moshavere";
import PriceRange from "@/components/PriceBox";
import ResualtCat from "@/components/ResualtCat";
import Api from '@/utils/api'

async function ProductShop({ params }) {
  const res = await fetch(`${Api}/api/products/${params.url}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  const { product = data.data, category } = data;

  return (
    <main className="mt-5 d-flex mx-5">
      <section className="article me-3">
        <Moshavere />
        <ResualtCat
          pageFatherUrl={category?.url}
          pageFather={category?.name}
          items={category?.subitems}
        />
        <PriceRange />
      </section>
      <section className="card-prudoct me-sm-5 me-0 rounded mb-5">
        <Header pageFather={category?.name} pageChild={category?.name} />
        <Sortby />
        <CardProduct params={params} data={product} />
      </section>
    </main>
  );
}

export default ProductShop;
