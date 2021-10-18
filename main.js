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
//al click del bottone 2
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
///////////////////////////////// SNACK 3

//seleziona il contenire con il quale interagire
const snack3 = document.querySelector(".snack3")
//crea un array per inserire i numeri dell utente
let array3 = []
//crea una variabile a cui assegnare come valore il risultato
let result3 = ""

//al click del bottone 3
function snack3btn() {

    for (i = 0; i < 10; i++) {
        let userNumber = prompt("Inserisci il nuemro")
        array3.push(userNumber)

    }
    console.log(array3)

    //somma tra loro tutti i numeri inseriti dall utente
    let somma = 0
    for (i = 0; i < array3.length; i++) {
        somma + array3[i]
        console.log(somma)
    }
}
