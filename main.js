//snack 1
const snack1 = document.querySelector(".snack1")

let result1 = "";
//al click del bottone 1
function snack1btn() {
    //chiedi all utente di inserire due numeri in successione
    let fistNumber = prompt("inserisci un numero");
    let secondNumber = prompt("inseriscri un altro numero");
    //console.log(fistNumber, secondNumber)

    //verifica quale dei numeri inseriti sia il maggiore
    if (fistNumber > secondNumber) {
        result1 = `<p> il numero maggiore è: ${fistNumber}</p>`;
        //console.log("il numero maggiore è:" + fistNumber)
    }
    else if (fistNumber < secondNumber) {
        result1 = `<p> il numero maggiore è: ${secondNumber}</p>`;
        //console.log("il numero maggiore è: " + secondNumber)
    }
    else {
        result1 = `<p>Hai inserito lo stesso numero. Clicca sul bottone e riprova</p>`;
        //console.log("Hai inserito lo stesso numero. Clicca sul bottone e riprova")
    }
    //stampa il risultato su schermo
    snack1.innerHTML = result1
}