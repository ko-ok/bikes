import React from 'react';
import { Button, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Img from 'components/Img';
import styles from './../../assets/styles.css';
import Instafeed from 'instafeed.js';

/* eslint-disable react/prefer-stateless-function */
export default class RowWhere extends React.Component {
  componentDidMount() { 
  }

  render() {
    return (
      <Row id="what" className="section parallax__layer parallax__layer--base">
        <Col className="main" xs={12} md={12}>
          <Row>
            <Col className="col-bi" xs={12} md={6}>
              <h1 className="reason">THE REASON</h1>            
              <p className="reason-p"> We were born silent as clamshells. Three months premature, out of water too soon. We got lucky though, 90 odd days in intensive care, lovely parents, a lifetime to learn how to open and be open ourselves.</p>
              <p className="reason-p"> Yet as we find some different yet still quiet clamsells on this trip, we hope to help in small handfuls. We will be raising money for the Canadian Premature Babies Foundation. Please feel free to donate. Nothing is too little, the big evidence being found in us.</p>
              <button className="donate"> Donate </button>
            </Col>
            <Col className="col-bi img-di" xs={12} md={6}>
              <Row>
                <Col xs={12} md={12}>
                  <Image className="img-row img-babies" src={require('./../../assets/hosp.png')} />
                </Col>
              </Row>
              <Row>
                <Col className="pic-col" xs={12} md={6}>
                  <Image className="car-babies img-row" src={require('./../../assets/carbabies.jpg')} />
                </Col>
                <Col className="pic-col" xs={12} md={6}>
                  <Row> 
                    <Col md={12}>
                      <Image className="img-row leg-raised" src={require('./../../assets/legraised.jpg')} />
                    </Col>
                  </Row>
                  <Row> 
                    <Col md={12}>
                      <Image className="img-row reckless" src={require('./../../assets/reckless.jpg')} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>            
        </Col>        
      </Row>
    )
  }
}