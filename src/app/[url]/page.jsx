import CardProduct from "@/components/CardProduct";
import Header from "@/components/Header";
import Sortby from "@/components/Sortby";
import Moshavere from "@/components/Moshavere";
import PriceRange from "@/components/PriceBox";
import ResualtCat from "@/components/ResualtCat";
import Api from '@/utils/api'

async function ProductShop({ params }) {
  // var res;
  // const res = await fetch(`${Api}/products/${params.url}`, {
  //   cache: "no-cache",
  // });
  // const data = await res.json();
  // const { product = data.data, category } = data;
  var res; // 1
  await fetch(`${Api}/products/${params.url}`)
  .then(function (response) {
      res = response.clone(); // 2
      return response.json();
  })
  .then(function (data) {
      // Do something with data
  }, function (rejectionReason) { // 3
      console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
      responseClone.text() // 5
      .then(function (bodyText) {
          console.log('Received the following instead of valid JSON:', bodyText); // 6
      });
  });
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
