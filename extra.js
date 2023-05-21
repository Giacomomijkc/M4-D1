// Esercizi extra

// NOTA: tutti gli esercizi devono essere svolti usando le funzioni

// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.
const piuFrequente = (str) => {
  const results = []
  let arrCaratteri = str.split("")
  let max = 0
  let currLett = ""
  // "this is foo bar".split("o").length - 1;
  for (let i = 0; i < arrCaratteri.length; i++) {
    amount = str.split(str.charAt(i)).length - 1
    if (amount > max) {
      currLett = str.charAt(i)
      max = amount
    }
  }
  return currLett
}

// 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna true , altrimenti ritorna `false`.

const anagrammi = (str1, str2) => {
  return str1.split("").sort().join() == str2.split("").sort().join()
}

// 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri),
//ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
// Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].

const trovaAnagrammi = (arr, parola) => {
  const possibili = []
  for (const anagramma of arr) {
    if (anagrammi(parola, anagramma)) {
      possibili.push(anagramma)
    }
  }
  return possibili
}

// 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.

const palindroma = (parola) => {
  return parola.split("").reverse().join("") === parola
}

// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

const contrario = (num) => {
  return Number(String(num).split("").reverse().join(""))
}

// 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.

// Es.
// X = 2
// `'# '
// '##'`
// X = 3
// `'# '
// '## '`
// `'###'`

const scala = (x) => {
  if (x < 0) return false
  for (let i = 1; i <= x; i++) {
    console.log("#".repeat(i))
  }
}

// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”

const contrarioParola = (par) => {
  return par.split("").reverse().join("")
}
// 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
// Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]

const sottoArray = (array, y) => {
  let nuovo = []
  let numDiSottoArray = 0
  for (let i = 0; i < array.length; i++) {
    if (i % y === 0) numDiSottoArray++
  }
  console.log(numDiSottoArray)
  let start = 0

  for (let z = 0; z < numDiSottoArray; z++) {
    let temp = array.slice(start, start + y)
    start += y

    nuovo.push(temp)
  }
  return nuovo
}

console.log(sottoArray([1, 2, 3, 4, 5], 3))

// 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.

const piramide = (x) => {
  for (let i = 1; i <= x; i++) {
    const totali = x + x - 1
    const pieni = i + i - 1
    const spaziPerLato = totali - pieni
    console.log(
      `${
        " ".repeat(spaziPerLato / 2) +
        "#".repeat(pieni) +
        " ".repeat(spaziPerLato / 2)
      }`
    )
  }
}

// 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:

// Es.

// N = 2

// `[[1, 2],[4, 3]]`

// N = 3

// `[[1, 2, 3],[8, 9, 4],[7, 6, 5]]`

// N = 4

// `[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]`

const matrice = (n) => {
    const finale = []
    for (let i = 0; i < n; i++) {
        let temp = []
        for (let k = 0; k < n; k++) {
           temp.push(i)
        }
        finale.push(temp)
    }
    return finale
}








let arrayStrings = ["listen", "silent", "try"];
let string = "enlist";
let newArrayStrings = [];
let stringInArray = [];
let result = undefined;

for (let i = 0; i < arrayStrings.length; i++) {
    let stringArray = arrayStrings[i];
    if (stringArray.length === string.length){
        newArrayStrings.push(stringArray);
        //console.log(newArrayStrings);
        wordsArray = stringArray.split("");
        //console.log(wordsArray);
        stringInArray = string.split("");
        //console.log(stringInArray);
        stringInArray.sort();
        //console.log(stringInArray.sort());
        wordsArray.sort();
        //console.log(wordsArray.sort());
        for (let i = 0; i < stringInArray.length; i++) {
            if (stringInArray[i] !== wordsArray[i]){
                result = false;
                //console.log(result);
            } result = true;
            //console.log("sono entrato qui!")
            //console.log(result);
        }
    }
}