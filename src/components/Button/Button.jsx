import React, { PropTypes } from 'react';
import classnames from 'classnames';
import omit from 'lodash/fp/omit';

import Icon from '../Icon';

import './Button.scss';

const Button = props => (
  <button
    {...omit(['icon', 'primary'], props)}
    className={classnames(
      'Button',
      { 'Button--icon': props.icon, 'Button--primary': props.primary },
      props.className
    )}
  >
    {props.icon ? <Icon name={props.icon} /> : props.children}
  </button>
);

Button.displayName = 'Button';

Button.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.any,
  icon: PropTypes.string,
};

export default Button;
