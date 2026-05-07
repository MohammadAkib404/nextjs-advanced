import { Clock, Heart, MoreVertical } from "lucide-react";
import Link from "next/link";

const songs = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      time: "3:20",
    },
    {
      id: 2,
      title: "Shape of You",
      artist: "Ed Sheeran",
      time: "4:24",
    },
    {
      id: 3,
      title: "Levitating",
      artist: "Dua Lipa",
      time: "3:23",
    },
    {
      id: 4,
      title: "Believer",
      artist: "Imagine Dragons",
      time: "3:37",
    },
  ];

export default async function SongsList() {

await new Promise((resolve) => 
    setTimeout(() => {resolve("Content is currently loading...")}, 3000)
)

  return (
    <div className="w-[96%] mx-auto px-4 text-white">
      <h2 className="text-3xl text-white mt-8 font-bold mb-6">Songs Collection</h2>
      <ul className="flex flex-col items-center space-y-4">
        {songs.map((s) => (
          <Link key={s.id} href={`/musics/${s.id}`} className="flex justify-between bg-[#171717] px-6 py-4 rounded-xl w-19/20 hover:scale-105 transition-all duration-100">
            <div className="flex gap-5">
                <img className="w-16 h-16 rounded-full" src="./image-2.png" alt="" />
            <div className="space-y-2">
              <h3 className="text-lg font-bold mt-2">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.artist}</p>
            </div>
            </div>
            <div className="flex items-center gap-7 text-gray-400">
                <p className="flex gap-2"><Clock/> {s.time}</p>
                <Heart/>
                <MoreVertical/>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
