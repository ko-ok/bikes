import React, { PropTypes } from 'react';
import styles from './../../assets/styles.css'

export default class Img extends React.Component {
  constructor(props) {
    super();

    this.state = {
      loaded: false,
      timeSet: props.timeSet,
      animationType: props.animationType,
      animation: props.animation
    };
  }

  onImageLoad() {
    let thisState = this;

    setTimeout(function() {
      thisState.setState({ loaded: true });
    }, thisState.state.timeSet)

    setTimeout(function() {
      if (thisState.state.animation) {
        switch(thisState.state.animationType) {
          case 'bird':
            break;
          case 'clouds':
            break;
        }
      }
    }, thisState.state.timeSet + 500)
  }

  componentDidMount() {
    let img = new window.Image();
    img.onload = this.onImageLoad();
  }

  render() {
    var { className, ...props } = this.props;
    var rootClassName = className ? className : className;
    let imgString;
    let classDiv = this.state.loaded ? 'image-container loaded' : 'image-container'
    if (this.state.loaded) {
      if (this.state.animation) {
        classDiv += ' bobble'
      } 
      imgString=<img className={'img-loaded', styles.logo, styles.image, styles.image_loaded} src={this.props.src} />
    } else {
      imgString=<img className={styles.logo, styles.image} src={this.props.src} />
    }

    return (
      <div className={classDiv}>
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