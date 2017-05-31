import React from 'react';
import NavbarContainer from './../containers/NavbarContainer'
import ProductListContainer from './../containers/ProductListContainer'
import Banner from './../components/Banner'

import './../style/main.less';

const Home = () => {
    return (
    <div className="home">
        <NavbarContainer />
        <Banner imageUrl="/img/banner.png" />
        <ProductListContainer />
        <Banner imageUrl="/img/banner-bottom.jpg" />
    </div>
  );
};

export default Home;
