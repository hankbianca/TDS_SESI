/*
Atalho comentário de várias linhas:
alt + shift + A

Desafio: Criar uma função que receba preço e desconto em %
e mostre o valor final com desconto.
Criar outra função que receba o preço e quantidade
e mostre o valor total da compra.

*/

function calcularDesconto (preco, desconto) {
     const valorFinal = preco - (preco * (desconto / 100));

    console.log(`o nvalor final do produto foi de: ${ValorFinal}`);
}

calcularDesconto(1000, 5);

function calcularTotal(preco, quantidade) {
    const valorTotal = preco * quantidade;
    console.log(`o valor total é de: ${ValorTotal}`);
}
calcularTotal(100, 12);