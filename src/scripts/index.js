import { getAllPokemons, filtersPokemons } from "./requests.js";

const call = await getAllPokemons();
console.log(call);

const callPokemonSearch = await filtersPokemons("bulbasaur");
console.log(callPokemonSearch);
