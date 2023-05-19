import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import prismadb from './prismadb';
import { authOptions } from "../pages/api/[nextAuth]";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    throw new Error('Not signed in');
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      hashedPassword: false,
      createdAt: true,
      email: true,
      emailVerified: true,
      favoriteIds: true,
      image: true,
      name: true,
      updatedAt: true
    }
  });

  if (!currentUser) {
    throw new Error('Not signed in');
  }

  return { currentUser };
};

export default serverAuth;