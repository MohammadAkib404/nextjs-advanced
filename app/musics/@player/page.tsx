import { Pause, Play, SkipBack, SkipForward } from "lucide-react";

export default function Player() {
  return (
    <div className="fixed bottom-0 left-[35%] w-40rem bg-[#171717] p-4 flex items-center justify-center text-white">
        <div className="text-center w-16 h-16 bg-gray-700 rounded-md">Player</div>
        <div className="flex items-center gap-6">
            <SkipBack size={25} className="cursor-pointer hover:text-white transition-colors"/>
            <Play size={25} className="cursor-pointer hover:text-white transition-colors"/>
            <Pause size={25} className="cursor-pointer hover:text-white transition-colors hidden"/>
            <SkipForward size={25} className="cursor-pointer hover:text-white transition-colors mr-4"/>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
            <span>2:21</span>
            <div className="relative w-64 h-1 rounded-md bg-gray-700">
                <div className="w-full absolute top-0 left-0 h-1 bg-white rounded-md" style={{width: "50%"}}>
                    <input type="range" className="w-full absolute top-0 left-0 h-1 bg-transparent cursor-pointer" />
                </div>
            </div>
            <span>3:11</span>
        </div>
    </div>
  )
}