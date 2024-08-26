import React, { useState } from "react";
import "../styles.css";
import MoviesCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  console.log("MoviesGrid component rendered");
  console.log("start");

  const [searchTerm, setSearchTerm] = useState("");
  console.log("second");
  const [genre, setGenre] = useState("All Generes");
  const [rating, setRating] = useState("All");

  console.log("length:", movies.length);

  const handleSearchChange = (event) => {
    console.log("Search term changed:", event.target.value);
    setSearchTerm(event.target.value);
  };

  const handleGenreChange = (event) => {
    console.log("Search term changed:", event.target.value);
    setGenre(event.target.value);
  };

  const handleRatingChange = (event) => {
    console.log("Search term changed:", event.target.value);
    setRating(event.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) && matchesSearchTerm(movie, searchTerm)
  );

  console.log("Filtered movies:", filteredMovies);

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies...."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option> Action</option>
            <option> Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Bad</option>
            <option>ok</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          ></MoviesCard>
        ))}
      </div>
    </div>
  );
}
