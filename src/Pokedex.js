export default class Pokedex{
    
    constructor(arrPokemons, count){
        this.arrPokemons = arrPokemons;
    }
    
    async loadPokemons () {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/'); 
            this.arrPokemons = await res.json();
            console.log(this.arrPokemons);
        } catch (err) {
            console.error(err);
        }
    };
}