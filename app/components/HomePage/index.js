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

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Row className={styles.site_row}>
          <Col xs={12} md={12}>
            <Row>
              <Col xs={12} md={12}>
                <div className={styles.header}>
                  <h1 className={styles.header_text}>Ease <br />to the <br />East</h1>           
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className={styles.nav}>
                  <a href="#who" className={styles.a}>Who</a>
                  <a href="#what" className={styles.a}>What</a>
                  <a href="#where" className={styles.a}>Where</a>              
                </div>
              </Col>
            </Row>            
            <Image className={styles.logo} src={Background} />
            <Image className={styles.logo} src={Tree5} />
            <Image className={styles.logo} src={Tree4} />
            <Image className={styles.logo} src={Tree3} />
            <Image className={styles.logo} src={Tree2} />
            <Image className={styles.logo} src={Tree1} />
            <Image className={styles.logo} src={Sun} />
            <Image className={styles.logo} src={Clouds} />
            <Image className={styles.logo} src={Birds} />
          </Col>        
        </Row>
        <Row className={styles.site_row}>
          <Col xs={12} md={12}>
            <h1> Some text</h1>
            <Image src={Background} />          
          </Col>        
        </Row>
        <Row className={styles.site_row}>
          <Col xs={12} md={12}>
            <h1> Some more text</h1>
            <Image src={Background} />          
          </Col>        
        </Row>
      </div>
    );
  }
}
