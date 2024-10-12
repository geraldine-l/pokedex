function PokemonCard(props: PokemonCardprops) {
	return (
		<div>
			<figure>
				<img src={props.image} alt={props.lastName} />
			</figure>

			<figcaption>{props.lastName}</figcaption>
		</div>
	);
}

export default PokemonCard;