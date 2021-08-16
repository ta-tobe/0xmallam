import { IssuanceData } from './types'

export async function getAvalancheData(): Promise<IssuanceData> {
  const req = await fetch("https://api.avax.network/ext/P", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: 1,
      jsonrpc: "2.0",
      method: "platform.getCurrentValidators"
    })
  });

  const { result: { validators } } = await req.json() as { result: { validators: any[] }};

  return {
    id: 'avalanche',
    name: 'Avalanche',
    category: 'l1',
    sevenDayMA: validators.length,
    oneDay: validators.length,
  };
}
