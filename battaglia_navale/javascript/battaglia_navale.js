let lista = [" ","A", "B", "C", "D", "E", "F", "G", "H", "I", "J","*","A*", "B*", "C*", "D*", "E*", "F*", "G*", "H*", "I*", "J*"];
let colonna = [0,1,2,3,4,5,6,7,8,9,10,0];
let riga = [];
let indice = [];
let listaNavi = [];
let giocoAttivo = false;
let giocatore1 = 0;
let giocatore2 = 0;
let nome1 = "";
let nome2 = "";

for(let i = 0; i < 22; i++){
  for (let j = 0; j < 11; j++){
    riga [i] = lista[i];
    indice.push( riga[i] + colonna[j]);  
  }
}

const mymap = new Map();
const myNodelist = document.querySelectorAll("td");
for (let i = 0; i < myNodelist.length; i++) {
  let code = `${indice[i]}`;
  myNodelist[i].style.backgroundColor = "white";
  myNodelist[i].style.color = "red";
  myNodelist[i].setAttribute("id", code);
  myNodelist.forEach(elemento => {
  elemento.addEventListener('click', segna);
  elemento.addEventListener('click', disegna);
  });
  mymap.set(code, myNodelist[i]);
}


let miaLista = Array.from(myNodelist); 
let tabella1 = miaLista.slice(1, 122); 
let tabella2 = miaLista.slice(122, 242);
let tabellone = document.getElementById("tabellone");
let sceltaTabella1 = document.getElementById("giocatore1");
let sceltaTabella2 = document.getElementById("giocatore2");


const colore_riquadro = new Map(); /*mappa di celle colorate*/
/*disegno e conto le navi per ogni giocatore*/
function disegna(){
  if(giocoAttivo === false){
    let eltd = mymap.get(this.id); 
  if (eltd.style.backgroundColor === "white"){
      eltd.style.backgroundColor = colore; 
      colore_riquadro.set(eltd,colore); 
      if(tabella1.includes(eltd)){
        giocatore1 += 1; 
        console.log("navi giocatore1 ",giocatore1);
      }else{
        giocatore2 += 1;
        console.log("navi giocatore2 ", giocatore2);
      }
    } 
  }
}
/*funzione del gioco, controllo se la nave è stata colpita o meno e in che tabella, scalo le navi colpite dal conto del giocatore coinvolto per poter dichiarare il vincitore*/
function segna(){
  if(giocoAttivo === true){
  let musica = document.getElementById('uno');
  musica.pause();  
  eltd = mymap.get(this.id) 
  if (eltd.style.backgroundColor === "white"){
    eltd.innerText = "⭕"}
  else{
    if(eltd.innerText != "❌"){
    eltd.innerText = "❌";
    ritorna = colore_riquadro.get(eltd,colore);
    eltd.style.backgroundColor = ritorna;
    if(tabella1.includes(eltd)){  
      giocatore1 -= 1;
      if (!nome2 || nome2 === " "){
        nome2 = "GIOCATORE 2";
      }
      if (giocatore1===0){ 
      tabellone.innerText=(`${nome2.toUpperCase()}, HAI VINTO!`);
      giocoAttivo = false;
      colore = "";  
      audio2();
      }
    }else{
      giocatore2 -= 1;
      if (!nome1 || nome1 === " "){
        nome1 = "GIOCATORE 1";
      }
      if (giocatore2===0){
      tabellone.innerText=(`${nome1.toUpperCase()}, HAI VINTO!`);
      giocoAttivo = false;
      colore = "";
      audio2();
    }
        }
      }
    }
  }
}

let colore = "";  
function blue(){ 
  colore = "rgba(64, 24, 239, 0.649)";  
}
function gold(){
  colore = "rgb(255, 179, 0)";
}

function green(){ 
  colore = "rgb(18, 213, 18)";
}
function brown(){
  colore = "rgb(162, 5, 5)";
}
 
function avviso(){
  alert("Per disegnare clicca sul colore preferito e poi nella griglia della tabella.");
}
function spiegazioni(){
  alert("Si gioca in due. Ogni giocatore sceglie la tabella che vuole, inserendo il proprio nome. Poi si disegnano e si nascondono le navi.\nSono previste 10 navi (potete fare anche meno) per ciascun giocatore:\n1 da 4 riguadri, 2 da 3 riq., 3 da 2riq., 4 da 1riq.\nAttenzione: le navi non devono toccarsi e non possono essere disegnate in obliquo!\nA turno si 'spara' puntando e cliccando sulla casella desiderata nella tabella dell'avversario.\nBuon divertimento!")
}
function gioca(){
  giocoAttivo  = true;
}
/*rendo le navi disegnate invisibili*/
function nascondi(){
  for (let i = 0; i < myNodelist.length; i++) {
  if (myNodelist[i].style.backgroundColor !=="white"){ 
      myNodelist[i].style.backgroundColor = "transparent";
    }
  }  
}

function audio() {
  let musica = document.getElementById('uno');
  musica.play(); 
}

function audio2() {
  let musica2 = document.getElementById('tre');
  musica2.play();
}

function annulla(){
  giocoAttivo = false;
  const esclusi = [" 0"," 1"," 2"," 3"," 4"," 5"," 6"," 7"," 8"," 9"," 10","*0","*1","*2","*3","*4","*5","*6","*7","*8","*9","*10","A0","B0","C0","D0","E0","F0","G0","H0","I0","J0","A*0","B*0","C*0","D*0","E*0","F*0","G*0","H*0","I*0","J*0"]; 
  sceltaTabella1.innerText = "Tabella1/Inserisci il tuo nome";
  sceltaTabella2.innerText = "Tabella2/Inserisci il tuo nome";
  tabellone.innerText = "BATTAGLIA NAVALE";
  nome1 = " ";
  nome2 = " ";
  let musica = document.getElementById('uno');
  musica.pause();
  let musica2 = document.getElementById('tre');
  musica2.pause();
  giocatore1 = 0;
  giocatore2 = 0;
  for (let i = 0; i < myNodelist.length; i++) {
    if (myNodelist[i].style.backgroundColor !=="white"){ 
      myNodelist[i].style.backgroundColor = "white";
      myNodelist[i].innerText="";}
    else {
      if(!esclusi.includes(myNodelist[i].id)){  
        myNodelist[i].innerText="";
      }
    }
  }
}

function inserisci_nome(){
    nome1 = prompt("Digita il tuo nome");  
    sceltaTabella1.innerText = nome1.toUpperCase();
  }
 
function inserisci_nome1(){
    nome2 = prompt("Digita il tuo nome");
    sceltaTabella2.innerText = nome2.toUpperCase();
  }
