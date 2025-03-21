let selecaoPersonagem = document.querySelectorAll(".selecao-personagem")

function addPersonagem(nome,img) {
    let personagem = document.createElement("div")
    personagem.classList.add("personagem")
    personagem.innerHTML = `
        <button onclick="escolherPersonagem(${nome})">
        <img class="personagem-imagem" src="assets/personagens/menu/${img}.png">
    `;
    return personagem;
}
for (let element of selecaoPersonagem) {
    element.appendChild(addPersonagem("Goku","goku"));
}