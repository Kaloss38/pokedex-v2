export default class Pokedex{
    
    constructor(arrPokemons){
        this.arrPokemons = arrPokemons;
        this.count = 1;
        this.promise = [];
        this.main = document.getElementById('main');
        this.loader = document.getElementById('loader');
    }

    //Load pokemons from Api and display it
    async loadPokemons () {
        try {
            while(this.count <= 802){
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.count}`); 
                this.promise = await res.json();
                this.arrPokemons.push({
                    id: this.promise.id,
                    name: this.promise.name,
                    sprite: this.promise.sprites.front_default,
                    types: this.promise.types.map(type => type.type.name)
                });
                
                this.count++;
            }
            this.displayPokemons(this.arrPokemons);
            } catch (err) {
            console.error(err);
        }
    };

    //receive pokemons array and display pokemon elements on dom
    displayPokemons(arr){
        const htmlString = arr.map(pokemon => 
            `
            <article>
                    <p>#${pokemon.id}</p>
                    <p>${pokemon.name}</p>
                    <span class="types">${pokemon.types.map( type => `<p class="${type}">${type}</p>`).join(" ")}</span>
                    <p><img src="${pokemon.sprite}"></p>
            </article>
        `
        )
        .join('');

        this.main.innerHTML = htmlString;
    }
}