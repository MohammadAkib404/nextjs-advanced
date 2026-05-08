type GameProps = {
  game: {
    id: number;
    name: string;
    image: string;
  };
};

export default function GamesCard({ game }: GameProps) {
  return (
    <div className="text-white w-120 max-h-120 bg-[#172030] p-10 rounded-2xl space-y-5">
      <img className="w-full max-h-65 object-cover" src={game.image} alt={`game-${game.id}`} />
      <h3 className="text-2xl font-bold">{game.name}</h3>
    </div>
  );
}
