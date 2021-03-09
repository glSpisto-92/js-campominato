// Il computer deve generare 16 numeri casuali tra 1 e 100.
var arrNumCpu = [];

function randomNumber (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var random;

  do{
    random = randomNumber(1, 100);
    arrNumCpu.push(random);
  } while (arrNumCpu.length < 16);

console.log(arrNumCpu);

// In seguito deve chiedere all’utente (100 - 16) volte
 // di inserire un numero alla volta, sempre compreso tra 1 e 100.
 var arrNumUtente = [];

  do{
    var inputUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100...'))
    arrNumUtente.push(inputUtente);
  } while ( arrNumUtente.length < 5 );
console.log(arrNumUtente);
// L’utente non può inserire più volte lo stesso numero.
//
//
