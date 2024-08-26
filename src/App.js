import logo from "./logo.svg";
import "./App.css";
import MoviesGrid from "./Components/MoviesGrid";
import Watchlist from "./Components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import { useState, useEffect } from "react";

function App() {
  console.log("App component rendered");
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    console.log("Fetching movies data...");
    fetch("movies.json")
      .then((response) => response.json())

      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    console.log("Toggling watchlist for movie ID:", movieId);
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <Header></Header>
      <header className="App-header"></header>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <MoviesGrid
                movies={movies}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
              />
            }
          ></Route>
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
