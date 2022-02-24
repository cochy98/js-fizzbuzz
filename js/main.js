/* 
    Consegna:
    Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    Prima di partire a scrivere codice poniamoci qualche domanda:
    Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
    Consigli del giorno:
    Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
    Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
    Se ci serve, disegnamo un piccolo schemino! 
*/

// Ciclo da 1 fino a 100
for(var i = 1; i <= 100; i++){

    // creo un box
    let newBox = document.createElement('div');
    // Gli aggiungo la classe che definisce lo stile
    newBox.classList.add('box');

    //lo vado ad accodare agli altri
    document.getElementById('box-container').append(newBox);

    // Se il numero è multiplo di 3 e di 5, stampo 'FizzBuzz'
    if ((i%3 == 0) && (i%5 == 0)){
        console.log(i + " FizzBuzz");
        newBox.innerHTML = "FizzBuzz";

        // Aggiungo una nuova classe
        newBox.classList.add('fizz-buzz');
    } 

    // Altrimenti se il numero è multiplo di 3, stampo 'Fizz'
    else if (i%3 == 0){ 
        console.log(i + " Fizz");
        newBox.innerHTML = "Fizz";
        
        // Aggiungo una nuova classe
        newBox.classList.add('fizz');
    } 

    // Altrimenti se il numero è multiplo di 5, stampo 'Buzz'
    else if (i%5 == 0){
        console.log(i + " Buzz");
        newBox.innerHTML = "Buzz";
        
        // Aggiungo una nuova classe
        newBox.classList.add('buzz');
    }

    // In tutti gli altri casi stampo solo il numero
    else{
        console.log(i);
        newBox.innerHTML = `${i}`;
    }
}