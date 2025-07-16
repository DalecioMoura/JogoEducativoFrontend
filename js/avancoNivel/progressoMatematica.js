const escolaridade = document.getElementById('mat-escolaridade');
const ano = document.getElementById('mat-ano');



const series = ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"];

let progresso = {
  usuario: "joao",
  serieAtual: ano[ano.selectedIndex].textContent,
  nivelAtual: 1,
  pontuacao: 0,
  anoSelecionado: ano.value
};

function carregarProgresso() {
  const salvo = localStorage.getItem("progressoMatematica");
  if (salvo){
    progresso = JSON.parse(salvo);
    ano.value = progresso.anoSelecionado;
    console.log(salvo);
  };
  atualizarVisual();
}

function salvarProgresso() {
  localStorage.setItem("progressoMatematica", JSON.stringify(progresso));
  carregarProgresso()
}

function pontuar(acertou) {
  progresso.pontuacao += acertou ? 1 : -1;
  if (progresso.pontuacao < 0)
    progresso.pontuacao = 0;

  if (progresso.pontuacao >= 12) {
    progresso.nivelAtual++;
    progresso.pontuacao = 0;

    if (progresso.nivelAtual > 10) {
      const idx = series.indexOf(progresso.serieAtual);
      if (idx < series.length - 1) {
        console.log('indice antes: '+(idx))
        progresso.serieAtual = series[idx + 1];
        console.log('valor antes: '+ano.value)
        ano.value = idx+2;
        console.log('indice depois: '+(idx+1))
        console.log('valor depois: '+ano.value)
        progresso.nivelAtual = 1;
        progresso.anoSelecionado = idx+2;

        mostrarParabens(() => {
          salvarProgresso();
          atualizarVisual();
        });

        return

      } else {
        progresso.nivelAtual = 10;
        alert("🏁 Você concluiu todas as séries!");
      }
    }
    else {
    // Mostra mensagem de nível
    mostrarNivelMensagem();
    }
  }

  salvarProgresso();
  atualizarVisual();
}

function atualizarVisual() {
  const elSerie = document.getElementById("mat-serie-nivel");
  const elBarra = document.querySelector(".mat-barra .preenchido");
  const elPontos = document.getElementById("mat-pontos");

  if (elSerie)
    elSerie.textContent = `${progresso.serieAtual} - Nível ${progresso.nivelAtual}`;
  if (elBarra)
    elBarra.style.width = `${(progresso.pontuacao / 10) * 100}%`;
  if (elPontos)
    elPontos.textContent = `${progresso.pontuacao}/10`;
}

function mostrarParabens(callback) {
  const container = document.getElementById("parabens-container");
  const opcoes = document.getElementById("mat-option");
  const botoes = document.querySelector(".botoes");

  if (!container || !opcoes || !botoes) return;

  // Esconde as opções e botões do jogo
  opcoes.style.display = "none";
  botoes.style.display = "none";
  container.style.display = "block";

  document.getElementById("btn-continuar").onclick = () => {
    container.style.display = "none";
    opcoes.style.display = "grid";
    botoes.style.display = "flex";

    if (callback) callback(); // continuar jogo

    const proximoBtn = document.getElementById("mat-btn-pxm");
    if (proximoBtn) proximoBtn.click();
  };

  document.getElementById("btn-sair").onclick = () => {
    window.location.href = "../../index.html";
  };
}

function mostrarNivelMensagem() {
  const nivelContainer = document.getElementById("nivel-container");
  const nivelTexto = document.getElementById("nivel-texto");
  const opcoes = document.getElementById("mat-option");
  const botoes = document.querySelector(".botoes");

  if (!nivelContainer || !nivelTexto || !opcoes || !botoes)
    return;

  opcoes.style.display = "none";
  botoes.style.display = "none";

  nivelTexto.textContent = `👏👏 Parabéns! 👏👏\n👏Você subiu de nível!👏\nVocê passou para o nível ${progresso.nivelAtual}!`;
  nivelContainer.style.display = "block";

  document.getElementById("btn-continuar-nivel").onclick = () => {
    nivelContainer.style.display = "none";
    opcoes.style.display = "grid";
    botoes.style.display = "flex";
    salvarProgresso();
    atualizarVisual();

    // Sorteia nova pergunta
    const proximoBtn = document.getElementById("mat-btn-pxm");
    if (proximoBtn) proximoBtn.click();
  };

  document.getElementById("btn-sair-nivel").onclick = () => {
    window.location.href = "../../index.html";
  };
}

function limparProgresso(){
  progresso.serieAtual  = "1º ano";
  progresso.nivelAtual  = 1;
  progresso.pontuacao   = 0;
  ano.value = 1;
  atualizarVisual();
}

function getProgresso(){
  return progresso;
}

function setProgresso(usuario, serieAtual, nivelAtual, pontuacao){
  progresso.usuario = usuario;
  progresso.serieAtual = serieAtual;
  progresso.nivelAtual = nivelAtual;
  progresso.pontuacao = pontuacao;
}

function atualizaProgresso(){
    progresso.serieAtual = ano.options[ano.selectedIndex].textContent;
    progresso.nivelAtual = 1;
    progresso.pontuacao = 0;
    progresso.anoSelecionado = ano.value;
    salvarProgresso();
}

ano.addEventListener('change', ()=>{
  let valueAtual = progresso.anoSelecionado;
  if(confirm('Tem certeza que quer mudar de série?')){
    atualizaProgresso();
    console.log('Confirmado!');
  }else{
    ano.value = valueAtual;
    console.log('Não confirmado!');
  }
  console.log('indice select: '+ano.value);
  console.log('texto select: '+ano.options[ano.selectedIndex].textContent);
  console.log('indice progresso: '+(series.indexOf(progresso.serieAtual)+1));
  console.log('texto progresso: '+progresso.serieAtual);
});

export { pontuar, carregarProgresso, limparProgresso, getProgresso, setProgresso };
