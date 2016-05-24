
/**
 *
 * Img.react.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React, { PropTypes } from 'react';

export default class Img extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onImageLoad() {
    if (this.isMounted()) {
      this.setState({ loaded: true });
    }
  }

  render() {
    return (
      <img className={this.props.className} src={this.props.src} />
    )
  }
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Img;