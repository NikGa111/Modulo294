// Nicola Galeano 
// version: 26.02.2026
// Serie 5

// Parte 1
let bottone = document.querySelector("#clicca");
bottone.addEventListener("click", function() {
    console.log("Hai cliccato il bottone!");
    });

// Parte 2
let inputNome = document.querySelector("#nome");
let outputSaluto = document.querySelector("#saluto");
inputNome.addEventListener("input", function() {
    outputSaluto.textContent = `Ciao ${inputNome.value}!`;
    });

// Parte 3
let formo = document.querySelector("#formo");
let invioForm = document.querySelector("#invioForm");

    formo.addEventListener("submit", function(event) {
      event.preventDefault();
      console.log("Form inviato!");
    });

// Parte 4
let nuovoTitolo = document.querySelector("#nuovoTitolo");
let cambialo = document.querySelector("#cambialo");
let titoloBrutto = document.querySelector("#titoloBrutto");
cambialo.addEventListener("click", function() {
    titoloBrutto.textContent = nuovoTitolo.value;
    });

// Parte 5
benvenuti = document.querySelector("#benvenuti");
setTimeout(() => {
benvenuti.textContent = "Benvenuti!";
}, 3000);

// Parte 6
let timer = document.querySelector("#timer");
let contatore = 0;
let id = setInterval(() => {
 contatore++;
 console.log("Contatore:", contatore);
timer.textContent = contatore;
 if (contatore === 5) {
 clearInterval(id); 
 }
}, 1000);

// Parte 7
let timerIndietro = document.querySelector("#timerIndietro");
let contatoreIndietro = 5;
let idIndietro = setInterval(() => {
contatoreIndietro--;
console.log("Contatore:", contatoreIndietro);
timerIndietro.textContent = contatoreIndietro;
 if (contatoreIndietro === 0) {
    timerIndietro.textContent = "Tempo scaduto!";
 clearInterval(idIndietro); 
 }
}, 1000);

// Parte 8
let numeroConto = 0;
let counter = document.querySelector("#counter");
let contatoreClick = document.querySelector("#contatore");
counter.addEventListener("click", function() {
    numeroConto = numeroConto + 1
    contatoreClick.textContent = numeroConto;
    });