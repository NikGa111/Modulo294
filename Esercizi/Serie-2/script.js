// Nicola Galeano 
// version: 05.02.2026
// Serie 2

// Parte 1

// 1.1
for (let i = 1; i <= 10; i++) {
    console.log(i); 
}
// 1.2
for (let i = 1; i <= 10; i++) {
    console.log(5 * i); 
}
// 1.3
for (let i = 10; i >= 1; i--) {
    console.log(i); 
}

// Parte 2

//2.1
let a = 1;
while (a < 6) {
    console.log(a);
    a++;
}

// 2.2
somma = 0;
let b = 1;
while (b <= 100) {
    somma +=b;
    b++;
}
console.log(somma);

// Parte 3
let x = 10;
do { //viene fatto almeno una volta perché prima esegue il codice poi verifica la condizione
    console.log(x);
    x--;
}while (x>5);


// Parte 4
let studenti = ["Luca", "Anna", "Marco"];
for (const studente of studenti) {
    console.log(studente);
}
// Parte 5
numeri = [2, 4, 7, 10, 15];
for (const numero of numeri) {
    if (numero == 10){
        console.log("Trovato il numero " + numero + "!");
        break;
    }
}

// Parte 6
for (let i = 1; i < 10; i++) {
   if(i % 2){
        continue;
    }
    console.log(i);
} 

for (let j = 1; j < 20; j++) {
   if(!(j % 3)){
        continue;
    }
    console.log(j);
} 

// Parte 7
for (let l = 1; l < 20; l++) {
   if(!(l % 3) && !(l % 5)){
        console.log("FizzBuzz");
    }else if (!(l % 5)){
        console.log("Buzz");
    }else if (!(l % 3)){
        console.log("Fizz");
    }else {
        console.log(l);
    }
} 
