import { NextPage } from 'next';

const Blog: NextPage = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};

export default Blog;

export async function generateStaticParams() {
  const posts = [
    {
      slug: '4',
    },
    {
      slug: '5',
    },
  ];
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
