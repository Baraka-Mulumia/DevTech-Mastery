'use client';

import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const ContactPage: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Contact</h1>
      <Link href='/'>
        <p>Home</p>
      </Link>
      <button onClick={() => router.push('/blog')}>Blog Page</button>
    </div>
  );
};

export default ContactPage;
