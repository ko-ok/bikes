import React from 'react';
import { Button, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Img from 'components/Img';
import styles from './../../assets/styles.css';
import Instafeed from 'instafeed.js';

/* eslint-disable react/prefer-stateless-function */
export default class RowWhat extends React.Component {
  componentDidMount() { 
   // var feed = new Instafeed({
    //   get: 'user',
    //   userId: '2245723916',
    //   accessToken: '3269895369.1677ed0.8c5fdf7251fc42088f1967eff659a2db',
    //   limit: 9
    // });

    // feed.run();  
  }

  render() {
    return (
      <Row id="where" className="section parallax__layer parallax__layer--base">
          <Col className="main" md={12}>
            <Row>
              <Col className="col-bi" xs={11} md={7}>
                <h1 id="way">THE WAY</h1>
                <Image className="img-row map" src={require('./../../assets/trail2BOTHRIDERS.gif')} />
              </Col>
              <Col className="col-bi words" xs={11} md={5}>                
                <h1 id="wow">THE WOW</h1>
                <div id="instafeed"></div>
                <br />
                <br />
                <h1 id="words">THE WORDS</h1>
                <a id="blog" href="http://www.kacperniburski.com">Steering our blog.</a>
              </Col>
            </Row>
          </Col>        
        </Row>
    )
  }
}