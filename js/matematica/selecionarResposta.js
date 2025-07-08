import { divItemA, divItemB, divItemC, divItemD, btnResponder, stResp} from "./matematica.js";

let resposta = null;

function selecionarResposta(vlr, tag){
    
    if(stResp == false){
        //feedback.style.display = 'none';
        btnResponder.style.display = 'block';
        switch(tag){
            case 'a':
                divItemA.style.backgroundColor = 'gray'
                divItemB.style.backgroundColor = 'transparent'
                divItemC.style.backgroundColor = 'transparent'
                divItemD.style.backgroundColor = 'transparent'
                break;
            case 'b':
                divItemA.style.backgroundColor = 'transparent'
                divItemB.style.backgroundColor = 'gray'
                divItemC.style.backgroundColor = 'transparent'
                divItemD.style.backgroundColor = 'transparent'
                break;
            case 'c':
                divItemA.style.backgroundColor = 'transparent'
                divItemB.style.backgroundColor = 'transparent'
                divItemC.style.backgroundColor = 'gray'
                divItemD.style.backgroundColor = 'transparent'
                break;
            case 'd':
                divItemA.style.backgroundColor = 'transparent'
                divItemB.style.backgroundColor = 'transparent'
                divItemC.style.backgroundColor = 'transparent'
                divItemD.style.backgroundColor = 'gray'
                break;
        }
        resposta = vlr.textContent;   
    }
}

export {selecionarResposta, resposta}
