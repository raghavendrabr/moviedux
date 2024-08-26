import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({
  movies = [],
  watchlist = [],
  toggleWatchlist,
}) {
  console.log("Watchlist component rendered");
  return (
    <div>
      <h1 className="title"> Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.length > 0}
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          console.log("Rendering movie in watchlist:", movie.title);
          return (
            <MovieCard
              key={id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}
