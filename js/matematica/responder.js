import { feedback, btnResponder } from "./matematica.js";
import { resultado } from "./selecionarPerguntas.js";
import { resposta } from "./selecionarResposta.js";

export function responder(){
    let stResp = true;
    feedback.style.display = 'block';
    if(resposta == resultado){
        console.log("resposta correta");
        feedback.textContent = 'Sua resposta está correta!';
        feedback.style.color = 'green';
        let pontuacao = document.getElementById('mat-pontuacao');
        pontuacao.value = Number(pontuacao.value) + 1;
        
    }        
    else{
        console.log("resposta errada!");
        feedback.textContent = 'Sua resposta está errada!';
        feedback.style.color = 'red';
    }
    btnResponder.style.display = 'none';
    return stResp;
}