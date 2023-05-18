import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '../../libs/prismadb';

export default async function handler(req,res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const { email, name, password } = req.body;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email
      }
    })

    if(name.length === 0) {
      return res.status(422).json({ error: 'Invalid username' });
    }
    
    if (existingUser) {
      return res.status(422).json({ error: 'Email taken' });
    }

    if(password.length === 0) {
      return res.status(422).json({ error: 'Invalid password' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: '',
        emailVerified: new Date(),
      }
    })

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}