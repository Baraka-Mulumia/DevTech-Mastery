import { FunctionComponent } from 'react';
import Link from 'next/link';

export const NavBar: FunctionComponent = () => {
  return (
    <header className='bg-gray-900 shadow-md'>
      <div className='container mx-auto justify-between'>
        <nav className='flex text-gray-100'>
          <Link href='/'>
            <p className='inline-flex py-6 px-2 mr-4 items-center text-gray-100 text-4xl font-bold tracking-widest'>
              akarab
            </p>
          </Link>
          <Link href='/about'>
            <p className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-400 hover:bg-gray-700'>
              About
            </p>
          </Link>
          <Link href='/blog'>
            <p className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-400 hover:bg-gray-700'>
              Blog
            </p>
          </Link>
          <Link href='/projects'>
            <p className='inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-400 hover:bg-gray-700'>
              Projects
            </p>
          </Link>
        </nav>
      </div>
    </header>
  );
};
