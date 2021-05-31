import Head from 'next/head';

import { AllPosts } from 'components/posts/all-posts';
import { getAllPosts } from 'lib/posts-util';

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts :: Max' Blog</title>
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: { posts },
    // revalidate: 600,
  };
};

export default AllPostsPage;
