import { somar } from "./adicicao.js";
import { subtrair } from "./subtracao.js";
import { multiplicar} from "./multiplicacao.js";
import { dividir } from "./divisao.js";
import { extrairRaiz, extrairRaizCubica } from "./radiciacao.js";
import { elevarPotenciaDeDois, elevarPotenciaDeTres } from "./exponenciacao.js";
import { funcaoPrimeiroGrau } from "./fucaoPrimeiroGrau.js";
import { funcaoSegundoGrau } from "./funcaoSegundoGrau.js";
import { selecionarResposta } from "./selecionarResposta.js";
import { responder } from "./responder.js";


let btnIniciar         = document.getElementById("mat-btn-init");
let btnProximo          = document.getElementById("mat-btn-pxm");
let btnReiniciar          = document.getElementById("mat-btn-rnt");
let btnResponder    = document.getElementById("mat-pontuar");

btnResponder.style.display  = 'none';
btnIniciar.style.display       = 'block';
btnProximo.style.display        = 'none';
btnReiniciar.style.display        = 'none';

let calc    = document.getElementById("mat-calc");
let option  = document.getElementById("mat-option");

calc.style.display      = 'none';
option.style.display    = 'none';

let itemA = document.getElementById("mat-item-a");
let itemB = document.getElementById("mat-item-b");
let itemC = document.getElementById("mat-item-c");
let itemD = document.getElementById("mat-item-d");

let divItemA = document.getElementById("mat-div-a");
let divItemB = document.getElementById("mat-div-b");
let divItemC = document.getElementById("mat-div-c");
let divItemD = document.getElementById("mat-div-d");

let feedback = document.getElementById("mat-feedback");

let stResp = false;

let lista = [];                     //Lista de operações sorteadas
let ctrl = 0;                       //Variável de controle de repetição
const numerDeOperacoes = 7;         //Quantidade de operações disponíveis

function inicio(param = 0){
    let st= param;
    if(st == 0){
        btnIniciar.style.display = 'none';
        btnProximo.style.display = 'block';
        btnReiniciar.style.display = 'block';
        feedback.style.display = 'block';
        selecao();
    }else if(st == 1){
        btnIniciar.style.display = 'block';
        btnProximo.style.display = 'none';
        btnReiniciar.style.display = 'none';
        feedback.style.display = 'none';
        calc.style.display = 'none';
        option.style.display = 'none';
        let pontuacao = document.getElementById('mat-pontuacao');
        pontuacao.value = 0;
    }
    
}

function selecao(){
    divItemA.style.backgroundColor = 'transparent'
    divItemB.style.backgroundColor = 'transparent'
    divItemC.style.backgroundColor = 'transparent'
    divItemD.style.backgroundColor = 'transparent'
    stResp = false;

    let x = Math.floor(Math.random()*numerDeOperacoes)+1;
    ctrl = 0;
    if(lista.length == numerDeOperacoes){
        lista = [];
        console.log('Lista reiniciada!');
    }

    if(lista.length<=0){
        console.log('Número sorteado: '+ x);
        lista.push(x);
    }else{
        while(ctrl < lista.length && lista.length<numerDeOperacoes){
            
            if(x == lista[ctrl]){
                console.log('Número sorteado: '+ x);
                console.log('Opa o número sorteado: '+ x +', é igual ao número do indice '+ ctrl +' da lista: ' + lista[ctrl]);
                
                x = Math.floor(Math.random()*numerDeOperacoes)+1;
                console.log('Novo número sorteado: '+ x);
                ctrl = 0;
            }
            else{
                console.log('é diferente!');
                ctrl++;
                
            }
        }
        console.log('Novo Número: '+ x);
        lista.push(x);
    }
    console.log(lista);

    if(x==1){
        somar();
    }else if(x==2){
        subtrair();
    }else if(x==3){
        multiplicar();
    }else if(x==4){
        dividir();
    }else if(x==5){
        elevarPotenciaDeDois();
    }else if(x==6){
        elevarPotenciaDeTres();
    }else if(x==7){
        extrairRaiz();
    }else if(x==8){
        extrairRaizCubica();
    }else if(x==9){
        funcaoPrimeiroGrau();
    }else if(x == 10){
        funcaoSegundoGrau();
    }


    feedback.textContent = 'Escolha uma resposta.'
    feedback.style.color = 'black';
}

btnIniciar.addEventListener('click', ()=>inicio(0));
btnResponder.addEventListener('click', ()=>stResp = responder());
btnProximo.addEventListener('click', ()=>selecao());
btnReiniciar.addEventListener('click', ()=>inicio(1));

divItemA.addEventListener('click', ()=>selecionarResposta(itemA, 'a'));
divItemB.addEventListener('click', ()=>selecionarResposta(itemB, 'b'));
divItemC.addEventListener('click', ()=>selecionarResposta(itemC, 'c'));
divItemD.addEventListener('click', ()=>selecionarResposta(itemD, 'd'));


export {
    divItemA, divItemB, divItemC, divItemD, 
    itemA, itemB, itemC, itemD, calc, option, 
    btnResponder, stResp, feedback
}