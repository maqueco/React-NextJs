import { Link } from "react-router-dom";

export default function AnimeCard({ anime }) {
  return (
    <div className="flex items-center border border-gray-300 rounded-md p-4 mb-4">
      <img
        src={anime.images.jpg.image_url}
        alt={anime.titles[0].title}
        className="w-56 h-auto mr-4"
      />
      <div className="flex flex-col">
        <div className="text-xl font-bold mb-2">{anime.titles[0].title}</div>
        <p className="max-h-60 overflow-hidden text-gray-700 mb-2">{anime.synopsis}</p>
        <Link
          to={anime.url}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          More info
        </Link>
      </div>
    </div>
  );
}
