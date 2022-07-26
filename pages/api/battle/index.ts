import { NextApiRequest, NextApiResponse } from 'next';
import { getHero } from 'utils/services';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const { ids } = req.query;
  const fetchIds = (ids as string).split(',');

  const data = await Promise.all(fetchIds.map((id) => getHero(id)));

  res.status(200).json(data);
}
