// "use client";
import products from "@/app/product";
import { X } from "lucide-react";
// import { useRouter } from "next/navigation";

export default async function InterceptedRoutes({ params }: { params: { product: string } }) {
  //   const router = useRouter();

  const product = await params;

  const reqProduct = products.find((p) => p.id === +product);

  return (
    <div className="w-full bg-black flex justify-center items-center p-15 gap-10">
      <div key={reqProduct?.id} className="relative w-120 max-h-125 bg-white p-10 h-min flex flex-col gap-10 shadow-md rounded-2xl">
        {/* <X onClick={() => router.push("/ecommerce")} className="absolute right-3 top-3" /> */}
        <img className="" src={reqProduct?.image} alt="product-img" />
        <h3 className="font-semibold text-xl">{reqProduct?.name}</h3>
        <b className="text-2xl font-bold">${reqProduct?.price}</b>
      </div>
    </div>
  );
}
