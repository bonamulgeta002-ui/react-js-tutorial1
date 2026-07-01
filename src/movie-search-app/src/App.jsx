import { useState } from "react";

function App() {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async () => {
    if (!movie) return;

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${movie}`
    );

    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    }
  };

  return (
    <div className="container">
      <h1>🎬 Movie Search App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search movie..."
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />

        <button onClick={searchMovie}>Search</button>
      </div>

      <div className="movies">
        {movies.map((item) => (
          <div key={item.imdbID} className="movie-card">
            <img
              src={item.Poster}
              alt={item.Title}
            />

            <h3>{item.Title}</h3>
            <p>{item.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;