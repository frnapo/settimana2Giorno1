/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/**************************** TIPI DI DATI IN JAVASCRIPT ***********************************
 * Javascript prevede 5 tipi di dati PRIMITIVI
 * 1. stringa -> e' una sequenza di caratteri come parole o frasi e possono essere scritte tra virgolette (apici) singole (' ') o doppie (" ")
 * 2. numeri -> sono i classici numeri che conosciamo, possono essere interi (scritti normalmente) o decimali (scritti con un '.' dopo il numero intero).
 * 3. booleano -> i tipi di dati booleani sono tipo "interruttori" - hanno solo due valori (vero - true | falso - false)
 * 4. null -> un dato può essere null, come se fosse una scatola vuota (e' diverso da zero o da non definito... assume un valore tutto suo..."null")
 * 5. undefined -> un dato può essere undefined, come se la scatola vuota non esistesse, non gli e' stato assegato un valore quindi rimane 'non definito'=undefined
 * 6. objects -> i dati piu' complessi sono di tipo object, come se fossero una collezione di dati
 */ 

  

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

  var name = 'Francesco';
  console.log(name); 


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

  var primoNumero = 12;
  var secondoNumero = 20;
  console.log(primoNumero + secondoNumero); 


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

  var x = 12;
  console.log(x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

  name = 'Napoli';
  const nome = 'Francesco';
  // nome = 'Napoli'; questo da' errore perche' non e' possibile cambiare il valore di una costante

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
  console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

  var name1 = 'john';
  var name2 = 'John';
  console.log(name1 != name2);      // verifico se sono diversi | true = sono diversi

  var name1 = name1.toLowerCase;
  var name2 = name2.toLowerCase;
  console.log(name1 == name2);          // verifico la loro uguaglianza | true = sono uguali