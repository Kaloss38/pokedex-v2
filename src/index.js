import Pokedex from "./Pokedex";

const pokemons = [];

const pokedex = new Pokedex(pokemons);

pokedex.loadPokemons();

console.log(pokemons);