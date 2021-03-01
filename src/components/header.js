import React from 'react';
import { Link } from 'gatsby';

function setActive({ isCurrent }) {
  return {
    style: {
      color: isCurrent ? '#333' : '#999',
    },
  };
}

const Header = () => (
  <header>
    <Link to="/" getProps={setActive}>
      Home
    </Link>
    <Link to="/about" getProps={setActive}>
      About
    </Link>
    <Link to="/blog" getProps={setActive}>
      Blog
    </Link>
  </header>
);

export default Header;
