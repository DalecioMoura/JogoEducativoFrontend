export function gerador(resultado) {
    const correto = Number(resultado);
    console.log('correto: '+correto);
    const ultimoDigitoCorreto = correto % 10;
    console.log('ultimo digito: '+ultimoDigitoCorreto);
    let alternativas = new Set();
    console.log('set criado: '+alternativas);

    while (alternativas.size < 3) {
        console.log('Entrou no while!')
        let desvio = Math.floor(Math.random() * 100) + 1;
        console.log('numero sorteado: '+desvio)
        let tentativa = correto + desvio;

        if (tentativa % 10 === ultimoDigitoCorreto && tentativa !== correto) {
            console.log('entrou no if!');
            alternativas.add(tentativa);
        }
    }

    alternativas.add(correto);
    console.log('alternativas: '+alternativas);

    const opcoes = Array.from(alternativas).sort(() => Math.random() - 0.5);
    console.log('resultado opções: '+opcoes);
    return opcoes;
}
