let numberOfKm = prompt("Quanti kilometri vuole percorrere?");
let eta = prompt ("qual'è la vostra eta?")

let priceTicket = numberOfKm * 0.21;
let discount;

if (eta < 18)
{
  discount = ((priceTicket/100)*20);
  priceTicket -= discount;
  console.log(priceTicket.toFixed(2) + "€");
}
else if(eta > 65)
{
  discount = ((priceTicket/100)*40);
  priceTicket -= discount;
  console.log(priceTicket.toFixed(2) + "€");
}
else
{
  console.log(priceTicket + "€");
}