export default function MovieList({ movies, currentGenre }) {
	const filteredMovies = currentGenre ? movies.filter((movie) => movie.genre === currentGenre) : movies;

	if (filteredMovies.length === 0 && currentGenre) {
		return <p>No movies found for this genre!</p>;
	}

	return (
		<div>
			<h2>Movies</h2>

			{filteredMovies.map((movie) => (
				<div key={movie.id}>
					<h3>{movie.title}</h3>
					<p>Genre: {movie.genre}</p>
					<p>Director: {movie.director}</p>
					<p>Year Released: {movie.yearReleased}</p>
				</div>
			))}
		</div>
	);
}
