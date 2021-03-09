// Il computer deve generare 16 numeri casuali tra 1 e 100.
var arrNumCpu = [];

function randomNumber (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var random;


  do{
    random = randomNumber(1, 100);
    if( arrNumCpu.indexOf(random) < 0){ //I numeri non possono essere duplicati.
      arrNumCpu.push(random);
    }
  } while (arrNumCpu.length < 16);

console.log(arrNumCpu);

// In seguito deve chiedere all’utente (100 - 16) volte
 // di inserire un numero alla volta, sempre compreso tra 1 e 100.
 var arrNumUtente = [];
 var trovato = false;

  do{
    var inputUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100...'));
    if ( arrNumCpu.indexOf(inputUtente) >= 0){ //L’utente non può inserire più volte lo stesso numero.
      alert('hai perso!')
      trovato = true;
    }
    if( arrNumUtente.indexOf(inputUtente) < 0){
      arrNumUtente.push(inputUtente);

    } else{

    alert('Inserisci un numero diverso');
    }

  } while ( arrNumUtente.length < 10 && trovato == false );

console.log(arrNumUtente);

if ( trovato == false){
  alert('hai vinto!');
}
// Al termine della partita il software deve comunicare il punteggio,
//  cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log('Hai inserito ' + arrNumUtente.length + ' numeri consentiti.');
