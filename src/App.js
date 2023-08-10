import React from "react";
import { useEffect } from "react";
import "./App.css";
import "./search.svg";

const API_URL = "https://www.omdbapi.com?apikey=22de76cb";

const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  Title: "Thor",
  Type: "movie",
  Year: "2011",
  imdbID: "tt0800369",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Thor");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Spiderman"
          onChange={() => {}}
        />
        <img src="" alt="" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={ movie1.Poster !== 'N/A' ? movie1.Poster : 'http://via.placeholder.com/400'}
              alt={movie1.Title}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;

//  <>
//     <h1>App</h1>
//     <MovieCard />

//   </>
