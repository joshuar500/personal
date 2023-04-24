const postTemplate = require.resolve(`./src/templates/posts.js`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            id
            slug
          }
          internal {
          contentFilePath
        }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id;
  });

  console.log('posts', posts)

  posts.forEach(post => {
    actions.createPage({
      path: 'blog/' + post.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
