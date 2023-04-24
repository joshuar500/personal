import React from 'react';
import { graphql, Link } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
    }
  }
`;

const PostTemplate = ({ data: { mdx: post }, children }) => (
  <>
    <h1>{post.frontmatter.title}</h1>
    {children}
    <br />
    <br />
    <Link to="/">&larr; back to all posts</Link>
  </>
);

export default PostTemplate;
