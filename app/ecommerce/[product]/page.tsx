import products from "@/app/product";

export default async function Products({ params }: { params: { product: string } }) {
  const { product } = await params;

  const reqProduct = products.find((p) => p.id === +product);

  return (
    <div className="w-full p-10 flex gap-10">
      <div className="w-120 p-8 h-min flex flex-col gap-10 shadow-md rounded-2xl">
        <img src={reqProduct?.image} alt="product-img" />
        <h3 className="font-semibold text-xl">{reqProduct?.name}</h3>
        <b className="text-2xl font-bold">${reqProduct?.price}</b>
      </div>
    </div>
  );
}
