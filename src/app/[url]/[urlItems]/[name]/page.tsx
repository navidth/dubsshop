import DetailedProduct from "@/components/DetailedProduct";
import "../../../../styles/detailed.css";
import Api from "@/utils/api";

async function page({ params }: { params: { name: any; url: String } }) {
  var similar = await fetch(`${Api}/products/${params.url}`, {
    cache: "no-cache",
  });
  var dataSimilar = await similar.json();
  const { data } = dataSimilar;

  var detailedData = data.find(
    (names: any) =>
      names.name.replace(/[&:]/g, "").replace(/\s/g, "-") ===
      decodeURIComponent(params.name)
  );

  return (
    <DetailedProduct
      detailData={detailedData}
      similarProduct={data}
    ></DetailedProduct>
  );
}

export default page;
