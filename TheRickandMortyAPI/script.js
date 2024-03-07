async function fetchCharacters(){
    const page = document.getElementById("pageInput").value || 1;
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`

    try {
        const response = await fetch(apiUrl)
        const data = await response.json();
        displayCharacters(data.results)

    } catch (error) {
        console.error("Erro ao buscar personagem - ", error)
    }
}

function displayCharacters(characters){
    const container = document.getElementById("container");
    container.innerHTML = "";

    characters.forEach(character => {
        const card = document.createElement("div")
        card.className = "card"

        const name = document.createElement("h3")
        name.textContent = character.name;

        const species = document.createElement("p")
        species.textContent = `Specie: ${character.species}`;

        const status = document.createElement("p")
        status.textContent = `Status: ${character.status}`;

        const image = document.createElement("img");
        image.src = character.image;
        image.alt = character.name;
        image.style.width = "200px";

        card.appendChild(name)
        card.appendChild(species)
        card.appendChild(image)
        card.appendChild(status)

        container.appendChild(card)
    })
}

function searchByName(){
    const searchTerm = document.getElementById("nameInput").value.toLowerCase();
    const characters = document.querySelectorAll(".card");
    
    characters.forEach((character) => {
        const characterName = character.querySelector("h3").textContent.toLowerCase();
        if(characterName.includes(searchTerm)){
            character.style.display = "block"
        }else{
            character.style.display = "none"
        }
    })
}
