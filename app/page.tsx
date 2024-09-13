import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import Image from 'next/image';
export default async function Home() {
  const session = await getServerSession(options);

  console.log(session);

  return (
    <div>
      Logged In
      <p>name: {session?.user?.name}</p>
      <p>email: {session?.user?.email}</p>
      <p>age: {session?.user?.age}</p>
      <Image
        src={session?.user?.image as string}
        alt=""
        width={'100'}
        height={'100'}
      />
    </div>
  );
}
