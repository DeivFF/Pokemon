const search = document.querySelector(".fa-magnifying-glass")
const input = document.querySelector(".srch input")
const container = document.querySelector("#container")
const urlApi = "https://pokeapi.co/api/v2/pokemon/"
let html, pokemon, nomePokemon

async function fetchPokemon(url, name){
    await fetch(url + name)
    .then(response=> response.json())
    .then(data=> pokemon = data)
    .catch(err => console.log(`ERROR ${err}`))
}


function criarHtml(){
    html = `<div class="detalhes">
                <span>Dados sobre pokemon</span>
                <h2>${pokemon.name}</h2>
                <p>ID ${pokemon.id}</p>
                <span>Tipo: ${pokemon.types.map(item => item.type.name).toString()}</span>
            </div>
            <div class="imagem">
                <img src="${pokemon.sprites.front_default}" alt="">
            </div>
            <div class="habilidades">
                <h3>Habilidades</h3>
                <p>${pokemon.abilities.map(item=> " " + item.ability.name)}<p>
            </div>
            <div class="content">
                <img src="${pokemon.sprites.back_default}">
                <img src="${pokemon.sprites.back_shiny}">
                <img src="${pokemon.sprites.front_default}">
                <img src="${pokemon.sprites.front_shiny}">
            </div>`
    return html
}
async function comeca(nomePokemon){
    await fetchPokemon(urlApi,nomePokemon)
    container.innerHTML = criarHtml()
    console.log(pokemon)
}

search.addEventListener("click", event => {
    event.preventDefault();
    nomePokemon = input.value
    comeca(nomePokemon)
})


