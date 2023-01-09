const addizione = (firstNum, secondNum) => firstNum + secondNum;
const sottrazione = (firstNum, secondNum) => firstNum - secondNum;
const divisione = (firstNum, secondNum) => firstNum / secondNum;
const moltiplicazione = (firstNum, secondNum) => firstNum * secondNum;

const calcolatrice = () => {
  const operazionePrnt = prompt(
    "Scegli un operazione matemationa tra: +, -, *, /"
  );
  const firstNumPrompt = parseInt(prompt("Inserisci un numero"));
  const secondNumPrompt = parseInt(prompt("Inserisci un altro numero"));
  switch (operazionePrnt) {
    case "+":
      console.log(
        `Il risultato della tua addizione è: ${addizione(
          firstNumPrompt,
          secondNumPrompt
        )}`
      );
      break;
    case "-":
      console.log(
        `Il risultato della tua sottrazione è: ${sottrazione(
          firstNumPrompt,
          secondNumPrompt
        )}`
      );
      break;
    case "*":
      console.log(
        `Il risultato della tua moltiplicazione è: ${moltiplicazione(
          firstNumPrompt,
          secondNumPrompt
        )}`
      );
      break;
    case "/":
      console.log(
        `Il risultato della tua divisione è: ${divisione(
          firstNumPrompt,
          secondNumPrompt
        )}`
      );
      break;
    default:
      alert("Riprova avrai inserito qualcosa di sbagliato");
  }
};

calcolatrice();

// Avanzato

// const num1Prnt = parseInt(prompt("Inserisci un numero"));
// const num2Prnt = parseInt(prompt("Inserisci un altro numero numero"));

// const funzioneCallBack = (num1, num2, callBack) => {
//   console.log(`il risultato della callback è: ${callBack(num1, num2)}`);
// };

// funzioneCallBack(num1Prnt, num2Prnt, addizione);
// funzioneCallBack(num1Prnt, num2Prnt, sottrazione);
// funzioneCallBack(num1Prnt, num2Prnt, divisione);
// funzioneCallBack(num1Prnt, num2Prnt, moltiplicazione);
