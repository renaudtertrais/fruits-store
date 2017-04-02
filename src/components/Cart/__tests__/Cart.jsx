import React from 'react';
import { shallow } from 'enzyme';

jest.mock('currency-formatter', () => ({
  format: jest.fn(),
}));

jest.mock('../../../libs/helpers', () => ({
  getTotalFormProducts: jest.fn(),
}));

import Cart from '../Cart';
import CartItem from '../../CartItem';
import * as currencyFormatter from 'currency-formatter';
import * as helpers from '../../../libs/helpers';

const mandatoryProps = {
  products: [],
};

const shallowCart = props => shallow(
  <Cart {...mandatoryProps} {...(props || {})} />
);

describe('components/Cart', () => {
  it('should render <CartItem /> with good props', () => {
    const products = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
    ];

    const component = shallowCart({ products });
    const cartItems = component.find(CartItem);

    expect(cartItems.length).toBe(2);
    expect(cartItems.first().props()).toEqual(products[0]);
  });

  it('should display the total in the cart footer', () => {
    currencyFormatter.format.mockImplementation(() => 'total formatted');
    helpers.getTotalFormProducts.mockImplementation(() => 'total from products');
    const products = [{ id: 1, name: 'foo' }];
    const component = shallowCart({ products });
    const total = component.find('.Cart__total-value');

    expect(helpers.getTotalFormProducts).toBeCalledWith(products);
    expect(currencyFormatter.format).toBeCalledWith('total from products', { code: 'CHF' });
    expect(total.text()).toBe('total formatted');
  });
});
