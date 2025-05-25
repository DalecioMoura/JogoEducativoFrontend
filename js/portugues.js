const btnIniciar    = document.getElementById("pt-btn-init");
const btnProximo    = document.getElementById("pt-btn-pxm");
const btnReiniciar  = document.getElementById("pt-btn-rnt");
const btnResponder  = document.getElementById("pt-pontuar");

btnResponder.style.display  = 'none';
btnIniciar.style.display    = 'block';
btnProximo.style.display    = 'none';
btnReiniciar.style.display  = 'none';

const option      = document.getElementById("pt-option");
const divPalavra  = document.getElementById('pt-palavra');
const questao     = document.getElementById('pt-questao');

const selecMorfologia     = document.getElementById('pt-select-morfologia');
const selecTonicidade     = document.getElementById('pt-select-tonicidade');

option.style.display      = 'none';
divPalavra.style.display  = 'none';
questao.style.display     = 'none';

selecMorfologia.style.display = 'none';
selecTonicidade.style.display = 'none';

const itemA = document.getElementById("pt-item-a");
const itemB = document.getElementById("pt-item-b");
const itemC = document.getElementById("pt-item-c");
const itemD = document.getElementById("pt-item-d");

const divItemA = document.getElementById("pt-div-a");
const divItemB = document.getElementById("pt-div-b");
const divItemC = document.getElementById("pt-div-c");
const divItemD = document.getElementById("pt-div-d");

const select = document.getElementById("pt-select-morfologia");
select.style.display = 'none';

const selectOp1 = document.getElementById("pt-op1");
const selectOp2 = document.getElementById("pt-op2");
const selectOp3 = document.getElementById("pt-op3");
const selectOp4 = document.getElementById("pt-op4");
const selectOp5 = document.getElementById("pt-op5");
const selectOp6 = document.getElementById("pt-op6");
const selectOp7 = document.getElementById("pt-op7");
const selectOp8 = document.getElementById("pt-op8");
const selectOp9 = document.getElementById("pt-op9");
const selectOp10 = document.getElementById("pt-op10");

const intputResposta = document.getElementById("pt-resposta");
intputResposta.style.display = 'none';

const feedback = document.getElementById("pt-feedback");

let resultado = null;
let resposta  = null;
let stResp    = false;
let stSelect  = false;
let listaSelecao   = [];

let palavra       = null;
let contRespostas = 0;

const palavrasSelecinadas = [];

const URL_PONTUACOES  = 'http://localhost:3000/api/pontuacoes';
//const URL_PALAVRAS    = 'http://localhost:3000/api/palavras';

const URL_PALAVRAS    = 'https://apijodgoeducativo.onrender.com/api/palavras';

function inicio(param = 0){
  let st = param;
  if(param == 0){
    btnIniciar.style.display   = 'none';
    btnProximo.style.display    = 'block';
    btnReiniciar.style.display    = 'block';
    feedback.style.display  = 'none';
    selecao();
  }else if(param == 1){
    btnIniciar.style.display     = 'block';
    btnProximo.style.display      = 'none';
    btnReiniciar.style.display      = 'none';
    feedback.style.display    = 'none';
    divPalavra.style.display  = 'none';
    option.style.display      = 'none';
    questao.style.display     = 'none';

    let pontuacao   = document.getElementById('pt-pontuacao');
    pontuacao.value = 0;
  } 
}

function selecao(){
  if(!stSelect){
    let listaAleatotia = new Set();
    while(listaAleatotia.size < 6){
      let n1 = Math.floor((Math.random()*6)+1);
      listaAleatotia.add(n1);
    }
    listaSelecao = Array.from(listaAleatotia);
    console.log('seleção', listaSelecao);
    console.log('lista aleatória', listaAleatotia);
    stSelect = true;
  }
  
  divItemA.style.backgroundColor = 'transparent';
  divItemB.style.backgroundColor = 'transparent';
  divItemC.style.backgroundColor = 'transparent';
  divItemD.style.backgroundColor = 'transparent';
  feedback.style.display  = 'none';
  stResp = false;
  console.log(contRespostas);
  selecionarPergunta();
}

 async function selecionarPergunta(){
  
  divPalavra.style.display = 'block';

  if(contRespostas == 0){
    palavra = await buscarPalavras();
  }

  divPalavra.innerHTML = palavra.palavra;

  switch(listaSelecao[contRespostas]){
    case 1:
      determinarTonicidade();
    break;
    case 2:
      determinarClasificacaoSilabica();
    break;
    case 3:
      determinarTipoDeEncontroVocalico();
    break;
    /*case 4:
      //determinarEncontroVocalico();
      
    break;
    case 5:
      //determinarEncontroConsonantal();
      
    break;
    case 4://6:*/
      determinarSilabaTonica();
    break;
    case 4://7:
      determinarDigrafo();
    break;
    case 5://8:
      separarSilabas();
    break;
    case 6://9:
      determinarClasseMorfologica();
    break;
  }                
}

