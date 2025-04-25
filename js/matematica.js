let btnInit         = document.getElementById("mat-btn-init");
let btnPxm          = document.getElementById("mat-btn-pxm");
let btnRnt          = document.getElementById("mat-btn-rnt");
let btnResponder    = document.getElementById("mat-pontuar");

btnResponder.style.display  = 'none';
btnInit.style.display       = 'block';
btnPxm.style.display        = 'none';
btnRnt.style.display        = 'none';

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

let resultado = null;
let resposta = null;

let stResp = false;

function inicio(param = 0){
    let st= param;
    if(st == 0){
        btnInit.style.display = 'none';
        btnPxm.style.display = 'block';
        btnRnt.style.display = 'block';
        feedback.style.display = 'block';
        selecao();
    }else if(st == 1){
        btnInit.style.display = 'block';
        btnPxm.style.display = 'none';
        btnRnt.style.display = 'none';
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
    let x = Math.floor(Math.random()*4)+1;
    if(x==1){
        soma();
    }else if(x==2){
        subtracao();
    }else if(x==3){
        multiplicacao();
    }else{
        divisao();
    }
    feedback.textContent = 'Escolha uma resposta.'     
}

function soma(){
    
    console.log("soma")
    let n1 = Math.floor(Math.random()*100)+1;
    let n2 = Math.floor(Math.random()*100)+1;
    resultado = n1 + n2;
    
    calc.innerHTML = n1 + " + " + n2;

    montarPergunta(`${n1} + ${n2}`, (n1 + n2));
    /*calc.style.display = 'block';

    let opcoes = gerador();

    itemA.textContent = opcoes[0];
    itemB.textContent = opcoes[1];
    itemC.textContent = opcoes[2];
    itemD.textContent = opcoes[3];
    
    option.style.display = 'block';

    console.log(n1 + " + " + n2);
    console.log("Opções:");
    console.log("Opção A: " + opcoes[0]);
    console.log("Opção B: " + opcoes[1]);
    console.log("Opção C: " + opcoes[2]);
    console.log("Opção D: " + opcoes[3]);*/
}

function subtracao(){
    
    console.log("subtração")
    let n1 = Math.floor(Math.random()*100)+1;
    let n2 = Math.floor(Math.random()*100)+1;

    if(n1 > n2){
        /*console.log(n1 + " - " + n2);
        calc.innerHTML = n1 + " - " + n2;
        resultado = n1 - n2;*/

        montarPergunta(`${n1} - ${n2}`, (n1 - n2));
    }
    else{
        /*console.log(n2 + " - " + n1);
        calc.innerHTML = n2 + " - " + n1;
        resultado = n2 - n1*/

        montarPergunta(`${n2} - ${n1}`, (n2 - n1));
    }

    /*calc.style.display = 'block';

    let opcoes = gerador();

    itemA.textContent = opcoes[0];
    itemB.textContent = opcoes[1];
    itemC.textContent = opcoes[2];
    itemD.textContent = opcoes[3];

    option.style.display = 'block';
    
    console.log("Opções:");
    console.log("Opção A: " + opcoes[0]);
    console.log("Opção B: " + opcoes[1]);
    console.log("Opção C: " + opcoes[2]);
    console.log("Opção D: " + opcoes[3]);*/
}

function multiplicacao(){
    
    console.log("multiplicação")
    let n1 = Math.floor(Math.random()*100)+1;
    let n2 = Math.floor(Math.random()*10)+1;
    /*resultado = n1 * n2;
    
    calc.innerHTML = n1 + " x " + n2;*/

    montarPergunta(`${n1} x ${n2}`, (n1 * n2));
    /*calc.style.display = 'block';

    let opcoes = gerador();

    itemA.textContent = opcoes[0];
    itemB.textContent = opcoes[1];
    itemC.textContent = opcoes[2];
    itemD.textContent = opcoes[3];
    
    option.style.display = 'block';

    console.log(n1 + " x " + n2);
    console.log("Opções:");
    console.log("Opção A: " + opcoes[0]);
    console.log("Opção B: " + opcoes[1]);
    console.log("Opção C: " + opcoes[2]);
    console.log("Opção D: " + opcoes[3]);*/

}

function divisao(){
    
    console.log("divisão")
    let n1 = Math.floor(Math.random()*100)+1;
    let n2 = Math.floor(Math.random()*10)+1;
    /*resultado = n1 / n2;
    
    calc.innerHTML = n1 + " : " + n2;*/

    montarPergunta(`${n1} : ${n2}`, (n1 / n2));
}

function montarPergunta(expressao, resultadoCalculado){

    resultado = resultadoCalculado;
    
    calc.innerHTML = expressao;

    calc.style.display = 'block';

    let opcoes = gerador();

    itemA.textContent = opcoes[0];
    itemB.textContent = opcoes[1];
    itemC.textContent = opcoes[2];
    itemD.textContent = opcoes[3];
    
    option.style.display = 'block';

    console.log(expressao);
    console.log("Opções:");
    console.log("Opção A: " + opcoes[0]);
    console.log("Opção B: " + opcoes[1]);
    console.log("Opção C: " + opcoes[2]);
    console.log("Opção D: " + opcoes[3]);
}

function responder(vlr, tag){
    
    if(stResp == false){
        feedback.style.display = 'none';
        btnResponder.style.display = 'block';
        switch(tag){
            case 'a':
                divItemA.style.backgroundColor = 'gray'
                divItemB.style.backgroundColor = 'transparent'
                divItemC.style.backgroundColor = 'transparent'
                divItemD.style.backgroundColor = 'transparent'
                break;
            case 'b':
                divItemA.style.backgroundColor = 'transparent'
                divItemB.style.backgroundColor = 'gray'
                divItemC.style.backgroundColor = 'transparent'
                divItemD.style.backgroundColor = 'transparent'
                break;
            case 'c':
                divItemA.style.backgroundColor = 'transparent'
                divItemB.style.backgroundColor = 'transparent'
                divItemC.style.backgroundColor = 'gray'
                divItemD.style.backgroundColor = 'transparent'
                break;
            case 'd':
                divItemA.style.backgroundColor = 'transparent'
                divItemB.style.backgroundColor = 'transparent'
                divItemC.style.backgroundColor = 'transparent'
                divItemD.style.backgroundColor = 'gray'
                break;
        }
        resposta = vlr.textContent;
    }
}

function pontuar(){
    stResp = true;
    feedback.style.display = 'block';
    if(resposta == resultado){
        console.log("resposta correta");
        feedback.textContent = 'Sua resposta está correta!';
        feedback.style.color = 'green';
        let pontuacao = document.getElementById('mat-pontuacao');
        pontuacao.value = Number(pontuacao.value) + 1;
        
    }        
    else{
        console.log("resposta errada!");
        feedback.textContent = 'Sua resposta está errada!';
        feedback.style.color = 'red';
    }
    btnResponder.style.display = 'none';
}

function gerador(){

    let lista = [];

    for(let i = -5; i<=5; i++){
        if(i >= 0)
            lista[i+5] = i+1 + Number(resultado);
        else
        lista[i+5] = i + Number(resultado);    
    }

    let listaAleatoria = new Set();
    while(listaAleatoria.size <3){
        let n1 = Math.floor(Math.random()*11);
        listaAleatoria.add(lista[n1]);
    }

    listaAleatoria.add(Number(resultado))
    let listaAux = Array.from(listaAleatoria);

    let listaOpcoes = new Set();
    while(listaOpcoes.size < 4){
        let n1 = Math.floor(Math.random()*4);
        listaOpcoes.add(listaAux[n1]);
    }
    return Array.from(listaOpcoes);
}