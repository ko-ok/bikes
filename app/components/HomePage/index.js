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
import Background from './bikingbackground_RS.jpg';
import Tree1 from './bikingbackground_T1.png';
import Tree2 from './bikingbackground_T2.png';
import Tree3 from './bikingbackground_T3.png';
import Tree4 from './bikingbackground_T4.png';
import Tree5 from './bikingbackground_T5.png';
import Clouds from './bikingbackground_T7.png';
import Birds from './bikingbackground_T8.png';
import Sun from './bikingbackground_T6.png';
import Img from 'components/Img';
import styles from './styles.css'
import Page from 'components/Page';

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
  }

  render() {
    const renderedString;
    if (this.state.loaded) {
      renderedString = <Page />
    } else {
      renderedString = <div>Loading</div>
    }
    return (
      <div>
        {{renderedString}}
      </div>
    );
  }
}
