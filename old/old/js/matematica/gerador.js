export function gerador(resultado){

    console.log('parametro recebido: '+ resultado);

    let lista = [];

    for(let i = -5; i<=5; i++){
        if(i >= 0)
            lista[i+5] = i+1 + Number(resultado);
        else
        lista[i+5] = i + Number(resultado);    
    }

    let listaAleatoria = new Set();
    while(listaAleatoria.size <3){
        let n1 = Math.floor(Math.random()*11);
        listaAleatoria.add(lista[n1]);
    }

    listaAleatoria.add(Number(resultado))
    let listaAux = Array.from(listaAleatoria);

    let listaOpcoes = new Set();
    while(listaOpcoes.size < 4){
        let n1 = Math.floor(Math.random()*4);
        listaOpcoes.add(listaAux[n1]);
    }
    return Array.from(listaOpcoes);
}