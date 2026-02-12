// Nicola Galeano 
// version: 12.02.2026
// Serie 3

// Parte 1
function saluta(){
    console.log("ciao ragazzi");
}
saluta()
// Parte 2
function salutaNome(nome){
    console.log("ciao " + nome);
}
salutaNome("Anna");
salutaNome("Luca");
// Parte 3
function somma(a,b){
    let ris = a + b;
    return ris;
}
console.log(somma(1,2));
// Parte 4
const quadrato = (x) => {
    let ris = x*x ;
    console.log(ris);
}
quadrato(8);

// Parte 5
const quadrato2 = x => x * x;
console.log(quadrato2(5))

// Parte 6
function mediaNormale(v1, v2, v3) {
 let risultato = (v1 + v2 + v3) / 3;
 if (risultato >= 6) {
 return "Promosso con media: " + risultato;
 } else {
 return "Bocciato con media: " + risultato;
 }
}
console.log(mediaNormale(4, 5, 4));

const mediaArrowLunga = (v1, v2, v3) => {
 let risultato = (v1 + v2 + v3) / 3;
 if (risultato >= 6) {
 return "Promosso con media: " + risultato;
 } else {
 return "Bocciato con media: " + risultato;
 }
};
console.log(mediaArrowLunga(5, 3, 3));

// Parte 7
function esempio(x){
    //let x = 10;
    console.log(x);//non va perché x è già dichiarata
}

// Parte 8
function doppio(n) {
 return n * 2;
}
console.log(doppio(7));

const doppioPiccolo = n => n * 2;
console.log(doppioPiccolo(7))

// Parte 9
function media(v1, v2, v3) {
 let risultato = (v1 + v2 + v3) / 3;
 if (risultato >= 6) {
 return "Promosso con media: " + risultato;
 } else {
 return "Bocciato con media: " + risultato;
 }
}
console.log(media(2, 6, 6));