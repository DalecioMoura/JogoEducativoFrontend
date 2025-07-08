import { selecionarPergunta } from "./selecionarPerguntas.js";

export function funcaoSegundoGrau(){
    
    const sinal = ()=>{
        const pol = [-1, 1];
        return pol[Math.floor(Math.random()*2)]
    }

    const gerarNumeroAleatorio = ()=>{
        return Math.floor((Math.random()*10));
    }

    let a = (gerarNumeroAleatorio()+1)*sinal();
    let x1 = gerarNumeroAleatorio()*sinal();
    let x2 = gerarNumeroAleatorio()*sinal();
    let b = -(x1+x2)*a;
    let c = (x1*x2)*a;
    let resposta = [x1, x2];

    console.log('a: '+a);
    console.log('b: '+b);
    console.log('c: '+c);
    
    console.log('valor de X1: '+x1);
    console.log('valor de X2: '+x2);
    
    console.log('Raízes: '+resposta);
    if(b == 0){
        selecionarPergunta(`f(x) = ${a}x<sup>2</sup> + ${c}`, resposta);
    }
    else if(c == 0){
        selecionarPergunta(`f(x) = ${a}x<sup>2</sup> + ${b}x`, resposta);
    }
    else if(b == 0 && c == 0){
        selecionarPergunta(`f(x) = ${a}x<sup>2</sup>`, resposta);
    }
    else{
        selecionarPergunta(`f(x) = ${a}x<sup>2</sup> + ${b}x + ${c}`, resposta);
    }   
}