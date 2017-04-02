import React, { PropTypes } from 'react';
import classnames from 'classnames';
import omit from 'lodash/fp/omit';

const Icon = props => (
  <i
    {...omit(['name'], props)}
    className={classnames(
      'mdi',
      `mdi-${props.name}`,
      props.className
    )}
  />
);

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.any,
};

export default Icon;
