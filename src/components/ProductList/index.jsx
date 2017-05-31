import React, { PropTypes } from 'react';
import ProductsRow from './ProductsRow.jsx';

import './style.less';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

//        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
//        let loader = (this.props.loader)? <Loader /> : '';
        let bsRow = '';
        if(this.props.items['best-sellers']) {
            bsRow = <ProductsRow  title="Mais vendidos" products={this.props.items['best-sellers']} />;
        }
        let relRow = '';
        if(this.props.items['best-sellers']) {
            relRow = <ProductsRow  title="Lançamentos" products={this.props.items['releases']} />;
        }
        return (
            <section className="product-list">
                <div className="container">
                    {bsRow}
                    {relRow}
                </div>
            </section>
        );
    }

}

ProductList.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired,
};


export default ProductList;
