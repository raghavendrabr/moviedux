import React from "react";
import "../styles.css";

export default function MoviesCard({ movie, isWatchlisted, toggleWatchlist }) {
  console.log("Rendering movie:", movie);

  const getRatingClass = (rating) => {
    if (rating >= 8) return "rating-good";

    if (rating >= 5 && rating < 8) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };

  return (
    <div key={movie.id} className="movie-card">
      <img src={`images/${movie.image}`} alt={movie.title} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-gnre">{movie.genre}</p>
        <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
          {movie.rating}
        </p>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          ></input>
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In WatchList" : "Add  to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
