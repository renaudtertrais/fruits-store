import { connect } from 'react-redux';

import ProductList from './ProductList';

const mapStateToProps = ({ products, cart }) => ({
  products,
  cart,
});

export default connect(mapStateToProps)(ProductList);
