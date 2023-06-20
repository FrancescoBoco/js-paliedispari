/*

Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

/*

STEPPS------
1)CHIDERE ALL'UTENTE DI INSERIRE UN NUMERO CON IL PROMPT                            // fatto //
2) STABILIRE CHE QUEL NUMERO DEVE ESSERE TRA 1 - 5                                  // fatto //
3) SORTEGGIARE UN NUMERO RANDOM CON UNA FUNZIONE PER IL COMPUTER 
4)SOMMARE IL PUNTEGGIO DEL PC CON QUELLO DEL GIOCATORE
5) STABILIRE CHI HA VINTO 
        -SE SIA IL NUMERO SCELTO DALL'UTENTE CHE QUELLO USCITO AL PUNTO 4) SONO ENTRAMBI DIVISIBILI PER 2 VINCE L'UTENTE 
        -SE SIA IL NUMERO SCELTO DALL'UTENTE CHE QUELLO USCITO AL PUNTO 4) SONO ENTRAMBI NON DIVISIBILI PER 2 VINCE L'UTENTE 
            -ALTRIMENTI VINCE IL PC 

    
*/ 

let userChoice;
do{
    userChoice = prompt('inserisci "pari" o "dispari"')
} while(userChoice != 'pari' && userChoice != 'dispari');



let userNumber;
do{
  userNumber = prompt('inserisci un numero tra 1 e 5')
} while(userNumber > 5 || userNumber <= 0)

// stampa numero utente 
const myUser = document.getElementById ('user')

const myDiv = document.createElement('div')
myDiv.innerHTML = userNumber

myUser.append(myDiv)


// random number per il bot



const robotNumber = randomNumber (1 , 5);

// stampa numero bot 
const mybot = document.getElementById ('bot')

const myDivBot = document.createElement('div')
myDivBot.innerHTML = robotNumber

mybot.append(myDivBot)

const sumUserAndBot = robotNumber + userNumber 


console.log('userNumber', userNumber, typeof userNumber)

if ((isEven() == true && userChoice == 'pari') || (isEven() == false && userChoice == 'dispari')){
    console.log('ha vinto l\'user', 'user:',userNumber,'bot:',robotNumber )
    
    const winner = document.getElementById ('result')

    const myDivWinner = document.createElement('div')
    myDivWinner.innerHTML = 'bravo hai vinto!!!!!!'

    winner.append(myDivWinner)
}
else{
    console.log('ha vinto il bot', 'user:',userNumber,'bot:',robotNumber)
    const winner = document.getElementById ('result')

    const myDivWinner = document.createElement('div')
    myDivWinner.innerHTML = 'mi sipiace hai perso!'

    winner.append(myDivWinner)
}




// FUNZIONI 

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(){
    // numero pari o dispari dell'utente 
    if (sumUserAndBot % 2 == 0){
        console.log('il numero e pari', userNumber, typeof userNumber)
        return true;
    }
    else {
        // userNumber = oddNumber
        return false
    }
}
  

// const oddOrEvenUser = prompt('inserisci "pari" o "dispari"')
// let oddUser = 'pari'
// let evenUser = 'dispari'

// if (oddOrEvenUser = 'pari'){
    //     console.log ('hai scelto pari', oddUser)
    // }
    // else if (oddOrEvenUser = 'dispari'){
        //     console.log ('hai scelto dispari', evenUser)
        // }
        // else{
            //     console.log ('inserisci pari o dispari')
            // }