import { NextApiRequest, NextApiResponse } from 'next';
import { getHero } from 'utils/services';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(404).end();
  }

  const { id } = req.query;
  const data = await getHero(id as string);
  res.status(200).json(data);
}
