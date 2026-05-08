import { Gamepad, LogIn, Settings, Trophy, User } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-[#172030] text-white flex flex-col justify-between w-ful px-4 pt-8 pb-12 h-screen">
      <div className="space-y-10">
        <h3 className="text-[28px] font-semibold mb-10">Game Dashboard</h3>
        <ul className="space-y-6">
          <li className="flex items-center gap-3 font-semibold text-xl text-gray-400">
            <Gamepad size={30} /> Games
          </li>
          <li className="flex items-center gap-3 font-semibold text-xl text-gray-400">
            <User size={30} /> Profile
          </li>
          <li className="flex items-center gap-3 font-semibold text-xl text-gray-400">
            <Trophy size={30} /> Achievements
          </li>
          <li className="flex items-center gap-3 font-semibold text-xl text-gray-400">
            <Settings size={30} /> Settings
          </li>
        </ul>
      </div>
      <div>
        <Link href="/login" className="flex items-center gap-3 font-semibold text-xl text-gray-400">
          <LogIn size={30} /> Login
        </Link>
      </div>
    </aside>
  );
}
