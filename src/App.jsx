import { useState } from "react";
import "./App.css";
import { movies } from "./mock-data/movies.js";
import { genres } from "./mock-data/genres.js";
import GenreList from "./components/GenreList";
import MovieList from "./components/MovieList";

export default function App() {
	const [currentGenre, setCurrentGenre] = useState(null);

	return (
		<div>
			<h1>Movie List</h1>
			<GenreList
				genres={genres}
				currentGenre={currentGenre}
				onGenreSelect={setCurrentGenre}
			/>
			<MovieList
				movies={movies}
				currentGenre={currentGenre}
			/>
		</div>
	);
}
