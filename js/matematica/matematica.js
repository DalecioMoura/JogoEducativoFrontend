// matematica.js

import { somar } from "./adicicao.js";
import { subtrair } from "./subtracao.js";
import { multiplicar } from "./multiplicacao.js";
import { dividir } from "./divisao.js";
import { elevarPotenciaDeDois, elevarPotenciaDeTres } from "./exponenciacao.js";
import { selecionarResposta, getStResposta, setStResposta } from "./selecionarResposta.js";
import { responder } from "./responder.js";
import { carregarProgresso, limparProgresso, getProgresso, salvarProgresso } from "../avancoNivel/progressoMatematica.js";

let btnIniciar = document.getElementById("mat-btn-init");
let btnProximo = document.getElementById("mat-btn-pxm");
let btnReiniciar = document.getElementById("mat-btn-rnt");
let btnResponder = document.getElementById("mat-pontuar");

let calc = document.getElementById("mat-calc");
let option = document.getElementById("mat-option");

let divItemA = document.getElementById("mat-div-a");
let divItemB = document.getElementById("mat-div-b");
let divItemC = document.getElementById("mat-div-c");
let divItemD = document.getElementById("mat-div-d");

let itemA = document.getElementById("mat-item-a");
let itemB = document.getElementById("mat-item-b");
let itemC = document.getElementById("mat-item-c");
let itemD = document.getElementById("mat-item-d");

let feedback = document.getElementById("mat-feedback");

const selectAno = document.getElementById("mat-ano");

btnResponder.style.display = "none";
btnIniciar.style.display = "block";
btnProximo.style.display = "none";
btnReiniciar.style.display = "none";
calc.style.display = "none";
option.style.display = "none";

let lista = [];
let operacoesUsadas = new Set();
let operacoesDisponiveis = [];
let jogoConcluido = false;

const operacoesPorAno = {
  "3º ano": [1, 2, 3, 4],   // Ajuste para as séries 1º, 2º e etc, conforme seu progresso
  "4º ano": [1, 2, 3, 4, 5],
  "5º ano": [1, 2, 3, 4, 5, 6],
};

const mapOperacoes = {
  1: somar,
  2: subtrair,
  3: multiplicar,
  4: dividir,
  5: elevarPotenciaDeDois,
  6: elevarPotenciaDeTres,
};

function setJogoConcluido(val){
  jogoConcluido = val
}

function inicio() {
  console.log('[DEBUG] Função inicio() chamada. Configurando UI para iniciar jogo.');
  btnIniciar.style.display = "none";
  btnProximo.style.display = "block";
  btnReiniciar.style.display = "block";
  btnResponder.style.display = "none";
  //feedback.style.display = "block";
  //calc.style.display = "block";
  //option.style.display = "grid";
  jogoConcluido = false;
  console.log(btnProximo.style.display);
  console.log(jogoConcluido);

  selecao();
  
}

