import React from 'react';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();
  
  return (
  <>
    {
      posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))
    }
  </>
  )
}