import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../actions';


function mapStateToProps(state) {
    return {
        items: state.productList.items,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => {
            dispatch(fetchProducts());
        },
    }
}

const ProductListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);

export default ProductListContainer
