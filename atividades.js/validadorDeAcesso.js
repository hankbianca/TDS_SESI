var temIdade = 15;
var temConvite = true;

if(temIdade >= 18 && temConvite){
let resultadoAND = "você pode entrar no evento VIP ";
resultadoAND += temIdade && temConvite;
console.log(resultadoAND);

} else {
    let resultadoAND = "Você não pode entrar";
    console.log(resultadoAND);
}