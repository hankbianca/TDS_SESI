const hardwareLista = ["SSD 1 TB", "RTX 4060", "CPU", "GPU", "Fonte" ];
hardwareLista.push(CPU);

let valorTotal = 100;
let clienteNome = Bianca;
let clienteIdade = 19;
let quantidadeItens = 2;
let possuiCupom = true;

function processarVenda(valorTotal, cupomAtivo, quantidadeItens){
    console.log(valorTotal >= 500 || cupomAtivo == true || valorTotal == valorTotal - (valorTotal * 0.15));
    return valorTotal;
}
if(clienteIdade >= 16){
    console.log(`Venda autorizada para ${nome}`);
} else {
    console.log("Venda bloqueada: idade insuficiente!");
}
console.log("\n");

for (let i = 0; i < 0; i++) {
    console.log(`Item despachado! : ${hardwareLista[2]}`);
}

console.log("\n");
console.log(`Relatório da loja: cliente ${clienteNome} processou um pedido de R$  ${valorTotal}. Itens restantes no estoque: ${quantidadeItens}`);