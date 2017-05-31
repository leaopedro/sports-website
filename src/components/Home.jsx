import React from 'react';
import NavbarContainer from './../containers/NavbarContainer'
import ProductListContainer from './../containers/ProductListContainer'
import FilterContainer from './../containers/FilterContainer'
import Banner from './../components/Banner'

import './../style/main.less';

const Home = () => {
    return (
    <div className="home">
        <NavbarContainer />
        <Banner imageUrl="/img/banner.png" />
        <FilterContainer />
        <ProductListContainer />
        <Banner imageUrl="/img/banner-bottom.jpg" />
    </div>
  );
};

export default Home;
