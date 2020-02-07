export default class Pokedex{
    
    constructor(arrPokemons){
        this.arrPokemons = arrPokemons;
        this.count = 0;
    }
    
    async loadPokemons () {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/1'); 
            this.arrPokemons = await res.json();
            console.log(this.arrPokemons);
        } catch (err) {
            console.error(err);
        }
    };
}