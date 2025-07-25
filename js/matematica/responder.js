import { feedback, btnResponder } from "./matematica.js";
import { getResultado } from "./selecionarPerguntas.js";
import { getRespostaSelecionada, resetarRespostaSelecionada, setStResposta, getStResposta } from "./selecionarResposta.js";
import { pontuar } from "../avancoNivel/progressoMatematica.js";

export function responder(){
    let stResp = true;
    feedback.style.display = 'block';

    const respostaSelecionada = getRespostaSelecionada();
    const resultado = getResultado();

    if(respostaSelecionada == resultado){
        console.log("resposta correta");
        feedback.textContent = 'Sua resposta está correta!';
        feedback.style.color = 'green';
        pontuar(true);
    }        
    else{
        console.log("resposta errada!");
        feedback.textContent = 'Sua resposta está errada!';
        feedback.style.color = 'red';
        pontuar(false);
    }

    btnResponder.style.display = 'none';

    //resetarRespostaSelecionada();

    setStResposta(true);

    return stResp;
}