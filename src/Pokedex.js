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
                    name: this.promise.name
                });
                this.count++;
            }
            
            console.log(this.arrPokemons);
            this.displayPokemons(this.arrPokemons);
        } catch (err) {
            console.error(err);
        }
    };

    displayPokemons(){
        const htmlString = this.arrPokemons.map((pokemon) => {
            return `
            <article>
                <p>${pokemon.name}</p>
            </article>
        `;
        })
        .join('');

        this.main.innerHTML = htmlString;
    }
}