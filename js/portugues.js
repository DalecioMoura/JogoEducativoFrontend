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
const questao     = document.getElementById('pt-questao');

option.style.display        = 'none';
divPalavra.style.display    = 'none';
questao.style.display       = 'none';

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

let palavra       = null;
let contRespostas = 0;

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
    feedback.style.display  = 'none';
    selecao(1);
  }else if(param == 1){
    btnInit.style.display     = 'block';
    btnPxm.style.display      = 'none';
    btnRnt.style.display      = 'none';
    feedback.style.display    = 'none';
    divPalavra.style.display  = 'none';
    option.style.display      = 'none';
    questao.style.display     = 'none';

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
  console.log(contRespostas);
  if(selec == 1){
    montarPergunta();
  }
}

 async function montarPergunta(){
  
  divPalavra.style.display = 'block';

  if(contRespostas == 0){
    palavra = await buscarPalavras();
  }

  divPalavra.innerHTML = palavra.palavra;

  switch(contRespostas){
    case 0:
      const silabaTonica = ['oxítona', 'paroxítona', 'proparoxítona',palavra.numero_silabas];
      resultado = palavra.classificacao_tonica;
      if(resultado == 'monossílabo tônico')
        resultado = 'oxítona';
      questao.style.display       = 'block';
      questao.textContent = 'Classifique a palavra quanto a sílaba tônica';
      itemA.textContent = silabaTonica[0];
      itemB.textContent = silabaTonica[1];
      itemC.textContent = silabaTonica[2];
      itemD.textContent = silabaTonica[3];
      mostrarNoConsole(palavra.classificacao_tonica, silabaTonica);
    break;
    case 1:
      const numeroSilabas = ['monossílabo', 'dissílabo', 'trissílabo', 'polissílabo'];
      resultado =   palavra.numero_silabas;
      if(resultado != 'monossílabo' && resultado != 'dissílabo' && resultado != 'trissílabo')
        resultado = 'polissílabo';
      questao.style.display       = 'block';
      questao.textContent = 'Classifique a palavra quanto a quantidade de sílabas';
      itemA.textContent = numeroSilabas[0];
      itemB.textContent = numeroSilabas[1];
      itemC.textContent = numeroSilabas[2];
      itemD.textContent = numeroSilabas[3];
      mostrarNoConsole(palavra.numero_silabas, numeroSilabas);
    break;
    case 2:
      let aux       = null;
      let ditongo   = palavra.ditongo;
      let hiato     = palavra.hiato;
      let tritongo  = palavra.ditongo
      if(ditongo == null && tritongo == null)
        aux = 'nenhuma das alternativas'
      else if(palavra.ditongo != null)
        aux = 'ditongo e hiato'
      else
        aux = 'tritongo e hiato'

      if(hiato){
        if(ditongo)
          resultado = 'ditongo e hiato';
        else if(tritongo)
          resultado = 'tritongo e hiato';
        else
        resultado = 'hiato';
      }
      else if(ditongo)
        resultado = 'ditongo';
      else if(tritongo)
        resultado = 'tritongo';
      else
        resultado = 'nenhuma das alternativas';

      const encontroVocalico = ['ditongo', 'tritongo', 'hiato', aux];
      questao.style.display       = 'block';
      questao.textContent = 'Classifique a palavra quanto ao tipo de encontro vocálico';
      itemA.textContent = encontroVocalico[0];
      itemB.textContent = encontroVocalico[1];
      itemC.textContent = encontroVocalico[2]; 
      itemD.textContent = encontroVocalico[3];
      mostrarNoConsole(palavra.fenomeno_fonetico, encontroVocalico);
    break;
  }

  option.style.display = 'block';
}

function mostrarNoConsole(assunto, opcoes){
  console.log(assunto);
  console.log("Opções:");
  console.log("Opção A: " + opcoes[0]);
  console.log("Opção B: " + opcoes[1]);
  console.log("Opção C: " + opcoes[2]);
  console.log("Opção D: " + opcoes[3]);
}

function responder(resp, tag){
  
  if(stResp == false){
    feedback.style.display      = 'none';
    btnResponder.style.display  = 'block';
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
  if(contRespostas<2)
    contRespostas++;
  else
    contRespostas = 0;
  feedback.style.display = 'block';
  questao.style.display  = 'none';
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