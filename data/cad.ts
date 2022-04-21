import { IssuanceData } from './types'

export async function getCadData(): Promise<IssuanceData> {

  const round = (number, decimalPlaces) => {
  const factorOfTen = Math.pow(10, decimalPlaces)
  return Math.round(number * factorOfTen) / factorOfTen
  };
  
  const req = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=cad-coin&vs_currencies=usd", {
    "headers": {
      "content-type": "application/json",
    },
  });
  
  const {cad_coin} = await req.json();

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
    rate: round(cad_coin.usd * data.price,0),

  };
}
