import Link from 'next/link';
import React from 'react';

export default function header() {
  return (
    <div>
      <nav className="bg-sky-700 flex gap-2">
        <Link href={'/api/auth/signin'}>
          Login
        </Link>
        <Link href={'/'}>Home</Link>
        <Link href={'/api/auth/signout'}>
          Sign out
        </Link>
        <Link href={'/about'}>about</Link>
      </nav>
    </div>
  );
}
