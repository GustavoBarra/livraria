/*
JavaScript é executado diretamente no navegador do usuário e reage a eventos,
como o clique no botão. Neste projeto, ele atualiza a interface sem recarregar
a página, enquanto o HTML define a estrutura e o CSS define a apresentação.
*/

const botao = document.getElementById("btn-adicionar");
const carrinho = document.getElementById("carrinho");
const contador = document.getElementById("contador");

let quantidade = 0;

function adicionarAoCarrinho() {
    const novoItem = document.createElement("li");
    const tituloDoLivro = document.querySelector(".informacoes-livro h1").textContent;

    novoItem.textContent = "1x " + tituloDoLivro;
    carrinho.appendChild(novoItem);

    quantidade++;
    contador.textContent = quantidade;
}

botao.addEventListener("click", adicionarAoCarrinho);
