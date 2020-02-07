export default class Pokedex{
    
    constructor(arrPokemons){
        this.arrPokemons = arrPokemons;
        this.count = 1;
        this.promise = [];
    }
    
    async loadPokemons () {
        try {
            while(this.count <= 802){
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.count}`); 
                this.promise = await res.json();
                this.arrPokemons.push({
                    name: this.promise.name
                });
                this.count++;
            }
            
            console.log(this.arrPokemons);
        } catch (err) {
            console.error(err);
        }
    };
}