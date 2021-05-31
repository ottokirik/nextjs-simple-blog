import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import classes from 'components/posts/post-detail/post-content.module.css';
import { PostHeader } from './post-header';

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}`;
  const imageFullPath = `${imagePath}/${post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`${imagePath}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1];

      return (
        <SyntaxHighlighter
          style={xonokai}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imageFullPath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export { PostContent };
