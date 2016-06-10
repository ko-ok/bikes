import React from 'react';
import { Button, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Img from 'components/Img';
import styles from './../../assets/styles.css';
import Instafeed from 'instafeed.js';

/* eslint-disable react/prefer-stateless-function */
export default class RowNavHidde extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div id="rowNavHidden">
        <div id="left-links">
          <a id="home" href="#home" className={styles.a}>Ease To East</a>
        </div>
        <div id="right-links">
          <a href="#who" className={styles.a}>Who</a>
          <a href="#where" className={styles.a}>Where</a>              
          <a href="#what" className={styles.a}>What</a>
        </div>
      </div>
    )
  }
}