// Criei uma lista (Array) com 10 nomes de nalunos
//escreva um codigo que verifiquye verifique com includes() se o nome "Lana" está na lista
//exiba: "Usuario encontrado no sistema"

const alunos = ["Yoh", "Bibia", "Lana","Bru", "Gio", "Isa", "Carolina", "Aurora", "Elena", "Heloísa"];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
console.log(alunos[4]);
console.log(alunos[5]);
console.log(alunos[6]);
console.log(alunos[7]);
console.log(alunos[8]);
console.log(alunos[9]);
console.log(alunos);
console.log(alunos.length);

if(alunos.includes("Lana")) {
    console.log("o nome Lana está na lista");
} else {
    console.log("o mone Lana não está na lista")

}