import Sidebar from "@/components/Sidebar";
import games from "../data";
import GameCard from "@/components/GameCard";

export default function Games() {
  return (
    <main className="flex text-white w-screen">
      <div className="w-1/7">
        <Sidebar />
      </div>
      <div className="w-6/7 p-10">
        <h1 className="text-6xl font-bold text-center">Feautred Games</h1>
        <div className="flex justify-center gap-10 flex-wrap">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </main>
  );
}
