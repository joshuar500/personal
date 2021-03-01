import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <>
    <h1>{post.frontmatter.title}</h1>
    <MDXRenderer>{post.body}</MDXRenderer>
    <br />
    <br />
    <Link to="/">&larr; back to all posts</Link>
  </>
);

export default PostTemplate;
