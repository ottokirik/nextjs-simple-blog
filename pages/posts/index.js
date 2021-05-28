import { AllPosts } from 'components/posts/all-posts';
import { getAllPosts } from 'lib/posts-util';

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export const getStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: { posts },
    // revalidate: 600,
  };
};

export default AllPostsPage;
