const getData = async (slug: string) => {
  await delay(5000);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const data = await res.json();
  return data;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const SingleBlogPostPage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div>
      <h1>Single Blog Post</h1>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default SingleBlogPostPage;
