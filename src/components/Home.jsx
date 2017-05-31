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
        <Banner imageUrl="img/banner.png" />
        <FilterContainer />
        <ProductListContainer />
        <Banner title={'JUST DO IT.'} imageUrl="img/banner-bottom.jpg" button={true} buttonTitle={'Todos os produtos'} />
        <section className="footer">
            <p>Nike Copyright 2017 - all rights reserved</p>
        </section>
    </div>
  );
};

export default Home;
