// Crie um array  com 5 nomes de itens de harware. 
// Adicione um novo item ao final da lista utilizando metodo push()
// remova o primeiro da lista com shift

const hardware = ["Monitor", "Fonte", "Placa-mãe","CPU", "GPU"];
console.log(hardware[0]);
console.log(hardware[1]);
console.log(hardware[2]);
console.log(hardware[3]);
console.log(hardware[4]);
console.log(hardware);
console.log(hardware.length);

hardware.push("placa");
hardware.push(0);

hardware.shift(4);
