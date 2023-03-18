import { NavBar } from '@/components/NavBar';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <main
        style={{
          background: `url("/main-bg.jpg")`,
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(9,9,121,0.5) 0%, rgba(0,212,255,0.5) 100%)',
          }}
        >
          <div className='container mx-auto  flex flex-col items-center justify-center min-h-screen py-2'>
            <h1 className='text-6xl text-white font-bold leading-none lg:leading:snug'>
              Aloha. I&apos;m akarab
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
