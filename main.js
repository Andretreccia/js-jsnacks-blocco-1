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
let somma = 0
//al click del bottone 3
function snack3btn() {

    for (i = 0; i < 10; i++) {
        let userNumber = parseInt(prompt("Inserisci il numero"))
        /* array3.push(userNumber) */
        //somma tra loro tutti i numeri inseriti dall utente
        somma += userNumber
        //console.log(somma)
    }
    result3 = `<p>La somma dei tuoi numeri è: ${somma} </p>`
    snack3.innerHTML = result3
}

//////////////////////////////////// SNACK 4
//dove far apparire l esito
const snack4 = document.querySelector(".snack4")

//lista invitati 
const array4 = ["Luca", "Faiola", "Marco", "Andrea", "Paolo", "Tiziano", "Sara", "Diletta"]

function snack4btn() {
    //Chiedi all utente il suo nome
    let userName = prompt("Inserisci il tuo nome per scoprire se sei stato invitato alla grande festa")

    let validate = 0

    for (let i = 0; i <= array4.length; i++) {
        if (userName == array4[i]) {
            validate++
        }
    }
    //stampa un messaggio differente a seconda dell'esito della ricerca
    let result4 = ""

    if (validate == 0) {
        result4 = `<p>Ci dispiace ma sembrerebbe che lei non sia un ospite gradito alla festa del grande Gatsby</p>`
    }
    else {
        result4 = `<p>Complimenti! Lei è nella lista degli invitati per la festa del grande Gatsby</p>`
    }
    snack4.innerHTML = result4
}


////////////////////////////// SNACK 5
const snack5 = document.querySelector(".snack5")
let result5 = ""
//crea un array vuoto 
const array5 = []
//chiedi per 6 volte all utente di inserire un numero

function snack5btn() {

    for (i = 0; i < 6; i++) {

        let userNumber5 = parseInt(prompt("Scopri quali numeri sono pari. Inserisci un numero"))
        if (userNumber5 % 2 == 0) {
            array5.push(userNumber5)
            //console.log(array5)
        }

    }
    result5 = `<p>I numeri pari tra quelli inseriti sono: ${array5}</p>`
    snack5.innerHTML = result5



}