import React, { useState } from "react";
import "./styles.css";

const moviesData = {
  Action: [
    { name: "The Dark Knight", rating: "9/10" },
    { name: "Inception ", rating: "8.8/10" },
    { name: "Iron Man  ", rating: "7.9/10" },
    { name: "IBatman Begins  ", rating: "8.2/10" }
  ],

  Romance: [
    {
      name: " Barfi!",
      rating: "8/10"
    },
    {
      name: "Rab Ne Bana Di Jodi ",
      rating: "7.2/10"
    }
  ],
  Thriller: [
    {
      name: "Sin City ",
      rating: "8/10"
    },
    {
      name: " Black Swan ",
      rating: "8/10"
    }
  ]
};
export default function App() {
  const [genre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>
        <span>🎥</span> goodmovies
      </h1>
      <p>Checkout my favourite movies.Select a genre to get started</p>
      <div>
        {Object.keys(moviesData).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {moviesData[genre].map((movie) => (
            <li>
              <div style={{ fontSize: "larger", fontWeight: "bold" }}>
                {movie.name}
              </div>
              <div style={{ fontSize: "small" }}>{movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
