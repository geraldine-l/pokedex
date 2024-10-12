import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
	const Bulbasaure = {
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

		lastName: "Bulbasaure",
	};
	return (
		<>
			<div>
				<PokemonCard lastName={Bulbasaure.lastName} image={Bulbasaure.image} />
			</div>
		</>
	);
}

export default App;