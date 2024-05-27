let localProducts = [];  

async function listaProdutos() {
    const conexao = await fetch("https://6644fe03b8925626f890b16d.mockapi.io/alurageek/api/v1/produtos");
    const conexaoConvertida = await conexao.json();

    return [...conexaoConvertida, ...localProducts];
}

function addProduto(nome, preco, imagem) {
    const newProduct = {
        id: Date.now().toString(),
        name: nome,
        preco: preco,
        imagem: imagem
    };

    localProducts.push(newProduct);

    return newProduct;
}

function excluirProduto(id) {
    localProducts = localProducts.filter(product => product.id !== id);

}

export const conectaApi = {
    listaProdutos,
    addProduto,
    excluirProduto
};
