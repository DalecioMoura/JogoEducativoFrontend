import { reiniciar, btnProximo, setJogoConcluido, feedback, calc } from "../matematica/matematica.js";

const escolaridade = document.getElementById('mat-escolaridade');
const ano = document.getElementById('mat-ano');

const quantidadeQuestoesPorNiveis = 12;
const series = ["3º ano", "4º ano", "5º ano"];

let progresso = {
  usuario: "joao",
  serieAtual: ano[ano.selectedIndex].textContent,
  nivelAtual: 1,
  pontuacao: 0,
  anoSelecionado: ano.value
};

function getProgresso(){
  return progresso;
}

function setProgresso(usuario, serieAtual, nivelAtual, pontuacao){
  progresso.usuario = usuario;
  progresso.serieAtual = serieAtual;
  progresso.nivelAtual = nivelAtual;
  progresso.pontuacao = pontuacao;
}

function carregarProgresso() {
  const salvo = localStorage.getItem("progressoMatematica");
  if (salvo){
    progresso = JSON.parse(salvo);
    ano.value = progresso.anoSelecionado;
    console.log(salvo);
  }
  atualizarVisual();
  console.log(btnProximo.style.display);
}

function salvarProgresso() {
  localStorage.setItem("progressoMatematica", JSON.stringify(progresso));
  //carregarProgresso()
  console.log(btnProximo.style.display);
}

function limparProgresso(){
  progresso.serieAtual  = "3º ano";
  progresso.nivelAtual  = 1;
  progresso.pontuacao   = 0;
  ano.value = 1;
  progresso.anoSelecionado = ano.value;
  atualizarVisual();
  console.log(progresso);
  console.log(ano.value);
  console.log(ano[ano.selectedIndex].textContent);

  console.log(btnProximo.style.display);
}

function atualizaProgresso(){
    progresso.serieAtual = ano.options[ano.selectedIndex].textContent;
    progresso.nivelAtual = 1;
    progresso.pontuacao = 0;
    progresso.anoSelecionado = ano.value;
    salvarProgresso();
    console.log(btnProximo.style.display);
}

function pontuar(acertou) {

  console.log(`[DEBUG] pontuar() chamado. Acertou: ${acertou}. Pontuação atual: ${progresso.pontuacao}. Nível: ${progresso.nivelAtual}. Série: ${progresso.serieAtual}`);
  progresso.pontuacao += acertou ? 1 : -1;
  if (progresso.pontuacao < 0)
    progresso.pontuacao = 0;

  if (progresso.pontuacao >= quantidadeQuestoesPorNiveis) {
    console.log('[DEBUG] Pontuação atingiu limite, avançando nível/série.');
    progresso.nivelAtual++;
    progresso.pontuacao = 0;

    if (progresso.nivelAtual > 10) {
      const idx = series.indexOf(progresso.serieAtual);
      if (idx < series.length - 1) {
        console.log(`[DEBUG] Avançando para a próxima série: ${series[idx + 1]}`);
        progresso.serieAtual = series[idx + 1]; 
        progresso.nivelAtual = 1;
        ano.value = idx+2;
        progresso.anoSelecionado = idx+2;

        mostrarParabens(() => {
          salvarProgresso();
          atualizarVisual();
        });

        return

      } else {
        setJogoConcluido(true);
        console.log('[DEBUG] FIM DO JOGO: Todas as séries concluídas!');
        progresso.nivelAtual = 10;
        alert("🏁 Você concluiu todas as séries!");
        console.log('Concluído! teste reiniciar');
        reiniciar();
        console.log('[DEBUG] Após chamar reiniciar() no fim do jogo.');
        return;
      }
    }
    else {
    // Mostra mensagem de nível
    console.log('[DEBUG] Avançando de nível.');
    mostrarNivelMensagem();
    }

  }

  salvarProgresso();
  atualizarVisual();

  console.log(btnProximo.style.display);
}

