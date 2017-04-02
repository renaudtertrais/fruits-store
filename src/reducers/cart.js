import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_UPDATE_PRODUCT,
} from '../actions/cart';

export default (cart = [], action = {}) => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      return [...cart, { id: action.id, quantity: action.quantity }];
    case CART_REMOVE_PRODUCT:
      return cart.filter(({ id }) => id !== action.id);
    case CART_UPDATE_PRODUCT: {
      const index = cart.findIndex(({ id }) => id === action.id);
      return [
        ...cart.slice(0, index),
        { id: action.id, quantity: action.quantity },
        ...cart.slice(index + 1),
      ];
    }
    default:
      return cart;
  }
};
