import React from 'react';

import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';

import Posts from '../components/posts/Posts';
import Footer from '../components/footer/Footer';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 
