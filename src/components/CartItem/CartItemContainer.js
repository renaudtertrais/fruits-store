import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';

import { updateQuantity, removeProduct } from '../../actions/cart';
import CartItem from './CartItem';

const mapDispatchToProps = dispatch => ({
  removeProduct: compose(dispatch, removeProduct),
  updateQuantity: compose(dispatch, updateQuantity),
});

export default connect(null, mapDispatchToProps)(CartItem);
