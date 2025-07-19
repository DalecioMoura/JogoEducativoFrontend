export function gerador(resultado) {
    const correto = Number(resultado);
    const corretoStr = correto.toString();
    const digitos = corretoStr.length;

    const alternativas = new Set();

    while (alternativas.size < 3) {
        let tentativaStr;

        if (digitos === 1) {
            // Varia de resultado ±1 até ±5
            const variacao = Math.floor(Math.random() * 11) - 5; // -5 a +5
            const tentativa = correto + variacao;

            if (tentativa >= 0 && tentativa !== correto) {
                tentativaStr = tentativa.toString();
            }

        } else if (digitos === 2) {
            // Varia o primeiro dígito de ±1 a ±5
            const d1 = parseInt(corretoStr[0]);
            const d2 = corretoStr[1];

            const variacao = Math.floor(Math.random() * 11) - 5;
            const novoD1 = d1 + variacao;

            if (novoD1 >= 1 && novoD1 <= 9) {
                tentativaStr = `${novoD1}${d2}`;
            }

        } else {
            // Varia o segundo dígito de 0 a 9
            const digitosArray = corretoStr.split('');
            const novoD2 = Math.floor(Math.random() * 10).toString();

            if (novoD2 !== digitosArray[1]) {
                digitosArray[1] = novoD2;
                tentativaStr = digitosArray.join('');
            }
        }

        const tentativa = Number(tentativaStr);

        if (tentativaStr && tentativa !== correto && tentativaStr.length === digitos) {
            alternativas.add(tentativa);
        }
    }

    alternativas.add(correto);
    console.log(alternativas)

    return Array.from(alternativas).sort(() => Math.random() - 0.5);
}
