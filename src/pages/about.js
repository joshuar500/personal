import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <>
    <p>Currently living in sunny southern California.</p>
    <p>
      I'm a developer with a penchant for design. Among other things, I like to
      read books and watch movies. I love my family, friends, beautiful wife,
      daughter, and 2 kitties.
    </p>
    <p>
      You can contact me{' '}
      <a href="https://www.linkedin.com/in/joshuarincon500/">here.</a>
    </p>
    <Link to="/">&larr; back to home</Link>
  </>
);
