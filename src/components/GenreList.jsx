export default function GenreList({ genres, currentGenre, onGenreSelect }) {
	return (
		<div>
			<h2>Genres</h2>

			<button
				onClick={() => onGenreSelect(null)}
				style={{ backgroundColor: !currentGenre ? "yellow" : "white" }}
			>
				Show All
			</button>

			{genres.map((genre) => (
				<button
					key={genre.id}
					onClick={() => onGenreSelect(genre.name)}
					style={{ backgroundColor: genre.name === currentGenre ? "yellow" : "white" }}
				>
					{genre.name}
				</button>
			))}
		</div>
	);
}
