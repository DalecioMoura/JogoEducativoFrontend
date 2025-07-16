import { selecionarPergunta } from "./selecionarPerguntas.js";

export function elevarPotenciaDeDois(){
    let n1 = Math.floor(Math.random()*100+1);
    let n2 = n1*n1;
    console.log(`Resposta: ${n2}`);
    selecionarPergunta(`(${n1})<sup>${2}</sup>`, n2);
}
export function elevarPotenciaDeTres(){
    let n1 = Math.floor(Math.random()*100+1);
    let n2 = n1*n1*n1;
    console.log(`Resposta: ${n2}`);
    selecionarPergunta(`(${n1})<sup>${3}</sup>`, n2);
}
export function elevarPotenciaDeQuatro(){
    let n1 = Math.floor(Math.random()*100+1);
    let n2 = n1*n1;

    selecionarPergunta(`(${n1})<sup>${2}</sup>`, n2);
}
export function elevarPotenciaDeCinco(){
    let n1 = Math.floor(Math.random()*100+1);
    let n2 = n1*n1;

    selecionarPergunta(`(${n1})<sup>${2}</sup>`, n2);
}