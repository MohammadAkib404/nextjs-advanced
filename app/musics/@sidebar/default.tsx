import Home from "@/app/page";
import { Clock, TrendingUp } from "lucide-react";

export default function Default() {
  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen ">
      <section>
        <h2 className="text-xl font-bold">MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Home /> Discover
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <TrendingUp /> Trending
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Clock /> Recent
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2 className="mt-6 text-xl font-bold">FAVORITE</h2>
        <ul className="mt-2 mb-8 gap-4">
            {[1,2,3,4,5].map(i => (
                <div key={i} className="flex mt-8 gap-4">
                    <img className="w-15 h-15 rounded-full" src="./image-1.png" alt="music-image" />
                    <div>
                        <p className="text-white">Random</p>
                        <p className="text-sm text-gray-400">Person </p>
                    </div>
                </div>
            ))}
        </ul>
      </section>
    </aside>
  )
}