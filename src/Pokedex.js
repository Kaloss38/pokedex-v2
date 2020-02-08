export default class Pokedex{
    
    constructor(arrPokemons){
        this.arrPokemons = arrPokemons;
        this.count = 1;
        this.promise = [];
        this.main = document.getElementById('main');
    }
    
    async loadPokemons () {
        try {
            while(this.count <= 802){
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.count}`); 
                this.promise = await res.json();
                this.arrPokemons.push({
                    id: this.promise.id,
                    name: this.promise.name,
                    sprite: this.promise.sprites.front_default
                });
                this.count++;
            }

            this.displayPokemons(this.arrPokemons);

        } catch (err) {
            console.error(err);
        }
    };

    displayPokemons(){
        const htmlString = this.arrPokemons.map((pokemon) => {
            return `
            <article>
                    <p>#${pokemon.id}</p>
                    <span>   
                    <p>${pokemon.name}</p>
                    <p>Electric / Vol </p>
                    </span>
                    <p><img src="${pokemon.sprite}"></p>
            </article>
        `;
        })
        .join('');

        this.main.innerHTML = htmlString;
    }
}