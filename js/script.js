// Il computer deve generare 16 numeri casuali tra 1 e 100.
var arrNumCpu = [];

function randomNumber (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var random;

// Setto i vari livelli di difficoltà in base alla scelta dell'utente.
do{
  var setDifficolta = prompt('Scegli una difficoltà: facile, normale, difficile.');
} while ( setDifficolta != 'facile' && setDifficolta != 'normale' && setDifficolta != 'difficile' );

var maxNumeriInput;

switch (setDifficolta) {
  case 'facile':
    maxNumeriInput = 100;
  break;

  case 'normale':
    maxNumeriInput = 80;
    inputUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 80...'));
    break;

    case 'difficile':
      maxNumeriInput = 50;
      inputUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 50...'));
      break;
  default:
}

// Creiamo un ciclo per pushare tramite la funzione random dei numeri casuali nell'array.
  do{
    random = randomNumber(1, maxNumeriInput);
    if( arrNumCpu.indexOf(random) < 0){ //I numeri non possono essere duplicati.
      arrNumCpu.push(random);
    }
  } while (arrNumCpu.length < 16);

console.log(arrNumCpu);

// In seguito deve chiedere all’utente (100 - 16) volte
 // di inserire un numero alla volta, sempre compreso tra 1 e 100.
 var arrNumUtente = [];
 var trovato = false;
 var sottrBombe = maxNumeriInput - 16;

  do{
    var inputUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100...'));

    if( isNaN(inputUtente) || inputUtente < 1 || inputUtente > maxNumeriInput ){
      alert('occhio a cosa inserisci!');

    } else if ( arrNumCpu.indexOf(inputUtente) >= 0){
      alert('hai perso!')
      trovato = true;

    } else if( arrNumUtente.indexOf(inputUtente) < 0){ //L’utente non può inserire più volte lo stesso numero.
      arrNumUtente.push(inputUtente);

    } else{
    alert('Non puoi inserire due numeri uguali!!!');
    }

  } while ( arrNumUtente.length - 1 < sottrBombe && trovato == false );

console.log(arrNumUtente);

if ( trovato == false){
  alert('hai vinto!');
}
// Al termine della partita il software deve comunicare il punteggio,
//  cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log('Hai inserito ' + arrNumUtente.length  + ' numeri consentiti.');
