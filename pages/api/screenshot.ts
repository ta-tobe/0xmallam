import { NextApiRequest, NextApiResponse } from 'next';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getScreenshot(): Promise<any> {
  const apiKeys = process.env.NEXT_APP_BROWSHOT!.split(',');
  const key = apiKeys[new Date().getDate() % apiKeys.length];

  const request = await fetch(
    `https://api.browshot.com/api/v1/screenshot/create?url=https://0xmallam.info/&instance_id=12&size=screen&cache=${
      60 * 60 * 24
    }&key=${key}`
  );
  const json = await request.json();

  if (json.status === 'in_queue') {
    await wait(500);
    return getScreenshot();
  }

  return json;
}

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const screenshot = await getScreenshot();

  res.writeHead(302, {
    Location: "https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg",
  });
  res.end();
};

export default handler;
