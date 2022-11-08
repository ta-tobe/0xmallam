import { IssuanceData } from './types'

export async function getCadData(): Promise<IssuanceData> {

  const round = (number, decimalPlaces) => {
  const factorOfTen = Math.pow(10, decimalPlaces)
  return Math.round(number * factorOfTen) / factorOfTen
  };
  
//   const req = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=cad-coin&vs_currencies=usd", {
//     const req = await fetch("https://min-api.cryptocompare.com/data/price?fsym=CAD&tsyms=USD", {
//     "headers": {
//       "content-type": "application/json",
//     },
//   });
  
//   const {CAD} = await req.json();

  const req2 = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=USDTNGN", {
    "headers": {
      "content-type": "application/json",
    },
  });
  
  const data = await req2.json();
  
//   const tradingFee = 0.99 * 0.99;
  
  return {
    id: 'cad',
    name: 'Canadian Dollars (CAD)',
    category: 'stable',
    rate: round(0.72 * data.price,0),

  };
}

// https://api.coingecko.com/api/v3/simple/price?ids=cad-coin&vs_currencies=usd
