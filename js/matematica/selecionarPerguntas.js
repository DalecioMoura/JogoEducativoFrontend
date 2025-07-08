import { itemA, itemB, itemC, itemD, calc, option } from "./matematica.js";
import { gerador } from "./gerador.js";

let resultado = null;
function selecionarPergunta(expressao, resultadoCalculado){

    //resultado = resultadoCalculado;
    console.log("selecionar pergunta");
    calc.innerHTML = expressao;

    calc.style.display = 'block';

    let opcoes = [];
    if(Array.isArray(resultadoCalculado)){
        resultado = `x1 = ${resultadoCalculado[0]} e x2 = ${resultadoCalculado[1]}`;
        const x1 = gerador(resultadoCalculado[0]);
        console.log("opções de x1: " + x1)
        const x2 = [];
        for(let i = 0; i<4; i++){
            x2[i] = resultadoCalculado[1]-(resultadoCalculado[0]-x1[i]);
        }
        console.log("opções de x1: " + x1)
        console.log('resultado calculado: '+resultado)
        opcoes = [[x1[0], x2[0]], [x1[1], x2[1]], [x1[2], x2[2]], [x1[3], x2[3]]];

        itemA.textContent = `x1 = ${opcoes[0][0]} e x2 = ${opcoes[0][1]}`;
        itemB.textContent = `x1 = ${opcoes[1][0]} e x2 = ${opcoes[1][1]}`;
        itemC.textContent = `x1 = ${opcoes[2][0]} e x2 = ${opcoes[2][1]}`;
        itemD.textContent = `x1 = ${opcoes[3][0]} e x2 = ${opcoes[3][1]}`;
    }else{
        resultado = resultadoCalculado;
        opcoes = gerador(resultado);

        itemA.textContent = opcoes[0];
        itemB.textContent = opcoes[1];
        itemC.textContent = opcoes[2];
        itemD.textContent = opcoes[3];
    }

    option.style.display = 'block';

    console.log(expressao);
    console.log("Opções:");
    console.log("Opção A: " + opcoes[0]);
    console.log("Opção B: " + opcoes[1]);
    console.log("Opção C: " + opcoes[2]);
    console.log("Opção D: " + opcoes[3]);
}

export {selecionarPergunta, resultado}