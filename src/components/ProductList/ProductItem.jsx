import React, { PropTypes } from 'react';
import { BlockPicker } from 'react-color';

class ProductItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      pickedColor: '#CBCBCB',
    };

   this.togglePicker = this.togglePicker.bind(this);
   this.onChangeColor = this.onChangeColor.bind(this);
  }
  togglePicker() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }
  onChangeColor(color) {
    this.setState({ pickedColor: color.hex, displayColorPicker: false });
  }
  render() {
    let picker = '';
    if (this.state.displayColorPicker) {
      picker = (
        <div className="picker-container" >
          <BlockPicker onChangeComplete={this.onChangeColor} color={this.state.pickedColor} width='180px' />
        </div>
      );
    }
    return (
        <div className="product-item">
            <img className="item-image" src={this.props.product.image} />
            <div className="personalize" style={{ borderBottom: `1px solid ${this.state.pickedColor}` }} onClick={this.togglePicker}>
                <div className="personalize-icon"></div>
                <p className="personalize-title" style={{ color: this.state.pickedColor }}>Personalize</p>
              {picker}
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
