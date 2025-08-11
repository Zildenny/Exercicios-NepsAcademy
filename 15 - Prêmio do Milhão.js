// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
let n = parseInt(input.split('\n')[0]);
let dias = new Array(n)
let d = 0 

for(let i = 0 ; i<n; i++){
    dias[i] = parseInt(input.split('\n')[i+1]);
}
for (let i=0; i<n; i++){
    d = d + dias [i];
    if(d>=1000000){
        console.log(i+1);
        break
    }
}