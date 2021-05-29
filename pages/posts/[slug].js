import { PostContent } from 'components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from 'lib/posts-util';

const PostDetailPage = ({ post }) => {
  return <PostContent post={post} />;
};

export const getStaticProps = ({ params: { slug } }) => {
  const post = getPostData(slug);

  return {
    props: { post },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false, // Рендер страницы только после обращения к ее адресу
  };
};

export default PostDetailPage;
