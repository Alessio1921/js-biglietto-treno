const numberOfKm = parseInt (prompt("Quanti kilometri vuole percorrere?"));
const eta = parseInt( prompt("qual'è la vostra eta?"));
let priceTicket = numberOfKm * 0.21;
let discount;

document.getElementById("km").innerHTML= numberOfKm + "km";
document.getElementById("eta").innerHTML=eta;

if ( isNaN(numberOfKm) || isNaN (eta))
{
  console.warn("devi inserire solo i numeri");
  document.getElementById("price").innerHTML= "Hai inserito dei caratteri non validi, ricarica la pagina";
}
else
{
  if (eta < 18)
  {
    discount = ((priceTicket/100)*20);
    priceTicket-= discount ;
  }
  else if (eta >= 65)
  {
    discount = ((priceTicket/100)*40);
    priceTicket -= discount;
  }
  document.getElementById("price").innerHTML=priceTicket.toFixed(2) + "€";
}