function mostrarNoConsole(assunto, opcoes){
  console.log(assunto);
  console.log("Opções:");
  console.log("Opção A: " + opcoes[0]);
  console.log("Opção B: " + opcoes[1]);
  console.log("Opção C: " + opcoes[2]);
  console.log("Opção D: " + opcoes[3]);
}

function selecionarResposta(resp, tag){
  
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

function responder(){
  stResp = true;

  if(contRespostas<5){
    contRespostas++;
    console.log('contador: ', contRespostas);
  }
    
  else{
    contRespostas = 0;
    stSelect = false;
    console.log('Reset contador: ', contRespostas);
  }
    
  feedback.style.display = 'block';
  questao.style.display  = 'none';

  if(intputResposta.style.display == 'block'){
    resposta = intputResposta.value;
    intputResposta.readOnly = true;
  }
    
  if(selecMorfologia.style.display == 'block'){
    resposta = selecMorfologia.value;
    selecMorfologia.disabled = true;
  }
    
  if(selecTonicidade.style.display == 'block'){
    resposta = selecTonicidade.value;
    selecTonicidade.disabled = true;
  }
    
  console.log('reposta', resposta);
  console.log('resultado',resultado);

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

function determinarTonicidade(){
  console.log('Determinar tonicidade.');
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
  option.style.display = 'block';
  selecTonicidade.style.display = 'none'
  selecMorfologia.style.display = 'none'
  intputResposta.style.display = 'none';
  mostrarNoConsole(palavra.classificacao_tonica, silabaTonica);
}

function determinarClasificacaoSilabica(){
  console.log('Determinar classificação silábica.');
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
  option.style.display = 'block';
  selecTonicidade.style.display = 'none'
  selecMorfologia.style.display = 'none'
  intputResposta.style.display = 'none';
  mostrarNoConsole(palavra.numero_silabas, numeroSilabas);
}

function determinarTipoDeEncontroVocalico(){
  console.log('Determinar tipo de encontro vocálico.');
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
  questao.textContent = 'Classifique a palavra quanto ao tipo de encontro vocálico.';
  itemA.textContent = encontroVocalico[0];
  itemB.textContent = encontroVocalico[1];
  itemC.textContent = encontroVocalico[2]; 
  itemD.textContent = encontroVocalico[3];
  option.style.display = 'block';
  selecTonicidade.disabled = false;
  intputResposta.style.display = 'none';
  selecTonicidade.style.display = 'none';
  selecMorfologia.style.display = 'none';
  mostrarNoConsole(palavra.fenomeno_fonetico, encontroVocalico);
}

function determinarEncontroVocalico(){
  console.log('Determinar encontro vocálico.');  
  questao.style.display       = 'block';
  questao.textContent = 'Determine o encontro vocálico.';
  intputResposta.readOnly = false;
  intputResposta.value = '';
  resultado = palavra.tonica;
  option.style.display = 'none';
  intputResposta.style.display = 'block';
  selecTonicidade.style.display = 'none'
  selecMorfologia.style.display = 'none'
  btnResponder.style.display  = 'block';
}

function determinarEncontroConsonantal(){
  console.log('Determinar encontro consonantal.');
  questao.style.display       = 'block';
  questao.textContent = 'Determine o encontro consonantal.';
  intputResposta.readOnly = false;
  intputResposta.value = '';
  resultado = palavra.tonica;
  option.style.display = 'none';
  intputResposta.style.display = 'block';
  selecTonicidade.style.display = 'none'
  selecMorfologia.style.display = 'none'
  btnResponder.style.display  = 'block';
}

function determinarSilabaTonica(){
  console.log('Determinar silaba tônica.');
  questao.style.display       = 'block';
  questao.textContent = 'Determine a sílaba tônica.';
  intputResposta.readOnly = false;
  intputResposta.value = '';
  resultado = palavra.tonica;
  option.style.display = 'none';
  intputResposta.style.display = 'block';
  selecTonicidade.style.display = 'none'
  selecMorfologia.style.display = 'none'
  btnResponder.style.display  = 'block'; 
}

function determinarDigrafo(){
  let message = 'Determine os dígrafos da palavra.<br><span style = "background-color: yellow; font-size: 0.7em">OBS.: Caso não haja digafro digite \"0\"<\span>'
  console.log('Determinar digrafos.');  
  questao.style.display       = 'block';
  questao.innerHTML = message//'Determine os dígrafos da palavra. OBS.: Caso não haja digafro digite "0"';
  intputResposta.readOnly = false;
  intputResposta.value = '';
  if(!palavra.digrafo)
    resultado = 0;
  else
    resultado = palavra.digrafo;
  option.style.display = 'none';
  intputResposta.style.display = 'block';
  selecTonicidade.style.display = 'none'
  selecMorfologia.style.display = 'none'
  btnResponder.style.display  = 'block';
}

function separarSilabas(){
  console.log('Separar as sílabas.');
  questao.style.display       = 'block';
  questao.textContent = 'Separe as sílabas da palavra.';
  intputResposta.readOnly = false;
  intputResposta.value = '';
  resultado = palavra.silabas;
  option.style.display = 'none';
  intputResposta.style.display = 'block';
  selecTonicidade.style.display = 'none'
  selecMorfologia.style.display = 'none'
  btnResponder.style.display  = 'block';
}

function determinarClasseMorfologica(){
  console.log('Determinar classe morfológica.');
  questao.style.display       = 'block';
  questao.textContent = 'Determine a classe morfológica da palavra.';
  //intputResposta.value = '';
  resultado = palavra.classe_gramatical;
  selecMorfologia.disabled = false;
  option.style.display = 'none';
  selecTonicidade.style.display = 'none';
  selecMorfologia.style.display = 'block';
  intputResposta.style.display = 'none';
  btnResponder.style.display  = 'block';
}

function determinarDerivação(){
  console.log('Determinar derivação.');
  questao.style.display       = 'block';
  questao.textContent = 'Determine o tipo de derivação na formação da palavra.';
  intputResposta.readOnly = false;
  intputResposta.value = '';
  resultado = palavra.tipo_de_derivacao;
  option.style.display = 'none';
  selecTonicidade.style.display = 'none'
  selecMorfologia.style.display = 'none'
  intputResposta.style.display = 'block';
  btnResponder.style.display  = 'block';
}

function determinarSufixo(){
  console.log('Determinar sufixo.');
  questao.style.display       = 'block';
  questao.textContent = 'Determine o sufíxo da palavra.';
  intputResposta.readOnly = false;
  intputResposta.value = '';
  resultado = palavra.sufixo;
  option.style.display = 'none';
  selecTonicidade.style.display = 'none'
  selecMorfologia.style.display = 'none'
  intputResposta.style.display = 'block';
  btnResponder.style.display  = 'block';
}

function determinarPrefixo(){
  console.log('Determinar prefixo.');
  questao.style.display       = 'block';
  questao.textContent = 'Determine o prefíxo da palavra.';
  intputResposta.readOnly = false;
  intputResposta.value = '';
  resultado = palavra.prefixo;
  option.style.display = 'none';
  selecTonicidade.style.display = 'none'
  selecMorfologia.style.display = 'none'
  intputResposta.style.display = 'block';
  btnResponder.style.display  = 'block';
}

function determinarRadical(){
  console.log('Determinar radical.');
  questao.style.display       = 'block';
  questao.textContent = 'Determine o radical da palavra.';
  intputResposta.readOnly = false;
  intputResposta.value = '';
  resultado = palavra.radical;
  option.style.display = 'none';
  selecTonicidade.style.display = 'none'
  selecMorfologia.style.display = 'none'
  intputResposta.style.display = 'block';
  btnResponder.style.display  = 'block';
}