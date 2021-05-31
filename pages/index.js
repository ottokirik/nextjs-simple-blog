import Head from 'next/head';

import { FeaturedPosts } from 'components/home-page/featured-posts';
import Hero from 'components/home-page/hero';
import { getFeaturedPosts } from 'lib/posts-util';

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Max' Blog</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const posts = getFeaturedPosts();
  return {
    props: { posts },
    // revalidate: 600,
  };
};

export default HomePage;
