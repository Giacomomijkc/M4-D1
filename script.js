//ESERCIZIO 1
/*
let a = 10;
let b = 60;

function checkInt(a,b){
    if ((a === 50) || (b === 50) || (a+b === 50)){
        return true;
    } else {
        return false;
    }
}

console.log(checkInt(a,b));*/

//ESERCIZIO 2
/*
let string = "Epicode";
let index = 0;

function removeCharacter(string, index){
    let newString = string.substring(0, index) + string.substring(index + 1);
    return newString;
}

console.log(removeCharacter(string, index));*/

//ESERCIZIO 3
/*
let a = 90;
let b = 90;

function checkInt(a, b){
    if (((a > 40) && (a < 60) && (b > 40) && (b < 60)) || ((a > 70) && (a < 100) && (b > 70) && (b < 100))){
        return true;
    } else {
        return false;
    }
}

console.log(checkInt(a,b));*/

//ESERCIZIO 4
/*
let city = "Milano";

function checkCity(city){
    if (city.includes("Los") || city.includes("New")){
        return city;
    } else {
        return false;
    }
}

console.log(checkCity(city));*/

//ESERCIZIO 5
/*
let myArray = [0, 1, 2, 3, 4, 5];
let sum = 0;

function arraySum(myArray){
    for (let i = 0; i < myArray.length; i++) {
        let value = myArray[i];
        sum += value; 
    }
    console.log(sum);
    return sum;
}

console.log(arraySum(myArray));*/

// ESERCIZIO 6

/*let myArray = [0, 1, 2, 3, 4, 5];

function checkArray(myArray){
    for (let i = 0; i < myArray.length; i++) {
        if((myArray[i] === 1) || (myArray[i] === 3)){
            return false;
        } 
    }

    return true;
}

console.log(checkArray(myArray));*/

//ESERCIZIO 7
/*
function angleCheck(ampiezza) {
    switch (true) {
      case ampiezza < 90:
        return "acuto";
      case ampiezza > 90 && ampiezza < 180:
        return "ottuso";
      case ampiezza === 90:
        return "retto";
      case ampiezza === 180:
        return "piatto";
      default:
        return "invalido";
    }
  }
  
  console.log(angleCheck(45));   // acuto
  console.log(angleCheck(120));  // ottuso
  console.log(angleCheck(90));   // retto
  console.log(angleCheck(180));  // piatto
  console.log(angleCheck(200));  // invalido*/
  
//ESERCIZIO 8
/*
let phrase = "Fabbrica Italiana Automobili Torino";

function acronym(phrase){
    let words = phrase.split(" ");
    let initials = " ";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let initial = word.charAt(0);
        initials += initial;
    }

    return initials;
}

console.log(acronym(phrase));*/

// EXTRA 1
/*
let string = "robierta";
let obj = {};

for (let i = 0; i < string.length; i++) {
    let word = string[i];
    console.log(word);
    
    if (obj[word] === undefined) {
        obj[word] = 1;
    } else {
        obj[word] += 1;
    }
}

let maxChar = "";
let maxCount = 1;

for (let word in obj) {
    if (obj[word] > maxCount) {
        maxChar = word;
        maxCount = obj[word];
    }
}

console.log("Il carattere più utilizzato nella stringa è:", maxChar);
*/

// EXTRA 2
/*
function sonoAnagrammi(stringaA, stringaB) {
    // Rimuovi punteggiatura e spazi e converti in minuscolo
    const soloLettereA = stringaA.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const soloLettereB = stringaB.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
    // Verifica se le due stringhe hanno la stessa lunghezza
    if (soloLettereA.length !== soloLettereB.length) {
      return false;
    }
  
    // Converte le stringhe in array di caratteri
    const arrayA = soloLettereA.split('');
    const arrayB = soloLettereB.split('');
  
    // Ordina gli array di caratteri in ordine alfabetico
    arrayA.sort();
    arrayB.sort();
  
    // Confronta gli array di caratteri
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] !== arrayB[i]) {
        return false;
      }
    }
  
    // Se tutti i caratteri corrispondono, le stringhe sono anagrammi
    return true;
  }
  
  // Esempio di utilizzo
  const stringaA = "listen";
  const stringaB = "silent";
  
  console.log(sonoAnagrammi(stringaA, stringaB));  // Output: true
*/

// EXTRA 3

function sonoAnagrammi(string, stringsArray1){
    let newArrayStrings = [];
    let finalArray = [];

    for (let i = 0; i < stringsArray1.length; i++){
        let stringInArray1 = stringsArray1[i];
        if (string.length === stringInArray1.length){
            newArrayStrings.push(stringInArray1);
        }
    }

    let wordsString = string.split("");
    for (let i = 0; i < newArrayStrings.length; i++){
        let newArrayString = newArrayStrings[i];
        let wordsNewArrayStrings = newArrayString.split("");
        wordsString.sort();
        wordsNewArrayStrings.sort();    

        let isAnagramma = true;

        for (let j = 0; j < wordsString.length; j++){
            if (wordsString[j] !== wordsNewArrayStrings[j]){
                isAnagramma = false;
                break;
            }
        }
        if (isAnagramma) {
        finalArray.push(newArrayString);
        }
    }

    return finalArray;
}


console.log(sonoAnagrammi("enlist", ["listen", "silent", "try"]));

/*
let arrayStrings = ["listen", "silent", "try"];
let string = "enlist";
let newArrayStrings = [];
let stringInArray = [];
let finalArray = [];
let result = undefined;

function sonoAnagrammi(arrayStrings, string){
    for (let i = 0; i < arrayStrings.length; i++) {
        let stringArray = arrayStrings[i];
        if (stringArray.length === string.length){
            newArrayStrings.push(stringArray);
            wordsArray = stringArray.split("");
            stringInArray = string.split("");
            stringInArray.sort();
            wordsArray.sort();
        }
    }


    for (let i = 0; i < stringInArray.length; i++) {
        if (stringInArray[i] === wordsArray[i]){
            finalArray.push(wordsArray);
            //console.log(wordsArray);
            //console.log(result);
        } 
    }

    result = wordsArray;
    return result;
}

console.log(sonoAnagrammi(arrayStrings, string));


*/


