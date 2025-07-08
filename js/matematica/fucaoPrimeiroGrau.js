//import { selecionarPergunta } from "./matematica.js";

export function funcaoPrimeiroGrau(){
    const pol = [-1, 1];
    let n4 = Math.floor(Math.random()*2);
    let n5 = Math.floor(Math.random()*2);
    let n1 = Math.floor(Math.random()*100*pol[Number(n4)]);
    let n2 = Math.floor(Math.random()*100*pol[Number(n5)]);
    let n3 = (0-n2)/n1;

    console.log(n4, n5)

    selecionarPergunta(`y = ${n1}x + ${n2}`, n3);
}