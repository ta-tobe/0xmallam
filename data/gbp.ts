import { IssuanceData } from './types'

export async function getGbpData(): Promise<IssuanceData> {

  const round = (number, decimalPlaces) => {
  const factorOfTen = Math.pow(10, decimalPlaces)
  return Math.round(number * factorOfTen) / factorOfTen
  };
  
  const req = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=GBPUSDT", {
    "headers": {
      "content-type": "application/json",
    },
  });
  
  const { price } = await req.json();

  const req = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=USDTNGN", {
    "headers": {
      "content-type": "application/json",
    },
  });
  
  const multiplier = await req.json().price;
  
  return {
    id: 'gbp',
    name: 'Great Britain Pounds (GBP)',
    category: 'stable',
    rate: round(price*multiplier,1),
  };
}
