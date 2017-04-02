import React from 'react';
import { shallow } from 'enzyme';

jest.mock('currency-formatter', () => ({
  format: jest.fn(),
}));

jest.mock('../../../libs/helpers', () => ({
  getTotalPrice: jest.fn(),
}));

import CartItem from '../CartItem';
import * as currencyFormatter from 'currency-formatter';
import * as helpers from '../../../libs/helpers';

const mandatoryProps = {
  id: 1,
  name: 'Ananas',
  price: 0.5,
  quantity: 3,
  removeProduct: jest.fn(),
  updateQuantity: jest.fn(),
};

const shallowCartItem = props => shallow(
  <CartItem {...mandatoryProps} {...(props || {})} />
);

describe('components/CartItem', () => {
  it('should display the unit price formated', () => {
    currencyFormatter.format.mockImplementation(() => 'unit price formatted');
    const component = shallowCartItem({ price: 0.5 });
    const unitPrice = component.find('.CartItem__price--unit');

    expect(currencyFormatter.format).toBeCalledWith(0.5, { symbol: '' });
    expect(unitPrice.text()).toBe('unit price formatted');
  });

  it('should display the correct total price', () => {
    currencyFormatter.format.mockImplementation(() => 'total formatted');
    helpers.getTotalPrice.mockImplementation(() => 'total price');
    const props = {
      price: 0.5,
      quantity: 2,
      promotion: false,
    };
    const component = shallowCartItem(props);
    const totalPrice = component.find('.CartItem__price--total');

    expect(helpers.getTotalPrice).toBeCalledWith(0.5, 2, false);
    expect(currencyFormatter.format).toBeCalledWith('total price', { symbol: '' });
    expect(totalPrice.text()).toBe('total formatted');
  });

  it('should render an input number with quantity that trigger updateQuantity on change', () => {
    const props = {
      id: 3,
      quantity: 10,
      updateQuantity: jest.fn(),
    };
    const mockedEvent = { target: { value: 5 } };
    const component = shallowCartItem(props);
    const input = component.find('.CartItem__quantity');
    const inputOnChange = input.prop('onChange');

    expect(input.prop('value')).toBe(props.quantity);
    inputOnChange(mockedEvent);
    expect(props.updateQuantity).toBeCalledWith(props.id, mockedEvent.target.value);
  });

  it('should provide a function to a button that call props.removeProduct with id', () => {
    const props = {
      id: 2,
      removeProduct: jest.fn(),
    };
    const component = shallowCartItem(props);
    const button = component.find('.CartItem__remove-button');
    const buttonOnClick = button.prop('onClick');
    buttonOnClick();
    expect(props.removeProduct).toBeCalledWith(props.id);
  });
});
