const btnInit       = document.getElementById("pt-btn-init");
const btnPxm        = document.getElementById("pt-btn-pxm");
const btnRnt        = document.getElementById("pt-btn-rnt");
const btnResponder  = document.getElementById("pt-pontuar");

btnResponder.style.display  = 'none';
btnInit.style.display       = 'block';
btnPxm.style.display        = 'none';
btnRnt.style.display        = 'none';

const option      = document.getElementById("pt-option");
const divPalavra  = document.getElementById('pt-palavra');

option.style.display        = 'none';
divPalavra.style.display    = 'none';

const itemA = document.getElementById("pt-item-a");
const itemB = document.getElementById("pt-item-b");
const itemC = document.getElementById("pt-item-c");
const itemD = document.getElementById("pt-item-d");

const divItemA = document.getElementById("pt-div-a");
const divItemB = document.getElementById("pt-div-b");
const divItemC = document.getElementById("pt-div-c");
const divItemD = document.getElementById("pt-div-d");

const feedback = document.getElementById("pt-feedback");

let resultado = null;
let resposta  = null;
let stResp    = false;

const palavrasSelecinadas = [];

const URL_PONTUACOES  = 'http://localhost:3000/api/pontuacoes';
//const URL_PALAVRAS    = 'http://localhost:3000/api/palavras';

const URL_PALAVRAS    = 'https://apijodgoeducativo.onrender.com/api/palavras';

function inicio(param = 0){
  let st = param;
  if(param == 0){
    btnInit.style.display   = 'none';
    btnPxm.style.display    = 'block';
    btnRnt.style.display    = 'block';
    feedback.style.display  = 'block';
    selecao(1);
  }else if(param == 1){
    btnInit.style.display     = 'block';
    btnPxm.style.display      = 'none';
    btnRnt.style.display      = 'none';
    feedback.style.display    = 'none';
    divPalavra.style.display  = 'none';
    option.style.display      = 'none';

    let pontuacao   = document.getElementById('pt-pontuacao');
    pontuacao.value = 0;
  } 
}

function selecao(selec){
  divItemA.style.backgroundColor = 'transparent';
  divItemB.style.backgroundColor = 'transparent';
  divItemC.style.backgroundColor = 'transparent';
  divItemD.style.backgroundColor = 'transparent';
  stResp = false;
  if(selec == 1){
    montarPergunta();
  }
}

 async function montarPergunta(){
  const palavra = await buscarPalavras();
  divPalavra.innerHTML = palavra.palavra;

  const opcoes = ['oxítona', 'paroxítona', 'proparoxítona', 'nenhuma das alterativas'];
  divPalavra.style.display = 'block';
  resultado = palavra.classificacao_tonica;
  if(resultado == 'monossílabo tônico')
    resultado = 'oxítona';
  itemA.innerHTML = opcoes[0];
  itemB.textContent = opcoes[1];
  itemC.textContent = opcoes[2];
  itemD.textContent = opcoes[3];

  option.style.display = 'block';

  console.log(palavra.classificacao_tonica);
  console.log("Opções:");
  console.log("Opção A: " + opcoes[0]);
  console.log("Opção B: " + opcoes[1]);
  console.log("Opção C: " + opcoes[2]);
  console.log("Opção D: " + opcoes[3]);
}

function responder(resp, tag){
  feedback.style.display      = 'none';
  btnResponder.style.display  = 'block';
  if(stResp == false){
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
    resposta = resp.textContent;
  }
}

function pontuar(){
  stResp = true;
    feedback.style.display = 'block';
    if(resposta == resultado){
        console.log("resposta correta");
        feedback.textContent = 'Sua resposta está correta!';
        feedback.style.color = 'green';
        let pontuacao = document.getElementById('pt-pontuacao');
        pontuacao.value = Number(pontuacao.value) + 1;
        
    }        
    else{
        console.log("resposta errada!");
        feedback.textContent = 'Sua resposta está errada!';
        feedback.style.color = 'red';
    }
    btnResponder.style.display = 'none';
}

async function buscarPontuacao() {
  try{
    const resposta = await fetch(URL_PONTUACOES);
    const dados = await resposta.json();
    console.log(dados);
    return dados;
  }catch (erro) {
    console.error('Erro ao buscar pontuaçãoe', erro);
  }
}

async function buscarPalavras() {
  try{
    const resposta = await fetch(URL_PALAVRAS);
    const dados = await resposta.json();
    console.log(dados.palavra.toUpperCase());
    return dados;
  }catch (erro) {
    console.error('Erro ao buscar pontuaçãoe', erro);
  }
}