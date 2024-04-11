import { useState, useEffect } from "react";
import AnimeCard from "../components/AnimeCard";
import Spinner from "../assets/spinner.jsx";

export default function Anime() {
  const [animesData, setAnimesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = "https://api.jikan.moe/v4/anime";

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setAnimesData(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {animesData.map(anime => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      )}
    </>
  );
}