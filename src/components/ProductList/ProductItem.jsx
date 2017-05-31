import React, { PropTypes } from 'react';

class ProductItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

//        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <div className="product-item">
                <p>{this.props.product.title}</p>
            </div>
        );
    }

}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};


export default ProductItem;
