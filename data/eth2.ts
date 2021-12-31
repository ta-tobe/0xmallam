import { IssuanceData } from './types'

export async function getEth2Data(): Promise<IssuanceData> {

  const round = (number, decimalPlaces) => {
  const factorOfTen = Math.pow(10, decimalPlaces)
  return Math.round(number * factorOfTen) / factorOfTen
}
  const req = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=USDTNGN", {
    "headers": {
      "content-type": "application/json",
    },
  });
  const { price } = await req.json();

  return {
    id: 'eth',
    name: 'United States Dollars (USD)',
    category: 'stable',
    sevenDayMA: round(price,1),
  };
}
