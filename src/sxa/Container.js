import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  fluid: PropTypes.bool
};

const defaultProps = {
  classes: '',
  fluid: false
};

class Container extends PureComponent {
  render() {
    const {
      children, classes, fluid
    } = this.props;

    const containerClass = classNames(
      {
        'container-fluid': fluid,
        container: !fluid
      },
      classes
    );

    return (
      <div className={containerClass}>
        <div className="component-content">{children}</div>
      </div>
    );
  }
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
