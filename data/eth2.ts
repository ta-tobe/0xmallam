import { IssuanceData } from './types'

export async function getEth2Data(): Promise<IssuanceData> {
  const req = await fetch("https://beaconcha.in/api/v1/epoch/latest", {
    "headers": {
      "content-type": "application/json",
    },
  });
  const { data } = await req.json();
  
  const req2 = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=USDTNGN", {
    "headers": {
      "content-type": "application/json",
    },
  });
  const { price } = await req2.json();

  return {
    id: 'eth',
    name: 'United States Dollars (USD)',
    category: 'stable',
    sevenDayMA: price.toFixed(1),
    oneDay: data.validatorscount,
  };
}
