// Esercizio 1

function esercizio(string) {
  return string + " Bootcamp";
}

const variabile = esercizio("Edgemony");

console.log(variabile);

// Esercizio 2

const cartaIdentità = {
  nome: "Luisa",
  cognome: "Zizzo",
  età: 27,
  altezza: 1.6,
  hobby: function () {
    console.log("Il mio hobby preferito è fare shopping!");
  },
};

cartaIdentità.hobby();

// Avanzato

function calcolatrice(operation, num1, num2) {
  if (operation === "+") {
    return num1 + num2;
  } else if (operation === "-") {
    return num1 - num2;
  } else if (operation === "*") {
    return num1 * num2;
  } else if (operation === "/") {
    return num1 / num2;
  } else {
    return "Operatore non valido";
  }
}

const somma = calcolatrice("+", 10, 20);
console.log(somma);
const sottrazione = calcolatrice("-", 58, 20);
console.log(sottrazione);
const moltiplicazione = calcolatrice("*", 40, 20);
console.log(moltiplicazione);
const divisione = calcolatrice("/", 100, 20);
console.log(divisione);

// function calcolatrice(operation, num) {
//     if (operation === "+") {
//       return num[0] + num[1];
//     } else if (operation === "-") {
//       return num[0] - num[1];
//     } else if (operation === "*") {
//       return num[0] * num[1];
//     } else if (operation === "/") {
//       return num[0] / num[1];
//     }
//   }

// const somma = calcolatrice("+", [10, 20]);
// console.log(somma);
// const sottrazione = calcolatrice("-", [58, 20]);
// console.log(sottrazione);
// const moltiplicazione = calcolatrice("*", [40, 20]);
// console.log(moltiplicazione);
// const divisione = calcolatrice("/", [100, 20]);
// console.log(divisione);
