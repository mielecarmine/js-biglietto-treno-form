// Chiedo l'età
const userAgeElement = document.getElementById("age");
const userAge = userAgeElement.value;

// Chiedo i kilometri
const userKmElement = document.getElementById("km");
const userKm = userKmElement.value;

// Calcolo il biglietto
let ticketPrice = userKm * 0.21;
// console.log(ticketPrice);  Per controllare gli sconti

document.getElementById("generate").addEventListener("click", function () {
  if (userAge == "minorenne") {
    const discount = ticketPrice * 0.2;
    ticketPrice = ticketPrice - discount;
    document.getElementById("ticket-price").innerHTML = ticketPrice;
  } else if (userAge == "over-65") {
    const discount = ticketPrice * 0.4;
    ticketPrice = ticketPrice - discount;
    document.getElementById("ticket-price").innerHTML = ticketPrice;
  }
  document.getElementById("ticket-price").innerHTML = ticketPrice;
});
