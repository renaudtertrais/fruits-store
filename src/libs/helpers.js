import compose from 'lodash/fp/compose';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import add from 'lodash/fp/add';
import multiply from 'lodash/fp/multiply';

const getQuantity = (promo, qty) => (
  promo ? (qty - Math.floor(qty / 3)) : qty
);

export const getTotalPrice = (price, quantity, promotion) => compose(
  multiply(price),
  getQuantity
)(promotion, quantity);

export const getTotalFormProducts = compose(
  reduce(add, 0),
  map(({ price, quantity, promotion }) => getTotalPrice(price, quantity, promotion))
);
