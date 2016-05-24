
/**
 *
 * Img.react.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React, { PropTypes } from 'react';

export default class Img extends React.Component {
  constructor(props) {
    super();

    this.state = {
      loaded: false,
      timeSet: props.timeSet
    };
  }

  onImageLoad() {
     let thisState = this;
    setTimeout(function() {
      thisState.setState({ loaded: true });
    }, 1000)
  }

  componentDidMount() {
    let img = new window.Image();
    img.onload = this.onImageLoad();
  }

  render() {
    var { className, ...props } = this.props;
    var rootClassName = className ? className + ' image' : 'image';
    if (this.state.loaded) {
      rootClassName += ' image-loaded';
    }

    return (
      <img className={rootClassName} src={this.props.src} />
    )
  }
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Img;