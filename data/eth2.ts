import { IssuanceData } from './types'

export async function getEth2Data(): Promise<IssuanceData> {
  const req = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=USDTNGN", {
    "headers": {
      "content-type": "application/json",
    },
  });
  const { data } = await req.json();

  return {
    id: 'eth',
    name: 'United States Dollars (USD)',
    category: 'stable',
    sevenDayMA: price,
//     oneDay: price,
  };
}
