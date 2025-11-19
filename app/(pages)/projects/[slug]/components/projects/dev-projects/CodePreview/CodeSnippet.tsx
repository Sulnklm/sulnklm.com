"use client";
import { FileTree } from "@/components/ui/FileTree/FileTree";
import { CodeBlock } from "@/components/ui/CodeBlock/CodeBlock";
import { Tooltip } from "@/components/ui/Tooltip/Tooltip";

const code = `// Movie details fetching function
const fetchMovieDetails = async () => {
  setLoading(true);
  setError(null); 
  try {
    // Compare this snippet from src/components/home/main/Trending.jsx:
    const movieResponse = await axios.get(\`\${BASE_URL}/movie/\${movieId}\`, {
      params: {
        api_key: API_KEY,
      },
    });

    setMovieDetails(movieResponse.data); // movie details update

    // FavBtn
    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(savedFavorites.includes(movieId));

    // Same Genre Movies
    const genreIds = movieResponse.data.genres.map((genre) => genre.id);
    if (genreIds.length > 0) {
      const relatedResponse = await axios.get(\`\${BASE_URL}/discover/movie\`, {
        params: {
          api_key: API_KEY,
          with_genres: genreIds.join(","), // Join genre IDs with commas
        },
      });

      setRelatedMovies(relatedResponse.data.results); // Update related movies state
    } else {
      setRelatedMovies([]); // If no genres, set related movies to empty array
    }

    // cast
    const castResponse = await axios.get(
      \`\${BASE_URL}/movie/\${movieId}/credits\`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    setCast(castResponse.data.cast); // cast update
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};
...
`;

export default function CodeSnippet() {
  return (
    <div className="grid lg:flex gap-2 w-full">
      <Tooltip message="See more details on GitHub! 👾">
      <div className="h-full">
        <FileTree />
      </div>
      </Tooltip>
      <div className="flex-1 h-[300px] lg:h-[480px] overflow-y-auto border rounded-lg">
        <CodeBlock label="MovieDetails.jsx" language="javascript" code={code} />
      </div>
    </div>
  );
}
