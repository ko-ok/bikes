import React from 'react';
import { Button, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Img from 'components/Img';
import styles from './../../assets/styles.css';
import Instafeed from 'instafeed.js';

/* eslint-disable react/prefer-stateless-function */
export default class RowWhat extends React.Component {
  componentDidMount() { 
   var feed = new Instafeed({
      get: 'user',
      userId: '3269895369',
      accessToken: '3269895369.a1a6bbc.5b890b3244f9416281d7f2d778f62ede',
      limit: 9,
      template: '<a target="_blank" class="animation" href="{{link}}"><img width="200px" src="{{image}}" /></a>'
    });

    feed.run();  
  }

  render() {
    return (
      <Row id="where" className="section parallax__layer parallax__layer--base">
          <Col className="main" md={12}>
            <Row>
              <Col className="col-bi" xs={11} md={6}>
                <h1 id="way">THE WAY</h1>
                <Image className="img-row map" src={require('./../../assets/trail2BOTHRIDERS.gif')} />
              </Col>
              <Col className="col-bi words" xs={11} md={5}>
                <div className="vert-center">              
                  <div className="wow">
                    <h1 id="wow">THE WOW</h1>
                    <div id="instafeed"></div>
                  </div>
                  <div className="words">
                    <h1 id="words">THE WORDS</h1>
                    <a target="_blank" id="blog" href="http://www.kacperniburski.com">Steering our blog.</a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>        
        </Row>
    )
  }
}