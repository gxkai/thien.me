import type { NextApiRequest, NextApiResponse } from 'next';

import { useAuth } from '~/lib/auth';
import {supabase} from '~/lib/supabase'
import {prisma} from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {user} = useAuth()
  const { id } = req.query;

  const entry = await prisma.guestbook.findUnique({
    where: {
      id: Number(id)
    }
  });

  if (req.method === 'GET') {
    return res.json({
      id: entry.id.toString(),
      body: entry.body,
      created_by: entry.created_by,
      updated_at: entry.updated_at
    });
  }

  if (!user) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'DELETE') {
    await prisma.guestbook.delete({
      where: {
        id: Number(id)
      }
    });

    return res.status(204).json({});
  }

  if (req.method === 'PUT') {
    const body = (req.body.body || '').slice(0, 500);

    await prisma.guestbook.update({
      where: {
        id: Number(id)
      },
      data: {
        body,
        updated_at: new Date().toISOString()
      }
    });

    return res.status(201).json({
      ...entry,
      body
    });
  }

  return res.send('Method not allowed.');
}