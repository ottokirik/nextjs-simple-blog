import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

export const getPostFiles = () => fs.readdirSync(postDirectory);

export const getPostData = (postIdentifier) => {
  const slug = postIdentifier.replace(/\.md$/, '');

  const filePath = path.join(postDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostFiles();

  return postFiles
    .map((postFile) => getPostData(postFile))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export const getFeaturedPosts = () =>
  getAllPosts().filter((post) => post.isFeatured);
