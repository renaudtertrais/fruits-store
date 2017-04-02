import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';
import Icon from '../../Icon';

const mandatoryProps = {};

const shallowButton = props => shallow(
  <Button {...mandatoryProps} {...(props || {})} />
);

describe('components/Button', () => {
  it('should foward any props', () => {
    const component = shallowButton({ title: 'foo', children: 'bar' });
    const button = component.find('button');

    expect(button.prop('title')).toBe('foo');
    expect(button.prop('children')).toBe('bar');
  });

  it('should render an <Icon /> if props.icon is defined and have the good className', () => {
    const component = shallowButton({ icon: 'foo' });
    const button = component.find('button');
    const icon = component.find(Icon);

    expect(icon.exists()).toBe(true);
    expect(icon.prop('name')).toBe('foo');
    expect(button.hasClass('Button--icon')).toBe(true);
  });

  it('should render a button with good className if props.primary is true', () => {
    const component = shallowButton({ primary: true });
    const button = component.find('button');

    expect(button.hasClass('Button--primary')).toBe(true);
  });
});
