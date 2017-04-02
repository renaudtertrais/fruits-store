import { connect } from 'react-redux';

import Cart from './Cart';

const mapStateToProps = ({ products, cart }) => ({
  products: cart.map(({ id, quantity }) =>
    Object.assign({}, products.find(p => p.id === id), { quantity })
  ),
});

export default connect(mapStateToProps)(Cart);
