// Nicola Galeano 
// version: 05.02.2026
// Serie 1

// Parte 2
console.log("Test head");
console.warn("Attenzione: prova di avviso");
console.error("Errore di esempio!");
console.clear();

// Parte 3
let nome = "mario";
const scuola = "SAM Trevano";
// scuola = "Liceo di Belli";

// Parte 4
let mioNome = "Nicola";
let eta = 17;
let bool = true;
let undef;
let nullo = null;
let big = 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890n;

console.log(typeof mioNome);
console.log(typeof eta);
console.log(typeof bool);
console.log(typeof undef);
console.log(typeof nullo);
console.log(typeof big);

/*
// Parte 5
if (true) {
 var x = 10;
 let y = 20;
}
console.log(x); // Legge al di fuori dello scope
console.log(y); // Non legge al di fuori dello scope
*/

// Parte 6
let a = 12;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Parte 7
let anni = 16;
let isStudente = true;

console.log(anni >= 18 && isStudente);
console.log(anni >= 18 || isStudente);
console.log(!isStudente);

// Parte 8
let etaParte8 = 20;
if (etaParte8 >= 18){
    console.log("Puoi entrare.");
}else {
    console.log("Sei troppo giovane.");
}

// Parte 9 

let voto = 20;
if (voto < 6){
    console.log("Insufficiente.");
}else if (voto < 9) {
    console.log("Sufficiente.");
}else {
    console.log("Ottimo.");
}

// Parte 10
let colore = "verde";

switch (colore) {
    case "rosso":
        console.log("Hai scelto rosso");
        break;

    case "blu":
        console.log("Hai scelto blu");
        break;

    default:
        console.log("Colore non riconosciuto");
}

// Parte 11
let etaParte11 = 15;

console.log("Controllo età...");

if (etaParte11 >= 18) {
    console.log("Accesso consentito");
} else if (etaParte11 >= 14) {
    console.warn("Accesso limitato: contenuti riservati ai maggiorenni");
} else {
    console.error("Errore: utente troppo giovane per accedere!");
}
