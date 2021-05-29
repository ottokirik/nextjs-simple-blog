import ReactMarkdown from 'react-markdown';

import classes from 'components/posts/post-detail/post-content.module.css';
import { PostHeader } from './post-header';

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export { PostContent };
