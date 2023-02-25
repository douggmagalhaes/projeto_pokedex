const baseUrl = " https://pokeapi.co/api/v2/pokemon";

export async function getAllPokemons() {
  const pokemonsUrl = (id) => `${baseUrl}/${id}`;
  const sizelistPokemons = 250;
  const pokemonsPromises = [];

  for (let i = 1; i <= sizelistPokemons; i++) {
    const pokemon = await fetch(pokemonsUrl(i)).then((response) => {
      return response.json();
    });

    pokemonsPromises.push(pokemon);
  }

  Promise.all(pokemonsPromises);

  return pokemonsPromises;
}

export async function filtersPokemons(pokemonSelect) {
  const pokemons = await getAllPokemons();

  const filterPokemon = pokemons.find((pokemon) => {
    const pokemonSearch = pokemon.name == pokemonSelect;
    return pokemonSearch;
  });

  return filterPokemon;
}
