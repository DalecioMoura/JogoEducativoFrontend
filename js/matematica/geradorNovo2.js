export function gerador(resultado) {
    const correto = Number(resultado);
    console.log('numero correto: '+correto)
    const corretoStr = correto.toString();
    console.log('numero string correto: '+corretoStr)
    const digitos = corretoStr.length;
    console.log('quantidade de digitos do numero: '+digitos)
    
    // Define quantos dígitos finais devem ser iguais
    const digitosFixos = digitos === 1 ? 0 : digitos - 1;
    console.log('digitos fixos corretos: '+digitosFixos)
    const sufixoCorreto = corretoStr.slice(-digitosFixos);
    console.log('digitos finais corretos: '+sufixoCorreto);

    const alternativas = new Set();

    while (alternativas.size < 3) {
        // Gera uma parte aleatória para os dígitos iniciais
        const parteInicial = Math.floor(Math.random() * Math.pow(10, digitos - digitosFixos));
        console.log('digitos fixos incorretos: '+parteInicial)

        // Concatena com o sufixo correto
        const tentativaStr = parteInicial.toString().padStart(digitos - digitosFixos, '0') + sufixoCorreto;
        console.log('tentativa incorreta: '+tentativaStr)
        const tentativa = Number(tentativaStr);

        // Garante que não seja igual ao correto
        if (tentativa !== correto) {
            alternativas.add(tentativa);
        }
    }

    // Adiciona o resultado correto e embaralha
    alternativas.add(correto);
    const opcoes = Array.from(alternativas).sort(() => Math.random() - 0.5);
    console.log('opções: '+opcoes)
    return opcoes;
}
