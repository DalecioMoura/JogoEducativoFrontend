import { selecionarPergunta } from "./selecionarPerguntas.js";


let numeroAleatorio = (nivel)=>{
        return Math.floor(Math.random()*nivel)+1;
    }

export function subtrair(serie=1, nivel=1){
    const dificuldadeSerie3e4 = [100, 1000, 10000, 100000, 1000000, 100, 1000, 10000, 100000, 1000000];
    const dificuldadeSerie5 = [10000, 100000, 1000000, 10000, 100000, 1000000, 10000, 100000, 1000000, 1000000];
    if(nivel>10)
        nivel=10;
    
    console.log("subtração");
    console.log("serie: "+ serie);
    console.log("nivel: "+ nivel);

    if(serie<3){ //terceiro e quarto ano.
        if(nivel<=5){ //níveis de 1 a 5
            let n1 = numeroAleatorio(dificuldadeSerie3e4[nivel-1]);
            let n2 = numeroAleatorio(dificuldadeSerie3e4[nivel-1]);
            if(n1 > n2){
                console.log(`Resposta: ${(n1 - n2)}`);
                selecionarPergunta(`${n1} - ${n2}`, (n1 - n2));   
            }
            else{
                console.log(`Resposta: ${(n2 - n1)}`);
                selecionarPergunta(`${n2} - ${n1}`, (n2 - n1));
            }
        }
        else{ //níveis de 6 a 10
            let n1 = numeroAleatorio(dificuldadeSerie3e4[nivel-1]);
            let n2 = numeroAleatorio(dificuldadeSerie3e4[nivel-1]);
            let n3 = numeroAleatorio(dificuldadeSerie3e4[nivel-1]);
            let expressao = '';
            let aux = 0;

            if(n1 > n2){
                expressao = `${n1} - ${n2}`;
                aux = n1 - n2;   
            }
            else{
                expressao = `${n2} - ${n1}`;
                aux = n2 - n1;
            }

            if(aux > n3){
                console.log(`Resposta: (${aux - n3})`);
                selecionarPergunta(`(${expressao}) - ${n3}`, (aux - n3));   
            }
            else{
                console.log(`Resposta: ${n3 - aux}`);
                selecionarPergunta(`${n3} - (${expressao})`, (n3 - aux));
            }
        }
    }
    else{ //quinto ano.
        if(nivel<=3){
            let n1 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n2 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n3 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let expressao = '';
            let aux = 0;
            console.log('n1: '+n1);
            console.log('n2: '+n2);
            console.log('n3: '+n3);
            if(n1 > n2){
                expressao = `${n1} - ${n2}`;
                aux = n1 - n2;   
            }
            else{
                expressao = `${n2} - ${n1}`;
                aux = n2 - n1;
            }

            if(aux > n3){
                console.log(`Resposta: ${aux - n3}`);
                selecionarPergunta(`(${expressao}) - ${n3}`, (aux - n3));   
            }
            else{
                console.log(`Resposta: ${n3 - aux}`);
                selecionarPergunta(`${n3} - (${expressao})`, (n3 - aux));
            }
        }
        else if(nivel<=6){
            let n1 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n2 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n3 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n4 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let expressao = ['', ''];
            let i = 0;
            let aux = 0;
            let aux2 = 0;
            
            let calcular = (parametro1, parametro2)=>{
                if(parametro1 > parametro2){
                    expressao[i] = `(${parametro1} - ${parametro2})`;
                    i++
                    return parametro1 - parametro2;   
                }
                else{
                    expressao[i] = `(${parametro2} - ${parametro1})`;
                    i++
                    return parametro2 - parametro1;
                }
            }

            aux = calcular(n1, n2);
            aux2 = calcular(n3, n4);

            if(aux > aux2){
                console.log(`Resposta: ${aux - aux2}`);
                selecionarPergunta(`${expressao[0]} - ${expressao[1]}`, (aux - aux2));   
            }
            else{
                console.log(`Resposta: ${aux2 - aux}`);
                selecionarPergunta(`${expressao[1]} - ${expressao[0]}`, (aux2 - aux));  
            }
        }
        else if(nivel<=9){
            let n1 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n2 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n3 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n4 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n5 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            const expressao = ['', '', ''];
            let i = 0;
            
            let calcular = (parametro1, parametro2)=>{
                if(parametro1 > parametro2){
                    if(i==2)
                        expressao[i] = `(${expressao[0]} - ${expressao[1]})`;
                    else
                        expressao[i] = `(${parametro1} - ${parametro2})`;
                    i++;
                    return parametro1 - parametro2;   
                }
                else{
                    if(i==2)
                        expressao[i] = `(${expressao[1]} - ${expressao[0]})`;
                    else
                        expressao[i] = `(${parametro2} - ${parametro1})`;
                    i++;
                    return parametro2 - parametro1;
                }
                
            }

            let aux = calcular(n1, n2);
            let aux2 = calcular(n3, n4);
            let aux3 = calcular(aux, aux2);

             if(aux3 > n5){
                console.log(`Resposta: ${aux3 - n5}`);
                selecionarPergunta(`${expressao[2]} - ${n5}`, (aux3 - n5));
            }
            else{
                console.log(`Resposta: ${n5 - aux3}`);
                selecionarPergunta(`${n5} - ${expressao[2]}`, (n5 - aux3));
            }
        }
        else{
            let n1 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n2 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n3 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n4 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n5 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            let n6 = numeroAleatorio(dificuldadeSerie5[nivel-1]);
            const expressao = ['', '', '', ''];
            let i = 0;
            
            let calcular = (parametro1, parametro2)=>{
                if(parametro1 > parametro2){
                    if(i==3)
                        expressao[i] = `(${expressao[0]} - ${expressao[1]})`;
                    else
                        expressao[i] = `(${parametro1} - ${parametro2})`;
                    i++;
                    return parametro1 - parametro2;   
                }
                else{
                    if(i==3)
                        expressao[i] = `(${expressao[1]} - ${expressao[0]})`;
                    else
                        expressao[i] = `(${parametro2} - ${parametro1})`;
                    i++;
                    return parametro2 - parametro1;
                }
                
            }

            let aux = calcular(n1, n2);
            let aux2 = calcular(n3, n4);
            let aux3 = calcular(n5, n6);
            let aux4= calcular(aux, aux2);

             if(aux4 > aux3){
                console.log(`Resposta: ${aux4 - aux3}`);
                selecionarPergunta(`${expressao[3]} - ${expressao[2]}`, (aux4 - aux3));
            }
            else{
                console.log(`Resposta: ${aux3 - aux4}`);
                selecionarPergunta(`${expressao[2]} - ${expressao[3]}`, (aux3 - aux4));
            }

        }

    }   
}
