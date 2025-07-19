import { selecionarPergunta } from "./selecionarPerguntas.js";



export function somar(serie=1, nivel=1){
    const dificuldadeSerie3e4 = [100, 1000, 10000, 100000, 1000000, 100, 1000, 10000, 100000, 1000000];
    const dificuldadeSerie5 = [10000, 100000, 1000000, 10000, 100000, 1000000, 10000, 100000, 1000000, 1000000];
    if(nivel>10)
        nivel=10;

    console.log("somar");
    console.log("serie: "+ serie);
    console.log("nivel: "+ nivel);
    
    if(serie<3){ // terceiro e quarto ano.
        if(nivel<=5){ //níveis de 1 a 5.
            let n1 = Math.floor(Math.random()*dificuldadeSerie3e4[nivel-1])+1;
            let n2 = Math.floor(Math.random()*dificuldadeSerie3e4[nivel-1])+1;
            selecionarPergunta(`${n1} + ${n2}`, (n1 + n2));
            console.log(`Resposta: ${n1 + n2}`);
        }
        else{   //níveis de 6 a 10
            let n1 = Math.floor(Math.random()*dificuldadeSerie3e4[nivel-1])+1;
            let n2 = Math.floor(Math.random()*dificuldadeSerie3e4[nivel-1])+1;
            let n3 = Math.floor(Math.random()*dificuldadeSerie3e4[nivel-1])+1;
            selecionarPergunta(`${n1} + ${n2} + ${n3}`, (n1 + n2 + n3));
            console.log(`Resposta: ${n1 + n2 + n3}`);

        }   
    }
    else{   //quinto ano.
        if(nivel<=3){ //níveis de 1 a 3
            let n1 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n2 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n3 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            selecionarPergunta(`${n1} + ${n2} + ${n3}`, (n1 + n2 + n3));
            console.log(`Resposta: ${n1 + n2 + n3}`);
        }
        else if(nivel<=6){ //níveis de 4 a 6
            let n1 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n2 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n3 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n4 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            selecionarPergunta(`${n1} + ${n2} + ${n3} + ${n4}`, (n1 + n2 + n3 + n4));
            console.log(`Resposta: ${n1 + n2 + n3 + n4}`);
        }
        else if(nivel<=9){ //níveis de 7 a 9
            let n1 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n2 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n3 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n4 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n5 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            selecionarPergunta(`${n1} + ${n2} + ${n3} + ${n4} + ${n5}`, (n1 + n2 + n3 + n4 + n5));
            console.log(`Resposta: ${n1 + n2 + n3 + n4 + n5}`);

        }
        else{   //nível 10
            let n1 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n2 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n3 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n4 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n5 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            let n6 = Math.floor(Math.random()*dificuldadeSerie5[nivel-1])+1;
            selecionarPergunta(`${n1} + ${n2} + ${n3} + ${n4} + ${n5} + ${n5}`, (n1 + n2 + n3 + n4 + n5 + n6));
            console.log(`Resposta: ${n1 + n2 + n3 + n4 + n5 + n6}`);      
        }
    }
}