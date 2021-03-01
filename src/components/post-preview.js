import React from 'react';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => (
  <article>
    <h3>
      <Link to={post.slug}>{post.title} &rarr;</Link>
    </h3>
  </article>
);

export default PostPreview;
