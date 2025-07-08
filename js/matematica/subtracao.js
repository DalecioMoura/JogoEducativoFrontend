import { selecionarPergunta } from "./selecionarPerguntas.js";

export function subtrair(){
    
    console.log("subtração")
    let n1 = Math.floor(Math.random()*10000)+1;
    let n2 = Math.floor(Math.random()*10000)+1;

    if(n1 > n2){
        console.log(`Resposta: ${(n1 - n2)}`);
        selecionarPergunta(`${n1} - ${n2}`, (n1 - n2));   
    }
    else{
        console.log(`Resposta: ${(n2 - n1)}`);
        selecionarPergunta(`${n2} - ${n1}`, (n2 - n1));
    }
}