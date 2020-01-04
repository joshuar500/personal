import React from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

export default function Layout ({ children }) {

  const { title, description } = useSiteMetadata();

  return (
    <div className="main-layout">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      { children }
    </div>
  );
}