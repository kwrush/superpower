import { NextApiRequest, NextApiResponse } from 'next';
import { searchByName } from '../../utils/services.server';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(404).json({ message: 'No API found' });
  }

  const { name } = req.query;
  const data = await searchByName(name as string);
  res.status(200).json({ ...data });
}
