import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

const getPostData = (fileName) => {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const slug = fileName.replace(/\.md$/, '');
  const postData = {
    slug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postDirectory);

  return postFiles
    .map((postFile) => getPostData(postFile))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export const getFeaturedPosts = () =>
  getAllPosts().filter((post) => post.isFeatured);
