import { NextApiRequest, NextApiResponse } from 'next';
import { randomBattle } from 'utils/services';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(404).end();
  }

  const data = await randomBattle();

  res.status(200).json(data);
}
