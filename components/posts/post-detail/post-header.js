import Image from 'next/image';

import classes from 'components/posts/post-detail/post-header.module.css';

const PostHeader = ({ title, image }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export { PostHeader };
