import React from 'react';
import { Button, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Img from 'components/Img';
import styles from './../../assets/styles.css';
import Instafeed from 'instafeed.js';

/* eslint-disable react/prefer-stateless-function */
export default class RowWho extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    console.log('test')
  }

  render() {
    return (
      <Row id="who" className="section parallax__layer parallax__layer--base">
        <Col className="main"  md={12}>
          <Row>
            <Col className="col-bi hi" md={6}>
              <h1>Hi.</h1>
              <h3>We're twins traveling to Halifax on bike. We want you to come along with us - huffing, sweaty, and full of undercooked beans. We'll save you a bite too.</h3>
            </Col>
            <Col className="col-bi" md={6}>
              <Image className="img-row waving" src={require('./../../assets/WavingGIF.gif')} />              
            </Col>
          </Row>
        </Col>        
      </Row>
    )
  }
}