function atualizarVisual() {
  const serieAtual = document.getElementById("mat-serie-nivel");
  const barraProgresso = document.querySelector(".mat-barra .preenchido");
  //const elPontos = document.getElementById("mat-pontos");

  if (serieAtual)
    serieAtual.textContent = `${progresso.serieAtual} - Nível ${progresso.nivelAtual}`;
  if (barraProgresso)
    barraProgresso.style.width = `${(progresso.pontuacao / quantidadeQuestoesPorNiveis) * 100}%`;
  /*if (elPontos)
    elPontos.textContent = `${progresso.pontuacao}/10`;*/
  console.log(btnProximo.style.display);
}

function mostrarParabens(callback) {
  console.log('[DEBUG] mostrarParabens() chamada.');
  const container = document.getElementById("parabens-container");
  const opcoes = document.getElementById("mat-option");
  const botoes = document.querySelector(".botoes");

  if (!container || !opcoes || !botoes) return;

  // Esconde as opções e botões do jogo
  feedback.style.display = "none";
  calc.style.display = "none";
  opcoes.style.display = "none";
  botoes.style.display = "none";
  container.style.display = "block";

  document.getElementById("btn-continuar").onclick = () => {
    console.log('[DEBUG] Botão "Continuar" (Parabéns) clicado.');
    container.style.display = "none";
    opcoes.style.display = "grid";
    botoes.style.display = "flex";

    if (callback)
      callback(); // continuar jogo

    if (btnProximo){
      console.log('[DEBUG] Simulação de clique no btnProximo (de mostrarParabens).');
      btnProximo.click();
    }

    console.log(btnProximo.style.display);
  };

  document.getElementById("btn-sair").onclick = () => {
    console.log('[DEBUG] Botão "Sair" (Parabéns) clicado.');
    window.location.href = "../../index.html";
  };
}

function mostrarNivelMensagem() {
  console.log('[DEBUG] mostrarNivelMensagem() chamada.');
  const nivelContainer = document.getElementById("nivel-container");
  const nivelTexto = document.getElementById("nivel-texto");
  const opcoes = document.getElementById("mat-option");
  const botoes = document.querySelector(".botoes");

  if (!nivelContainer || !nivelTexto || !opcoes || !botoes)
    return;

  feedback.style.display = "none";
  calc.style.display = "none";
  opcoes.style.display = "none";
  botoes.style.display = "none";

  nivelTexto.textContent = `👏👏 Parabéns! 👏👏\n👏Você subiu de nível!👏\nVocê passou para o nível ${progresso.nivelAtual}!`;
  nivelContainer.style.display = "block";

  document.getElementById("btn-continuar-nivel").onclick = () => {
    console.log('[DEBUG] Botão "Continuar" (Nível) clicado.');
    nivelContainer.style.display = "none"; 
    opcoes.style.display = "grid";
    botoes.style.display = "flex";
    
    salvarProgresso();
    atualizarVisual();

    // Sorteia nova pergunta
    
    if (btnProximo){
     console.log('[DEBUG] Simulação de clique no btnProximo (de mostrarNivelMensagem).');
      btnProximo.click()
    };

    console.log(btnProximo.style.display);
  };

  document.getElementById("btn-sair-nivel").onclick = () => {
    console.log('[DEBUG] Botão "Sair" (Nível) clicado.');
    window.location.href = "../../index.html";
  };
}



ano.addEventListener('change', ()=>{
  let valueAtual = progresso.anoSelecionado;
  if(confirm('Tem certeza que quer mudar de série?')){
    atualizaProgresso();
    console.log('Série alterada com sucesso!');

    console.log(btnProximo.style.display);
  }else{
    ano.value = valueAtual;
    console.log('Série não alterada!');
  }
});

export { pontuar, carregarProgresso, limparProgresso, getProgresso, setProgresso, salvarProgresso };
