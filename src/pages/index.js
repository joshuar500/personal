import React from 'react';
import Hero from '../components/hero';
import Me from '../components/me';
import Khaleesi from '../components/cats';

export default () => {
  return (
    <>
      <Hero />
      <div>The best designer &amp; developer in the Universe. Over 160 years of experience.</div>
      <Khaleesi />
      <hr />
      <Me />
    </>
  );
}
