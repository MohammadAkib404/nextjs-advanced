"use client"

import { X } from "lucide-react";
import product from "../../product.js";
import { useRouter } from "next/navigation";

export default function ProductOne() {

  const router = useRouter();

  return (
    <div className="w-full bg-black flex justify-center items-center p-15 gap-10">
      <div key={product[0].id} className="relative w-120 max-h-125 bg-white p-10 h-min flex flex-col gap-10 shadow-md rounded-2xl">
        <X onClick={() => router.push("/ecommerce")} className="absolute right-3 top-3"/>
        <img className="" src={product[0].image} alt="product-img" />
        <h3 className="font-semibold text-xl">{product[0].name}</h3>
        <b className="text-2xl font-bold">${product[0].price}</b>
      </div>
    </div>
  );
}
