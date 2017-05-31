import React, { PropTypes } from 'react';
import ProductItem from './ProductItem.jsx'

class ProductsRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

//        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
//        let loader = (this.props.loader)? <Loader /> : '';
        const items = [];
        for (let i=0; i<this.props.products.length; i++){
            items.push(<ProductItem key={i} product={this.props.products[i]} />);
        }
        return (
            <div className="products-row">
                <p>{this.props.title}</p>
                <ul className="list">
                    {items}
                </ul>
            </div>
        );
    }
}

ProductsRow.propTypes = {
    products: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};


export default ProductsRow;
