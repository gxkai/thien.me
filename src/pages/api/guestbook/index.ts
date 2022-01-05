import type { NextApiRequest, NextApiResponse } from 'next';
import { useAuth } from '~/lib/auth' 
import {prisma} from '~/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        updated_at: 'desc'
      }
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        body: entry.body,
        created_by: entry.created_by,
        updated_at: entry.updated_at
      }))
    );
  }

  const {
    user, // The logged-in user object
    loading, // loading state
    signOut // and a method to let the logged-in user sign out
} = useAuth()


  if (!user) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'POST') {
    const newEntry = await prisma.guestbook.create({
      data: {
        email:user.email,
        body: (req.body.body || '').slice(0, 500),
        created_by: user.email
      }
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      created_by: newEntry.created_by,
      updated_at: newEntry.updated_at
    });
  }

  return res.send('Method not allowed.');
}