import React, { useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa6";

export const Home1 = ({ onSearch }) => {
    const[movieList, setMovieList] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(search);
      };

    const getMovie = async () => {
        await fetch("https://api.themoviedb.org/3/discover/movie?api_key=094494145d9ff5976cf5781d4a01830d")
        .then((res) => res.json())
        .then((json) => setMovieList(json.results));
    };

    useEffect(() => {
        getMovie();
    },[movieList]);

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => navigateTo("/")}>
            Movielist
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="What do you want to watch?"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="icon" type="submit">
              <FaSistrix className="search-icon" />
              </button>
            </form>
          </div>
          <button className="btn btn-outline-danger me-3">Login</button>
          <button className="btn btn-danger">Register</button>
        </div>
      </nav>

      <div id="carouselExampleInterval" className="carousel slide">
        <div className="carousel-indicators">
            {movieList.slice(6, 9).map((movie, index) => (
          <button
            key={movie.id}
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
          ))}
        </div>
        <div className="carousel-inner">
            {movieList.slice(6, 9).map((movie, index) => (
          <div key={movie.id} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="3000">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              className=" carousel-img"
              alt=""
            />
                          <div className="carousel-caption">
                <h5 className="carousel-title">{movie.original_title}</h5>
                <p>{movie.overview}</p>
                <button className="btn btn-danger">watch trailer</button>
              </div>
          </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
