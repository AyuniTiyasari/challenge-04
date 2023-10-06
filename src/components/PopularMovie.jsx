import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PopularMovie = ({ searchQuery }) => {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  const getMovie = async () => {
   await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=094494145d9ff5976cf5781d4a01830d"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  const searchMovie = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=094494145d9ff5976cf5781d4a01830d&query=${query}`
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    if (searchQuery) {
      searchMovie(searchQuery);
    } else {
      getMovie();
    }
  }, [searchQuery]);
  return (
    <div>
      <div className="movie-list">
        <h3 className="">
          {searchQuery ? "Search Results" : "Popular Movies"}
        </h3>
        <div className="see-all">
          <button
            type="button"
            className="btn btn-link"
            style={{ color: "red" }}
          >
            See All Movie
          </button>
        </div>
      </div>
      <div className="movie">
        {movieList.map((movie) => (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className="poster"
            key={movie.id}
            onClick={() => navigate(`/detailMovie/${movie.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularMovie