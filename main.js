/*l programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
TIP: per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60

*/

// chiedere all'utente il numero di chilometri che vuole percorrere
const numbKm = Number(prompt("Quanti km vuoi percorrere?"));

// chiedere l'età del passeggero
const age = Number(prompt("Quanti anni hai?"));

//calcolare il prezzo totale del viaggio
const priceJourney = numbKm * 0.21;

//calcora gli sconti
const scontoUnder = (priceJourney * 20) / 100;

const scontoOver = (priceJourney * 40) / 100;

const priceUnder = priceJourney - scontoUnder;

const priceOver = priceJourney - scontoOver;

//condizioni in base all'età

if (age <= 18) {
  console.log("prezzo totale del viaggio è di €", priceUnder.toFixed(2));
} else if (age >= 65) {
  console.log("prezzo totale del viaggio è di €", priceOver.toFixed(2));
} else {
  console.log(
    "prezzo totale del viaggio è di €",
    priceJourney.toFixed(2),
    ", non sono previsti sconti per la tua fascia di età"
  );
}
