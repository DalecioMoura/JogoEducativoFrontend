import { selecionarPergunta } from "./selecionarPerguntas.js";

export function multiplicar(serie=1, nivel=1){

    const dificuldadeSerie3e4 = [100, 1000, 10000, 100000, 1000000, 100, 1000, 10000, 100000, 1000000];
    const dificuldadeSerie5 = [1000, 10000, 100000, 1000000, 10000000, 1000, 10000, 100000, 1000000, 10000000];
    const multiplicador3 = [10, 10, 10, 10, 10, 100, 100, 100, 100, 100];
    const multiplicador4 = [10, 10, 10, 100, 100, 100, 1000, 1000, 1000, 1000];
    const multiplicador5 = [100, 100, 100, 100, 100, 1000, 1000, 1000, 1000, 1000];
    let multiplicando = 0;
    let multiplicador = 0;
    if(nivel>10)
        nivel=10;
    
    console.log("multiplicação");
    console.log(`Debug: Serie=${serie}, Nivel=${nivel}`); // Adicione para depuração
    console.log("Série: "+typeof(serie));
    switch(Number(serie)){
        
        case 1: 
            multiplicando = Math.floor(Math.random()*dificuldadeSerie3e4[nivel-1])+1;
            multiplicador = Math.floor(Math.random()*multiplicador3[nivel-1])+1;
            console.log("Série: "+typeof(serie));
            console.log(`Resposta: ${(multiplicando * multiplicador)}`);
            selecionarPergunta(`${multiplicando} x ${multiplicador}`, (multiplicando * multiplicador));
        break;
        case 2:
            multiplicando = Math.floor(Math.random()*dificuldadeSerie3e4[nivel-1])+1;
            multiplicador = Math.floor(Math.random()*multiplicador4[nivel-1])+1;
            console.log("Série: "+typeof(serie));
            console.log(`Resposta: ${(multiplicando * multiplicador)}`);
            selecionarPergunta(`${multiplicando} x ${multiplicador}`, (multiplicando * multiplicador));
        break;
        case 3:
            multiplicando = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            multiplicador = Math.floor(Math.random()*multiplicador5[nivel-1])+1;
            console.log("Série: "+typeof(serie));
            console.log(`Resposta: ${(multiplicando * multiplicador)}`);
            selecionarPergunta(`${multiplicando} x ${multiplicador}`, (multiplicando * multiplicador));
        break;
        default:
            console.log("Série inválida!")
            console.log("Série: "+serie);
            console.log("Nível: "+nivel);
            console.log("Série: "+typeof(serie));
    }
    
}