import { conectaApi } from "./conectaApi.js";
import { listaProdutos } from "./mostrarProdutos.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        conectaApi.addProduto(nome, preco, imagem);
        alert('Produto cadastrado com sucesso!');
        limparCampos();
        await listaProdutos();
    } catch (e) {
        alert('Erro ao cadastrar produto. Tente novamente.');
        console.error(e);
    }
}

formulario.addEventListener("submit", criarProduto);

function limparCampos() {
    document.querySelector("[data-nome]").value = "";
    document.querySelector("[data-preco]").value = "";
    document.querySelector("[data-imagem]").value = "";
}

document.querySelector(".limpar").addEventListener("click", limparCampos);
