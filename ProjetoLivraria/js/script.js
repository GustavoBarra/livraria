/*
     * JavaScript é executado diretamente no navegador.
     * Neste projeto, ele reage aos eventos do usuário
     * e atualiza o carrinho sem recarregar a página.
     */

    const botao = document.getElementById("btn-adicionar");
    const carrinho = document.getElementById("carrinho");
    const contador = document.getElementById("contador");
    const formulario = document.getElementById("form-contato");

    let quantidade = 0;

    function adicionarAoCarrinho() {

        const novoItem = document.createElement("li");

        const tituloDoLivro =
            document.querySelector(".informacoes-livro h2").textContent;

        novoItem.textContent = "1x " + tituloDoLivro;

        carrinho.appendChild(novoItem);

        quantidade++;

        contador.textContent = quantidade;
    }

    botao.addEventListener("click", adicionarAoCarrinho);


    /*
     * Impede o formulário de recarregar a página
     * e apresenta uma mensagem simples ao usuário.
     */

    formulario.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const nome = document.getElementById("nome").value;

        alert(
            "Obrigado, " + nome +
            "! Sua mensagem foi enviada com sucesso."
        );

        formulario.reset();

    });
