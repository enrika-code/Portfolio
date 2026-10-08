"use strict";

let stato = "";
let giocatore1 = 0;
let giocatore2 = 0;
let colore = "";

let cella = document.getElementsByTagName("td");
let arrayDiCelle = Array.from(cella);
for(let i = 0; i < arrayDiCelle.length; i++){
    arrayDiCelle[i].setAttribute("id",i);
    let id = arrayDiCelle[i].getAttribute("id");
    arrayDiCelle[i].addEventListener("click", disegna,{once:true});
    arrayDiCelle[i].addEventListener("click", segna);
}

let tabella1 = arrayDiCelle.slice(1,122);
let tabella2 = arrayDiCelle.slice(122,242);
let escluse = document.getElementsByClassName("senza");
escluse = Array.from(escluse);

function inserisciNome(event){
    let tabella = event.target;
    let giocatore = tabella.getAttribute("id");
    let nome = prompt("Inserisci il nome");
   
    if(!nome){
        if(giocatore === "giocatore1"){
            nome = "Giocatore1";
        }else{
            nome = "Giocatore2";
        }
    }
    tabella.innerHTML = nome.toUpperCase();
}    


function disegna(event){
    if(!stato){
    let cellaColorata = event.target;
    if(!escluse.includes(cellaColorata)){
    cellaColorata.style.backgroundColor = colore; 
    cellaColorata.setAttribute("class","nave");
    if(tabella1.includes(cellaColorata)){ 
        giocatore1 +=1;
        console.log("navi1:",giocatore1);    
    }
    else{
        giocatore2 +=1;
        console.log("navi2:",giocatore2); 
    }
}}
}

function coloraCella(event){
    let pulsante = event.target;
    colore = pulsante.getAttribute("id");
        return colore;
}

function nascondi(){
  for (let i = 0; i < arrayDiCelle.length; i++) {
    let nave = document.getElementsByClassName("nave");
    if (nave){ 
        arrayDiCelle[i].style.backgroundColor = "transparent";
        }
    }  
}

function gioca(){
    stato = true;
}

function colora(){
    stato = false;
}

function segna(event){
    if(stato){
        let cellaCliccata = event.target;
        if(!escluse.includes(cellaCliccata)){
            let occupata = cellaCliccata.getAttribute("class");
                if(!occupata){
                    cellaCliccata.innerText = "⭕";
                }else{
                    cellaCliccata.innerText = "❌";
                    cellaCliccata.style.backgroundColor = colore;
                    if(tabella1.includes(cellaCliccata)){
                        giocatore1 -= 1;
                        console.log("rimaste1",giocatore1);
                        if(giocatore1 === 0){
                            stato = false;
                            let nome = document.getElementById("giocatore2").innerHTML;
                            document.getElementById("tabellone").innerHTML = (`Complimenti, ${nome}, hai vinto!`);
                            audio2(); 
                            for(let i = 0; i < arrayDiCelle.length; i++){
                            arrayDiCelle[i].removeEventListener("click", disegna);
                            }
                        }
                    }else{  
                        giocatore2 -= 1;
                        console.log("rimaste2",giocatore2);                     
                        if(giocatore2 === 0){        
                            stato = false;
                            let nome = document.getElementById("giocatore1").innerHTML;
                            document.getElementById("tabellone").innerHTML = (`Complimenti, ${nome}, hai vinto!`);
                            audio2();
                            for(let i = 0; i < arrayDiCelle.length; i++){
                            arrayDiCelle[i].removeEventListener("click", disegna);
                            }
                        }   
                    }
                }
            }
        }
    }

    

function spiegazioni(){
  alert("Si gioca in due. Ogni giocatore sceglie la tabella che vuole, inserendo il proprio nome. Poi si disegnano e si nascondono le navi.\nSono previste 10 navi (potete fare anche meno) per ciascun giocatore:\n1 da 4 riguadri, 2 da 3 riq., 3 da 2riq., 4 da 1riq.\nAttenzione: le navi non devono toccarsi e non possono essere disegnate in obliquo!\nA turno si 'spara' puntando e cliccando sulla casella desiderata nella tabella dell'avversario.\nBuon divertimento!")
}

function audio() {
  let musica = document.getElementById('uno');
  musica.play(); 
}

function audio2() {
  let musica2 = document.getElementById('tre');
  musica2.play();
}
