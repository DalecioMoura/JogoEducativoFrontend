// matematica.js

import { somar } from "./adicicao.js";
import { subtrair } from "./subtracao.js";
import { multiplicar } from "./multiplicacao.js";
import { dividir } from "./divisao.js";
import { elevarPotenciaDeDois, elevarPotenciaDeTres } from "./exponenciacao.js";
import { selecionarResposta, getStResposta, setStResposta } from "./selecionarResposta.js";
import { responder } from "./responder.js";
import { carregarProgresso, limparProgresso } from "../avancoNivel/progressoMatematica.js";

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

const operacoesPorAno = {
  "1º ano": [1, 2, 3], // Ajuste para as séries 1º, 2º e etc, conforme seu progresso
  "2º ano": [1, 2, 3, 4],
  "3º ano": [1, 2, 3, 4, 5, 6],
  "4º ano": [1, 2, 3, 4, 5, 6],
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

function inicio() {
  btnIniciar.style.display = "none";
  btnProximo.style.display = "block";
  btnReiniciar.style.display = "block";
  btnResponder.style.display = "none";
  feedback.style.display = "block";
  calc.style.display = "block";
  option.style.display = "grid";

  selecao();
  
}

function selecao() {

  setStResposta(false);

  divItemA.style.backgroundColor = "transparent";
  divItemB.style.backgroundColor = "transparent";
  divItemC.style.backgroundColor = "transparent";
  divItemD.style.backgroundColor = "transparent";

  let ano = selectAno.value || "1º ano";
  let operacoesDisponiveis = operacoesPorAno[ano];
  if (!operacoesDisponiveis) operacoesDisponiveis = operacoesPorAno["1º ano"];

  let x = operacoesDisponiveis[Math.floor(Math.random() * operacoesDisponiveis.length)];

  while (lista.includes(x) && lista.length < operacoesDisponiveis.length) {
    x = operacoesDisponiveis[Math.floor(Math.random() * operacoesDisponiveis.length)];
  }
  lista.push(x);

  if (lista.length > operacoesDisponiveis.length) lista = [];

  if (mapOperacoes[x]) {
    mapOperacoes[x]();
  }

  feedback.textContent = "Escolha uma resposta.";
  feedback.style.color = "black";

  //btnResponder.style.display = "block";
  //btnProximo.style.display = "none";
}

btnIniciar.onclick = () => { 
  inicio();
};

btnResponder.onclick = () => {
  const respostaValida = responder(); // Espera que responder() retorne true/false
  if (respostaValida) {
    // Após responder, pode ocultar o botão responder e mostrar o próximo
    btnResponder.style.display = "none";
    btnProximo.style.display = "block";
  }
};

btnProximo.onclick = () => {
  selecao();
};

btnReiniciar.onclick = () => {
  localStorage.removeItem("progressoMatematica");
  limparProgresso();
  //carregarProgresso();
  btnIniciar.style.display = "block";
  btnProximo.style.display = "none";
  btnReiniciar.style.display = "none";
  calc.style.display = "none";
  option.style.display = "none";
  feedback.style.display = "none";
  lista = [];
};

selectAno.onchange = () => {
  carregarProgresso();
  lista = [];
};

window.onload = () => {
  carregarProgresso();
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
  feedback,
};
