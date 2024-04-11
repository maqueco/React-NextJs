import { Link } from "react-router-dom";

export default function MangaCard({ manga }) {
  return (
    <div className="flex items-center border border-gray-300 rounded-md p-4 mb-4">
      <img
        src={manga.images.jpg.image_url}
        alt={manga.titles[0].title}
        className="w-56 h-auto mr-4"
      />
      <div className="flex flex-col">
        <div className="text-xl font-bold mb-2">{manga.titles[0].title}</div>
        <div className="text-gray-700 mb-2">
          <div>
            <span className="font-bold">Chapters:</span>{" "}
            {manga.chapters}
          </div>
          <div>
            <span className="font-bold">Volumes:</span>{" "}
            {manga.volumes}
          </div>
          <div>
            <span className="font-bold">Status:</span>{" "}
            {manga.status}
          </div>
          <div>
            <span className="font-bold">Score:</span>{" "}
            {manga.score}
          </div>
          <div>
            <span className="font-bold">Genres:</span>{" "}
            {manga.genres.map(genre => genre.name).join(", ")}
          </div>
        </div>
        <div className="max-h-60 overflow-hidden text-gray-700 mb-2">
          {manga.synopsis}
        </div>
        <Link
          to={manga.url}
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