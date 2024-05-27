import { conectaApi } from "./conectaApi.js";

const containerCards = document.querySelector(".cards-container");

function constroiCard(nome, preco, imagem, id) {
    const produto = document.createElement("div");
    produto.className = "card";

    const precoNumber = parseFloat(preco);

    produto.innerHTML = `
    <img class="produto-imagem" src="${imagem}" alt="${nome}">
        <div class="card-container--info">
            <p class="produto-nome">${nome}</p>
        <div class="card-container--value">
            <p class="produto-preco">R$ ${precoNumber.toFixed(2)}</p>
            <img class="excluir-produto" src="img/lixeirinha.svg" alt="Ícone de Exclusão" data-id="${id}">
        </div>
        </div>
    `;

    return produto;
}

export async function listaProdutos() {
    try {
        containerCards.innerHTML = '';  
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => {
            const card = constroiCard(elemento.name, elemento.preco, elemento.imagem, elemento.id);
            containerCards.appendChild(card);
            card.querySelector(".excluir-produto").addEventListener("click", () => {
                conectaApi.excluirProduto(elemento.id);
                containerCards.removeChild(card);
                alert("Produto excluído com sucesso!");
            });
        });
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

listaProdutos();
