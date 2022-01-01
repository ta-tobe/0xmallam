import { IssuanceData } from './types'

export async function getEurData(): Promise<IssuanceData> {

  const round = (number, decimalPlaces) => {
  const factorOfTen = Math.pow(10, decimalPlaces)
  return Math.round(number * factorOfTen) / factorOfTen
  };
  
  const req = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=EURUSDT", {
    "headers": {
      "content-type": "application/json",
    },
  });
  
  const { price } = await req.json();

  const req2 = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=USDTNGN", {
    "headers": {
      "content-type": "application/json",
    },
  });
  
  const data = await req2.json();
  
  return {
    id: 'eur',
    name: 'Euros (EUR)',
    category: 'stable',
    rate: round(price * data.price,0),
  };
}
