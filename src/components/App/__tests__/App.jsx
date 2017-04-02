import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Cart from '../../Cart';
import ProductList from '../../ProductList';

const mandatoryProps = {
  cartLength: 10,
  isCartOpen: false,
  toggleCart: jest.fn(),
};

const shallowApp = props => shallow(
  <App {...mandatoryProps} {...(props || {})} />
);

describe('components/App', () => {
  it('should not have a <Cart /> if props.isCartOpen is false', () => {
    const component = shallowApp({ isCartOpen: false });
    const cart = component.find(Cart);

    expect(cart.exists()).toBe(false);
  });

  it('should have a <Cart /> if props.isCartOpen is true', () => {
    const component = shallowApp({ isCartOpen: true });
    const cart = component.find(Cart);

    expect(cart.exists()).toBe(true);
  });

  it('should contain the good text with the cart length in the header button', () => {
    const component = shallowApp({ cartLength: 5 });
    const button = component.find('.App__cart-button');
    const buttonText = button
      .prop('children')
      .slice(1)
      .join('')
      .trim();

    expect(buttonText).toBe('Cart (5)');
  });

  it('should contain a <ProductList />', () => {
    const component = shallowApp();
    const productList = component.find(ProductList);

    expect(productList.exists()).toBe(true);
  });

  it('should a button that can toggle cart on click', () => {
    const toggleCart = jest.fn();
    const component = shallowApp({ toggleCart });
    const button = component.find('.App__cart-button');

    expect(button.prop('onClick')).toBe(toggleCart);
  });
});
