import React from 'react';
import { Button, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Background from 'components/Page/bikingbackground_RS.jpg';
import Tree1 from 'components/Page/bikingbackground_T1.png';
import Tree2 from 'components/Page/bikingbackground_T2.png';
import Tree3 from 'components/Page/bikingbackground_T3.png';
import Tree4 from 'components/Page/bikingbackground_T4.png';
import Tree5 from 'components/Page/bikingbackground_T5.png';
import Clouds from 'components/Page/bikingbackground_T7.png';
import Birds from 'components/Page/bikingbackground_T8.png';
import Sun from 'components/Page/bikingbackground_T6.png';
import Img from 'components/Img';
import styles from './../../assets/styles.css';
import { StickyContainer, Sticky } from 'react-sticky';

/* eslint-disable react/prefer-stateless-function */
export default class RowMain extends React.Component {
  componentDidMount() { 
    document.getElementById('video').play()
  }

  render() {
    return (
      <Row id="home" className="parallax__layer parallax__layer--back">
        <Col className="main" md={12}>            
          <Row>
            <Col md={12}>
              <div className={styles.header}>
                <h1 className={styles.header_text}>
                  <span className="header-main">Ease</span>
                  <br/><span className="header-small">to</span>
                  <br/><span className="header-main">East</span>
                </h1>
                <h3 className={styles.header_text}>Date TBD</h3> 
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className={styles.nav}>
                <a href="#who" className={styles.shared}>Who</a>
                <a href="#where" className={styles.shared}>Where</a>              
                <a href="#what" className={styles.shared}>What</a>
              </div>
            </Col>
          </Row>
          <Img className={styles.logo} timeSet={1} src={Background} />
          <Img className={styles.logo} timeSet={2500} src={Tree5} />
          <Img className={styles.logo} timeSet={2000} src={Tree4} />
          <Img className={styles.logo} timeSet={1500} src={Tree3} />
          <Img className={styles.logo} timeSet={1000} src={Tree2} />
          <Img className={styles.logo} timeSet={500} src={Tree1} />
          <Img className={styles.logo} timeSet={2900} src={Sun} />
          <Img className={styles.logo} animation={'repeat'} animationType={'clouds'} timeSet={2700} src={Clouds} />
          <Img className={styles.logo} animation={'repeat'} animationType={'bird'} timeSet={3300} src={Birds} />            
        </Col>        
      </Row>
    )
  }
}