function selecao() {
  console.log('[DEBUG] Função selecao() chamada. Gerando nova questão.');
  setStResposta(false);

  feedback.style.display = "block";
  calc.style.display = "block";
  option.style.display = "grid";

  divItemA.style.backgroundColor = "transparent";
  divItemB.style.backgroundColor = "transparent";
  divItemC.style.backgroundColor = "transparent";
  divItemD.style.backgroundColor = "transparent";

  let ano = selectAno[selectAno.selectedIndex].textContent || "3º ano";
  console.log('ano: '+ ano);

  let operacoesDisponiveisPorSerie = operacoesPorAno[ano];
  console.log('operações disponíveis: '+ operacoesDisponiveisPorSerie);

  if (!operacoesDisponiveisPorSerie)
    operacoesDisponiveisPorSerie = operacoesPorAno["3º ano"];

  if(operacoesUsadas.size === operacoesDisponiveis.length){
    console.log('[DEBUG] Todas as operações da série foram usadas. Reiniciando Set.');
    operacoesUsadas.clear(); // Limpa o Set
  }

  // Filtra as operações que AINDA NÃO foram usadas
  operacoesDisponiveis = operacoesDisponiveisPorSerie.filter(op => !operacoesUsadas.has(op));

  if(operacoesDisponiveis.length === 0){
    console.warn('Nenhuma operação disponível para seleção. Usando todas as operações.');
    operacoesDisponiveis = [...operacoesDisponiveisPorSerie];
    operacoesUsadas.clear(); // Limpa para evitar loops infinitos caso a lógica de filtro falhe
  }

  const operacaoSelecionada = operacoesDisponiveis[Math.floor(Math.random() * operacoesDisponiveis.length)];

  operacoesUsadas.add(operacaoSelecionada);

  console.log(`[DEBUG] Operação selecionada: ${operacaoSelecionada}. Operações usadas (Set):`, operacoesUsadas);

  if(mapOperacoes[operacaoSelecionada]){
    mapOperacoes[operacaoSelecionada](getProgresso().anoSelecionado, getProgresso().nivelAtual)
  }
  

  /*if (!operacoesDisponiveisPorSerie)
    operacoesDisponiveisPorSerie = operacoesPorAno["3º ano"];

  let x = operacoesDisponiveisPorSerie[Math.floor(Math.random() * operacoesDisponiveisPorSerie.length)];

  while (lista.includes(x) && lista.length < operacoesDisponiveisPorSerie.length) {
    x = operacoesDisponiveisPorSerie[Math.floor(Math.random() * operacoesDisponiveisPorSerie.length)];
  }
  lista.push(x);

  if (lista.length > operacoesDisponiveisPorSerie.length)
    lista = [];

  if (mapOperacoes[x]) {
    mapOperacoes[x](getProgresso().anoSelecionado, getProgresso().nivelAtual);
  }*/

  
  feedback.textContent = "Escolha uma resposta.";
  feedback.style.color = "black";

  //btnResponder.style.display = "block";
  //btnProximo.style.display = "none";
  //btnProximo.textContent = 'Próximo';
  console.log(btnProximo.style.display);
}

function reiniciar(){
  localStorage.removeItem("progressoMatematica");
  limparProgresso();
  btnIniciar.style.display = "block";
  btnProximo.style.display = "none";
  btnReiniciar.style.display = "none";
  calc.style.display = "none";
  option.style.display = "none";
  feedback.style.display = "none";
  lista = [];
  console.log('[DEBUG] Estado final de btnProximo em reiniciar(): ' + btnProximo.style.display);
  console.log(btnProximo.style.display);
  console.log(btnProximo.style.display);
}

btnIniciar.onclick = () => {
  console.log('[DEBUG] Iniciar')
  inicio();
};

btnResponder.onclick = () => {
  console.log('[DEBUG] btnResponder Clicado/Ativado!');
  const respostaValida = responder(); // Espera que responder() retorne true/false
  if (respostaValida) {
    console.log('[DEBUG] Resposta válida! Escondendo btnResponder e mostrando btnProximo.');
    // Após responder, pode ocultar o botão responder e mostrar o próximo
    btnResponder.style.display = "none";
    if(jogoConcluido){
      btnProximo.style.display = "none";
    }
    else{
      btnProximo.style.display = "block";
    }
    console.log("btnProximo.style.display (após responder): " + btnProximo.style.display);
    console.log(btnProximo.style.display);
  } 
  console.log(jogoConcluido);
  console.log(btnProximo.style.display);
};


btnProximo.onclick = () => {
  console.log('[DEBUG] btnProximo Clicado!');
  selecao();
};

btnReiniciar.onclick = () => {
  console.log('Reiniciar');
  console.log('[DEBUG] Reiniciar Clicado!');
  reiniciar();
};

selectAno.onchange = () => {
  carregarProgresso();
  lista = [];
};

window.onload = () => {
  carregarProgresso();
  console.log(btnProximo.style.display);
};

divItemA.addEventListener("click", () => selecionarResposta(itemA, "a"));
divItemB.addEventListener("click", () => selecionarResposta(itemB, "b"));
divItemC.addEventListener("click", () => selecionarResposta(itemC, "c"));
divItemD.addEventListener("click", () => selecionarResposta(itemD, "d"));

export {
  divItemA,
  divItemB,
  divItemC,
  divItemD,
  itemA,
  itemB,
  itemC,
  itemD,
  calc,
  option,
  btnResponder,
  btnProximo,
  btnReiniciar,
  reiniciar,
  feedback,
  setJogoConcluido
};
