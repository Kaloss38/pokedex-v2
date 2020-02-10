import Pokedex from "./Pokedex";

const searchBar = document.getElementById('searchBar');

const pokemons = [];

const pokedex = new Pokedex(pokemons);

pokedex.loadPokemons();

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = pokemons.filter( 
        character => character.name.toLowerCase().includes(searchString) || character.types.map(type => type).includes(searchString) 
    );
    pokedex.displayPokemons(filteredCharacters);
});


