interface PokemonCard {
	imgSrc?: string;
	name: string;
}

function PokemonCard({ pokemon }) {
	return (
		<figure>
			{pokemon.imgSrc != null ? (
				<img src={pokemon.imgSrc} alt="Bulbasaur" />
			) : (
				<p>???</p>
			)}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
