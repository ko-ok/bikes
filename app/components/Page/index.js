// <Image className={styles.logo} src={Tree5} />
// <Image className={styles.logo} src={Tree4} />
// <Image className={styles.logo} src={Tree3} />
// <Image className={styles.logo} src={Tree2} />
// <Image className={styles.logo} src={Tree1} />
// <Image className={styles.logo} src={Sun} />
// <Image className={styles.logo} src={Clouds} />
// <Image className={styles.logo} src={Birds} />

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
// import videoEx from './video.mp4';
import Img from 'components/Img';
import styles from 'components/HomePage/styles.css'

/* eslint-disable react/prefer-stateless-function */
export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Row>
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
        <Row id="who" className="section">
          <Col xs={12} md={12}>
            <h1>Who we are</h1>            
          </Col>        
        </Row>
        <Row id="what" className="section">
          <Col xs={12} md={12}>
            <h1>What we are doing</h1>            
          </Col>        
        </Row>
        <Row id="where" className="section">
          <Col xs={12} md={12}>
            <h1>Where we are going</h1>            
          </Col>        
        </Row>
        <Row id="where" className="section">
          <Col xs={12} md={12}>
            <h1>How you can help?</h1>            
          </Col>        
        </Row>
        <Row id="where" className="section">
          <Col xs={12} md={12}>
            <h1>Or Subscribe!</h1>            
          </Col>        
        </Row>
        <Row id="footer" className="section">
          <Col xs={12} md={12}>
            <div className="video_container">
              <div className="video_overlay">
              </div>           
              <video autoplay muted loop>
                <source src={require('./video.mp4')} type="video/mp4" />
              </video>   
            </div>
          </Col>        
        </Row>
      </div>
    )
  }
}