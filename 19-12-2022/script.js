let scelta = prompt("Ciao! Scegli tra la condizione: 'switch' o 'if else'");

if (scelta === "if else") {
  let firstNum = prompt("Adesso che hai scelto la condizione scegli un numero");
  let primoNum = parseInt(firstNum);
  let operazione = prompt(
    "Scegli tra: 'addizione', 'sottrazione', 'moltiplicazione' o 'divisione'"
  ).toLocaleLowerCase();
  let lastNum = prompt("Scegli un altro numero.");
  let secondoNum = parseInt(lastNum);
  let totale;
  if (operazione === "addizione") {
    totale = primoNum + secondoNum;
    console.log(
      "Hai scelto come condizione " +
        scelta +
        " e come operazione " +
        operazione +
        " quindi il tuo risultato è: " +
        totale
    );
    alert(
      "Hai scelto come condizione " +
        scelta +
        " e come operazione " +
        operazione +
        " quindi il tuo risultato è: " +
        totale
    );
    // Operatore ternario
    totale < 50 ? console.log("Minore di 50") : console.log("maggiore di 50");
  } else if (operazione === "sottrazione") {
    totale = primoNum - secondoNum;
    console.log(
      "Hai scelto come condizione " +
        scelta +
        " e come operazione " +
        operazione +
        " quindi il tuo risultato è: " +
        totale
    );
    alert(
      "Hai scelto come condizione " +
        scelta +
        " e come operazione " +
        operazione +
        " quindi il tuo risultato è: " +
        totale
    );
    // Operatore ternario
    totale < 50 ? console.log("Minore di 50") : console.log("maggiore di 50");
  } else if (operazione === "moltiplicazione") {
    totale = primoNum * secondoNum;
    console.log(
      "Hai scelto come condizione " +
        scelta +
        " e come operazione " +
        operazione +
        " quindi il tuo risultato è: " +
        totale
    );
    alert(
      "Hai scelto come condizione " +
        scelta +
        " e come operazione " +
        operazione +
        " quindi il tuo risultato è: " +
        totale
    );
    // Operatore ternario
    totale < 50 ? console.log("Minore di 50") : console.log("maggiore di 50");
  } else if (operazione === "divisione") {
    totale = primoNum / secondoNum;
    console.log(
      "Hai scelto come condizione " +
        scelta +
        " e come operazione " +
        operazione +
        " quindi il tuo risultato è: " +
        totale
    );
    alert(
      "Hai scelto come condizione " +
        scelta +
        " e come operazione " +
        operazione +
        " quindi il tuo risultato è: " +
        totale
    );
    //Operatore ternario
    totale < 50 ? console.log("Minore di 50") : console.log("maggiore di 50");
  } else {
    alert("Hai bagliato l'operatore");
  }
} else if (scelta === "switch") {
  let lastNum = prompt("Adesso che hai scelto la condizione scegli un numero");
  let primoNum = parseInt(lastNum);
  let operazione = prompt(
    "Scegli tra: addizione, sottrazione, moltiplicazione o divisione"
  ).toLocaleLowerCase();
  let firstNum = prompt("Scegli un altro numero.");
  let secondoNum = parseInt(firstNum);
  let totale;
  switch (operazione) {
    case "addizione":
      totale = primoNum + secondoNum;
      console.log(
        "Hai scelto come condizione " +
          scelta +
          " e come operazione " +
          operazione +
          " quindi il tuo risultato è: " +
          totale
      );
      alert(
        "Hai scelto come condizione " +
          scelta +
          " e come operazione " +
          operazione +
          " quindi il tuo risultato è: " +
          totale
      );
      //Operatore ternario
      totale < 50 ? console.log("Minore di 50") : console.log("maggiore di 50");
      break;
    case "sottrazione":
      totale = primoNum - secondoNum;
      console.log(
        "Hai scelto come condizione " +
          scelta +
          " e come operazione " +
          operazione +
          " quindi il tuo risultato è: " +
          totale
      );
      alert(
        "Hai scelto come condizione " +
          scelta +
          " e come operazione " +
          operazione +
          " quindi il tuo risultato è: " +
          totale
      );
      //Operatore ternario
      totale < 50 ? console.log("Minore di 50") : console.log("maggiore di 50");
      break;
    case "moltiplicazione":
      totale = primoNum * secondoNum;
      console.log(
        "Hai scelto come condizione " +
          scelta +
          " e come operazione " +
          operazione +
          " quindi il tuo risultato è: " +
          totale
      );
      alert(
        "Hai scelto come condizione " +
          scelta +
          " e come operazione " +
          operazione +
          " quindi il tuo risultato è: " +
          totale
      );
      //Operatore terniario
      totale < 50 ? console.log("Minore di 50") : console.log("maggiore di 50");
      break;
    case "divisione":
      totale = primoNum / secondoNum;
      console.log(
        "Hai scelto come condizione " +
          scelta +
          " e come operazione " +
          operazione +
          " quindi il tuo risultato è: " +
          totale
      );
      alert(
        "Hai scelto come condizione " +
          scelta +
          " e come operazione " +
          operazione +
          " quindi il tuo risultato è: " +
          totale
      );
      //Operatore ternario
      totale < 50 ? console.log("Minore di 50") : console.log("maggiore di 50");
      break;
    default:
      alert("Hai bagliato l'operatore");
  }
} else {
  alert("Avrai sbagliato, scegli tra: switch o if else!");
}
