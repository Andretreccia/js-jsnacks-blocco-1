///////////////////////////////////  SNACK 1
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

/////////////////////////////////    SNACK 2

const snack2 = document.querySelector(".snack2")

let result2 = "";
//al click del bottone 1
function snack2btn() {
    //chiedi all utente di inserire due numeri in successione
    let fistWord = prompt("inserisci una parola");
    let secondWord = prompt("inseriscri un'altra parola");


    //verifica quale delle parole sia la più lunga
    if (fistWord.length > secondWord.length) {
        result2 = `<p>La parola più lunga è: ${fistWord}. Con una lunghzza di ${fistWord.length} caratteri!</p>`;

    }
    else if (fistWord.length < secondWord.length) {
        result2 = `<p><p>La parola più lunga è: ${secondWord}. Con una lunghzza di ${secondWord.length} caratteri!</p>`;
    }
    else {
        result2 = `<p>Le due parole hanno la stessa lunghezza. ${secondWord.length} caratteri!</p>`;

    }
    //stampa il risultato su schermo
    snack2.innerHTML = result2
}
