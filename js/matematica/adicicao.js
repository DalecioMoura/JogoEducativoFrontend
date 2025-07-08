import { selecionarPergunta } from "./selecionarPerguntas.js";

export function somar(){
    
    console.log("somar")
    let n1 = Math.floor(Math.random()*10000)+1;
    let n2 = Math.floor(Math.random()*10000)+1;
    console.log(`Resposta: ${n2}`);

    selecionarPergunta(`${n1} + ${n2}`, (n1 + n2));
}