/*
Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


// method one


// take input
const outPut = prompt('Scrivi una parola; ');

// call the function
const value = checkPalindromeOne(outPut);

console.log(value);



// method two 


const string = prompt('Scrivi una parola: ');

checkPalindromeTwo(string);


// FUNZIONI 


function checkPalindrome(string) {

    /*
    il codice può anche essere scritto tutto unito 
    const reverseString = string.split('').reverse().join('');
    */

    // Converte la stringa in un array string.split ('c, i, a, o')
    const arrayValues = string.split('');

    // Camabia l'ordine degli elementi dell'array string.reverse ('o, a, i, c,')
    const reverseArrayValues = arrayValues.reverse();

    // Converte l'array in una strigna string.join ('oaic')
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
 /*
    ---------------------------
    SECONDO METODO 
    ---------------------------
 */


function checkPalindromeOne(string) {

    // Individiare la lunghezza della stringa 
    const len = string.length;

    // Prendere solo la metà della stringa 
    for (let i = 0; i < len / 2; i++) {

        // verificare se la prima metà è diversa dalla seconda 
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
