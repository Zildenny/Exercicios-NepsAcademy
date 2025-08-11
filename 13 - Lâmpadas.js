// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
let linhas = input.trim().split('\n');
let n = Number(linhas[0]);
let situaçao_lampada = linhas[1].trim().split(' ').map(Number);

let a = 0 ;
let b = 0 ;
for (let i = 0; i <n ; i++){
    if(situaçao_lampada[i] ==1){
        if(a==1){
            a=0;
        }else{
            a=1;
        }
}else if (situaçao_lampada[i]==2){
        if(b==1){
            b=0;
        }else{
            b=1
        }
        if(a==1){
            a=0;
        }else{
            a=1;
        }
}
}
console.log(a);
console.log(b);