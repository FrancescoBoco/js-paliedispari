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


const userNumber = parseInt(prompt('inserisci un numero tra 1 e 5'))

if(userNumber > 5){
    prompt('inserisci un numero tra 1 e 5')
}

console.log('userNumber', userNumber, typeof userNumber)

console.log ('BOTnumber', randomNumber(1 , 5))

const robotNumber = randomNumber (1 , 5)




  // FUNZIONI 

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }