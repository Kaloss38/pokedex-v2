import Pokedex from "./Pokedex";

const searchBar = document.getElementById('searchBar');

const pokemons = [];

const pokedex = new Pokedex(pokemons);

pokedex.loadPokemons();

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    
    const filteredCharacters = pokemons.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString)
        );
    });
    
    pokedex.displayPokemons(filteredCharacters);
});

console.log(pokemons);


