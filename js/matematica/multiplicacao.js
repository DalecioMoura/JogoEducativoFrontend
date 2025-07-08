import { selecionarPergunta } from "./selecionarPerguntas.js";

export function multiplicar(){
    
    console.log("multiplicação")
    let n1 = Math.floor(Math.random()*1000)+1;
    let n2 = Math.floor(Math.random()*10)+1;
    console.log(`Resposta: ${(n1 * n2)}`);
    selecionarPergunta(`${n1} x ${n2}`, (n1 * n2));
}