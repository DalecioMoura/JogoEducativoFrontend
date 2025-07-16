import { selecionarPergunta } from "./selecionarPerguntas.js";

export function extrairRaiz(){
    let n1 = Math.floor(Math.random()*100+1);
    let n2 = n1*n1;
    console.log(`Resposta: ${n2}`);
    selecionarPergunta(`\u221A${n2}`, n1);
}

export function extrairRaizCubica(){
    let n1 = Math.floor(Math.random()*100+1);
    let n2 = n1*n1*n1;

    selecionarPergunta(`<sup>${3}</sup>\u221A${n2}`, n1);
}