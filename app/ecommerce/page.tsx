import Link from 'next/link.js';
import product from '../product.js';

export default function Ecommerce() {
  return <div className="w-full p-8 flex gap-10 justify-center">
    {product.map(p => (
        <Link href={`/ecommerce/${p.id}`} key={p.id} className="w-120 p-8 h-min flex flex-col gap-10 shadow-md rounded-2xl">
            <img className='h-80 object-contain' src={p.image} alt="product-img" />
            {/* <div className="flex justify-center items-center text-4xl font-bold w-full h-80 bg-gray-200 rounded-2xl">{p.id}</div> */}
            <h3 className="font-semibold text-xl">{p.name}</h3>
            <b className="text-2xl font-bold">${p.price}</b>
        </Link>
    ))}
  </div>;
}
