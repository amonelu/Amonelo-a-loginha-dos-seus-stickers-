let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const contador = document.getElementById("contador-carrinho");
    const total = document.getElementById("valor-total");

    if (carrinho.length === 0) {
        lista.innerHTML = "Nenhum item adicionado ainda 💔";
        total.textContent = "0,00";
    } else {
        lista.innerHTML = carrinho.map(item => `<div class="flex justify-between p-2 bg-white/70 rounded-xl">${item.nome} <span>R$ ${item.preco.toFixed(2)}</span></div>`).join("");
        const soma = carrinho.reduce((acc, item) => acc + item.preco, 0);
        total.textContent = soma.toFixed(2);
    }
    contador.textContent = carrinho.length;
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Adicione pelo menos um sticker ao carrinho! 💖");
        return;
    }
    document.getElementById("pagamento-pix").classList.remove("hidden");
    alert("Seu pedido foi preparado! Role a página para ver os dados do Pix 🎀");
}

