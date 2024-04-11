import { useState, useEffect } from "react";
import MangaCard from "../components/MangaCard";
import Spinner from "../assets/spinner.jsx";

export default function Manga() {
  const [mangaData, setMangaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = "https://api.jikan.moe/v4/manga";

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMangaData(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false);
      }
    };

    fetchManga();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {mangaData.map((manga) => (
            <MangaCard key={manga.mal_id} manga={manga} />
          ))}
        </div>
      )}
    </>
  );
}
