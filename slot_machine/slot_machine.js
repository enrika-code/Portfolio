let numero = 0;
let gioco = true;
const frutta = ["image/uva.png", "image/fragola.png", "image/arancia.png", "image/banana.png", "image/limone.png"];

function gira(){
    let lista = [];
    for (let i = 0; i < 3; i++){
        numero = Math.floor(Math.random()*5)+1; /*genero un numero*/
        console.log(numero);
        if (numero===1){
            numero=frutta[0]
        }
        if (numero===2){
            numero=frutta[1]
        }
        if (numero===3){
            numero=frutta[2]
        }
        if (numero===4){
            numero=frutta[3]
        }
        if (numero===5){
            numero=frutta[4]
        }
        //ad ogni numero ho assocciato un elemento della lista, cioé un tipo di frutta
        lista.push(numero); /*metto il risultato in un'altra lista*/  
        console.log(lista); 
        if(gioco != false){
            let riquadro1 = document.getElementById("prima");/*punto sul elemento HTML*/
            riquadro1.src = lista[0];/* modifico la sorgente dell'immagine*/
            let riquadro2 = document.getElementById("seconda");
            riquadro2.src = lista[1];
            let riquadro3 = document.getElementById("terza");
            riquadro3.src = lista[2]; 
        
            if (lista[0]!==lista[1] && lista[0]!==lista[2] && lista[1] !== lista[2]){
                let frase = document.getElementById("testo");/*prendo elemento HTML*/
                frase.textContent = "Questa volta non ci sei riuscito! Prova ancora!";/*inserisco il testo*/
            }
            if(lista[0]===lista[1] || lista[0]===lista[2] || lista[1]===lista[2]){
                let frase = document.getElementById("testo");
                frase.textContent = "Peccato! C'eri quasi! Riprova!";
            }
            if (lista[0]===lista[1] && lista[1]===lista[2]){
                let frase = document.getElementById("testo");
                frase.textContent = "Complimenti! Hai vinto!";
                var musica = document.querySelector('audio');/*prendo elemento audio HTML*/
                musica.play();/*avvio l'audio*/
                gioco = false;
            }
        }
    }
} 

