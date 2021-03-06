import classes from 'components/posts/all-posts.module.css';
import { PostsGrid } from './posts-grid';

const AllPosts = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export { AllPosts };
