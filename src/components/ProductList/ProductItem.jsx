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
                <img className="item-image" src={this.props.product.image} />
                <div className="personalize">
                    <div className="personalize-icon"></div>
                    <p className="personalize-title">Personalize</p>
                </div>
                <p className="item-title">{this.props.product.title}</p>
                <p className="item-type">{(this.props.product['high-top'])? 'Cano Alto' : 'Cano Baixo'}</p>
                <p className="item-price">{`R$ ${this.props.product.price}0`}</p>
                <p className="item-installments">{`ou ${this.props.product.installments.number}X ${this.props.product.installments.value}0 sem juros`}</p>
                <button className=" btn btn-default item-button" >Comprar</button>
            </div>
        );
    }

}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};


export default ProductItem;
