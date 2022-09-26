import React, { useState } from "react";
import "./styles.css";

const moviesData = {
  Action: [
    {
      name: "The Dark Knight",
      rating: "9/10",
      description:
        "When the menance known as the Joker wreks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
      name: "Inception ",
      rating: "8.8/10",
      description:
        "The movie is about a futuristic world where the human mind can be intercepted through dream invasion. A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    },
    {
      name: "Iron Man",
      rating: "7.9/10",
      description:
        "It is a superhero based film by Marvel Studio. After being held captive in an Afgan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    },
    {
      name: "Batman Begins  ",
      rating: "8.2/10",
      description:
        "Batman Begins is a 2005 superhero based film. When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia, where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.",
    },
  ],
  Thriller: [
    {
      name: "Sin City ",
      rating: "8/10",
      description:
        "An exploration of the dark and miserable Basin City and three of its residents, all of whom are caught up in violent corruption.",
    },
    {
      name: " Black Swan ",
      rating: "8/10",
      description:
        "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovosky's Swan Lake.",
    },
  ],
  Biography: [
    {
      name: "Shershaah",
      rating: "8.4/10",
      description:
        "Shershaah is the stroy of PVC awardee Indian soldier Capt. Vikram Batra, whose bravery and unflinching courage in chasing the Pakistani soldier out of Indian territory contributed immensely in India finally winning the Kargil War in 1999.",
    },
    {
      name: "Sardar Udham",
      rating: "8.5/10",
      description:
        "A biopic detailing the 2 decades that Punjabi Sikh revolutionary Udham Singh spent planning the assasination of the man responsible for the Jallianwala Bagh massacre.",
    },
    {
      name: "Major",
      rating: "8.2/10",
      description:
        "Based on the life of Major Sandeep Unnikrishnan, who was martyred in action during the November 2008 Mumbai attacks and was consequenty awarded the Ashoka Chakra, India's highest peacetime gallantry award, on 26 January 2009.",
    },
  ],
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
