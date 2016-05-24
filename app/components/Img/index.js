
/**
 *
 * Img.react.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React, { PropTypes } from 'react';
import styles from 'components/HomePage/styles.css'

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
    }, 10000)
  }

  componentDidMount() {
    let img = new window.Image();
    img.onload = this.onImageLoad();
  }

  render() {
    var { className, ...props } = this.props;
    var rootClassName = className ? className : className;
    let imgString;

    if (this.state.loaded) {
      imgString=<img className={styles.logo, styles.image, styles.image_loaded} src={this.props.src} />
    } else {
      imgString=<img className={styles.logo, styles.image} src={this.props.src} />
    }

    return (
      <div>
        {imgString}
      </div>
    )
  }
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Img;