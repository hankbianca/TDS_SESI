const produto1 = 100;
const produto2 = 10;
const valorTotal = produto1 + produto2;

let mensagem1 = valorTotal < 100 ? "O valor do carrinho é: " + valorTotal : "O valor do carrinho é: " + (valorTotal - (valorTotal  * 0.10));

console.log(mensagem1)
