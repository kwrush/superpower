import { NextApiRequest, NextApiResponse } from 'next';
import { searchByName } from 'utils/services';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const { name } = req.query;
  const data = await searchByName(name as string);
  res.status(200).json(data);
}
