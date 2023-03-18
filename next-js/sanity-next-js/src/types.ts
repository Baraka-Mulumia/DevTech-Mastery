export type SanityImage = {
  asset: {
    _id: string;
    url: string;
  };
  alt: string;
};

export type SanitySlug = {
  current: string;
};

export type Author = {
  name: string;
  slug: SanitySlug;
  image: SanityImage;
};

export type PostCategory = {
  title: string;
  slug: SanitySlug;
  description: string;
};

export type Post = {
  title: string;
  slug: SanitySlug;
  author: Author;
  mainImage: SanityImage;
  categories: PostCategory[];
  publishedAt: string;
  body: string;
};
