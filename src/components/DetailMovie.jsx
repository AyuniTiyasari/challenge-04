import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

export const DetailMovie = () => {
  const [detail, setDetail] = useState("");
  const { id } = useParams();
  const navigateTo = useNavigate();

  useEffect( () => {
     fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=094494145d9ff5976cf5781d4a01830d&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);

  const getGenres = () => {
    return detail.genres
      ? detail.genres.map((genre) => genre.name).join(", ")
      : "";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => navigateTo("/")}>
            Movielist
          </a>
        </div>
      </nav>

      <div className="card text-bg-dark">
        <img
          src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
          className="card-img"
          alt=""
        />
        <div className="card-img-overlay ">
          <h5 className="card-title">{detail.title}</h5>
          <p className="card-text">{getGenres()}</p>
          <p className="card-text">{detail.overview}</p>
          <p className="card-text" style={{ fontStyle: "italic" }}>
            release date : {detail.release_date}
          </p>
          <p className="card-text">
            <FaStar />{" "}
            {detail.vote_average ? detail.vote_average.toFixed(1) : "N/A"}/10
          </p>
          <img className="img-poster" src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}/>
        </div>
      </div>
    </>
  );
};
