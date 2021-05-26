import classes from 'components/home-page/featured-posts.module.css';
import { PostsGrid } from 'components/posts/posts-grid';

const FeaturedPosts = ({ posts }) => {
  const { latest } = classes;

  return (
    <section className={latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export { FeaturedPosts };
