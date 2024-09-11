'use client';

import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      Logged In
      <p>name: {session?.user?.name}</p>
      <img src={session?.user?.image} alt="" />
    </div>
  );
}
