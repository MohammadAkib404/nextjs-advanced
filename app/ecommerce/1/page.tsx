import product from "../../product.js";

export default function ProductOne() {
  return (
    <div className="w-full p-10 flex gap-10">
      <div key={product[0].id} className="w-120 p-8 h-min flex flex-col gap-10 shadow-md rounded-2xl">
        <img src={product[0].image} alt="product-img" />
        <h3 className="font-semibold text-xl">{product[0].name}</h3>
        <b className="text-2xl font-bold">${product[0].price}</b>
      </div>
    </div>
  );
}
