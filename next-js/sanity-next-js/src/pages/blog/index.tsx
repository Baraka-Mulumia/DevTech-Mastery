import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavBar } from '@/components/NavBar';
import { Post } from '@/types';
import { sanityClient } from '@/sanityClient';

export async function getStaticProps() {
  const query = `*[_type == "post"]{
        title,
        slug,
        mainImage {
            asset-> {
                _id,
                url
            },
            alt
        }
    }`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
}

const BlogPost: FunctionComponent<{ post: Post }> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <div
        className='max-w-sm rounded overflow-hidden shadow-lg
      rounded  leading-snug '
      >
        <div className='w-full h-48 border-l-8 border-blue-400 relative'>
          <Image
            className='object-cover'
            fill
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt}
          />
        </div>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{post.title}</div>
          <p className='text-gray-700 text-base'>{post.slug.current}</p>
        </div>
        <div className='px-6 py-4'>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #photography
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #travel
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
            #winter
          </span>
        </div>
      </div>
    </Link>
  );
};

const Blog: FunctionComponent<{
  posts: Post[];
}> = ({ posts = [] }) => {
  console.log(posts);

  return (
    <div className='bg-gray-100'>
      <NavBar />
      <main>
        <div className='container mx-auto  flex flex-col items-center justify-center py-10 gap-4'>
          <h1>
            <span className='text-6xl text-gray-900 font-bold leading-none lg:leading:snug '>
              Blog
            </span>
          </h1>
          <h2 className='text-5xl text-gray-500 font-bold leading-none lg:leading:snug'>
            Welcome to my blog
          </h2>
        </div>

        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {posts &&
              posts?.map((post) => (
                <BlogPost key={post.slug.current} post={post} />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
