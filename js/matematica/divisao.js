import { selecionarPergunta } from "./selecionarPerguntas.js";

export function dividir(serie=1, nivel=1){
    
    console.log("divisão")
    let quociente = Math.floor(Math.random()*10000)+1;
    let divisor = Math.floor(Math.random()*100)+2;
    let dividendo = quociente*divisor;
    console.log(`Resposta: ${quociente}`)
    selecionarPergunta(`${dividendo} : ${divisor}`, quociente);
}