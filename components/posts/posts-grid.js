import classes from 'components/posts/posts-grid.module.css';
import { PostItem } from 'components/posts/post-item';

const PostsGrid = ({ posts }) => {
  const { grid } = classes;
  return (
    <ul className={grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export { PostsGrid };
