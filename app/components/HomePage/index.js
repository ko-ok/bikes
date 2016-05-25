/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */
import React from 'react';
import { Button, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Img from 'components/Img';
import styles from './styles.css'
import Page from 'components/Page';
import bootstrapStyles from 'assets/bootstrap.min.css'
import bootstrapThemeStyles from 'assets/bootstrap-theme.min.css'

let renderedString;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      loaded: false
    };
  }

  onPageLoad() {
    if (this.isMounted()) {
      this.setState({ loaded: true });
    }
  }

  componentDidMount() {
    let thisState = this;
    setTimeout(function() {
      thisState.setState({ loaded: true });
    }, 1000)
  }

  render() {
    if (this.state.loaded) {
      renderedString = <Page />
    } else {
      renderedString = <div>Loading</div>
    }
    return (
      <div>
        {renderedString}
      </div>
    );
  }
}
