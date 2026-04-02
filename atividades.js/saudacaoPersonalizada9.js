
console.log("Digite o horário atual");
let horaAtual = 18;

function hora() {

if(horaAtual >= 0, horaAtual <= 11) {
    console.log("Bom dia!");

} else if(horaAtual >= 12, horaAtual <= 17) {
    console.log("Boa tarde!");
} else if(horaAtual > 23){
    console.log("Erro: Digite um horário válido!");

} else {
    console.log("Boa noite!");
}
}

hora()