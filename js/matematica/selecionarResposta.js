import { divItemA, divItemB, divItemC, divItemD, btnResponder, btnProximo } from "./matematica.js";

let respostaSelecionada = null;
let stResposta = false;

function selecionarResposta(elemento, tag) {
  if(!stResposta){
    btnResponder.style.display = "block";
    btnProximo.style.display = "none";

    // Limpa os destaques
    divItemA.style.backgroundColor = "transparent";
    divItemB.style.backgroundColor = "transparent";
    divItemC.style.backgroundColor = "transparent";
    divItemD.style.backgroundColor = "transparent";

    // Destaca a resposta selecionada
    switch (tag) {
      case 'a': divItemA.style.backgroundColor = 'gray'; break;
      case 'b': divItemB.style.backgroundColor = 'gray'; break;
      case 'c': divItemC.style.backgroundColor = 'gray'; break;
      case 'd': divItemD.style.backgroundColor = 'gray'; break;
    }

    respostaSelecionada = elemento.textContent;

  }
  
}

function getRespostaSelecionada() {
  return respostaSelecionada;
}

function getStResposta(){
  return stResposta;
}

function setStResposta(val){
  stResposta = val;
}

function resetarRespostaSelecionada() {
  respostaSelecionada = null;
  divItemA.style.backgroundColor = "transparent";
  divItemB.style.backgroundColor = "transparent";
  divItemC.style.backgroundColor = "transparent";
  divItemD.style.backgroundColor = "transparent";
}

export {
  selecionarResposta,
  getRespostaSelecionada,
  resetarRespostaSelecionada,
  getStResposta,
  setStResposta
};
