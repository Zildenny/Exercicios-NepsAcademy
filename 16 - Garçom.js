// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
let linhas = input.trim().split('\n');
let n = Number(linhas[0]);
let coposQuebrados = 0;

for (let i = 1; i <=n; i++){
    let[latas, copos] = linhas[i].split(' ').map(Number);
    if(latas>copos){
        coposQuebrados+=copos;
    }
}
console.log(coposQuebrados);