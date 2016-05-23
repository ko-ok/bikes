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
import Banner from './test.jpg';
import Img from 'components/Img';
import styles from './styles.css'

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {

  render() {
    return (
      <Row>
        <Col xs={6} md={4}>
          <Img className={styles.logo} src={Banner} alt="react-boilerplate - Logo" />
        </Col>
        <Col xs={6} md={4}>
          <Img className={styles.logo} src={Banner} alt="react-boilerplate - Logo" />
        </Col>
        <Col xs={6} md={4}>
          <Img className={styles.logo} src={Banner} alt="react-boilerplate - Logo" />
        </Col>
      </Row>
    );
  }
}
