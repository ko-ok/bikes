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
import styles from './../../assets/styles.css'
import Instafeed from 'instafeed.js'

/* eslint-disable react/prefer-stateless-function */
export default class Page extends React.Component {
  componentDidMount() {
    var feed = new Instafeed({
      get: 'user',
      userId: '2245723916',
      accessToken: '3269895369.1677ed0.8c5fdf7251fc42088f1967eff659a2db',
      limit: 9
    });

    feed.run();

    document.getElementById('video').play()
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="main"  md={12}>            
            <Row>
              <Col md={12}>
                <div className={styles.header}>
                  <h1 className={styles.header_text}>Ease to the East</h1>           
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className={styles.nav}>
                  <a href="#who" className={styles.a}>Who</a>
                  <a href="#what" className={styles.a}>What</a>
                  <a href="#where" className={styles.a}>Where</a>              
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
            <Img className={styles.logo} timeSet={2700} src={Clouds} />
            <Img className={styles.logo} timeSet={3300} src={Birds} />            
          </Col>        
        </Row>
        <Row id="who" className="section">
          <Col className="main"  md={12}>
            <Row>
              <Col className="col-bi hi" md={6}>
                <h1>Hi.</h1>
                <h3>We're twins traveling to Halifax on bike. We want you to come along with us - huffing, sweaty, and full of undercooked beans. We'll save you a bite too.</h3>
              </Col>
              <Col className="col-bi" md={6}>
                <Image className="img-row waving" src={require('./../../assets/croppedwaving.gif')} />
                <Image className="img-row glasses" src={require('./../../assets/face2.png')} />
              </Col>
            </Row>
          </Col>        
        </Row>
        <Row id="what" className="section">
          <Col className="main" md={12}>
            <Row>
              <Col className="col-bi" md={6}>
                <h1 id="way">THE WAY</h1>
                <Image className="img-row map" src={require('./../../assets/trail2BOTHRIDERS.gif')} />
              </Col>
              <Col className="col-bi" md={6}>                
                <h1 id="wow">THE WOW</h1>
                <div id="instafeed"></div>

                <h1 id="words">THE WORDS</h1>
                <a id="blog" href="www.google.com">Bikes are Art</a>
              </Col>
            </Row>
          </Col>        
        </Row>
        <Row id="where" className="section">
          <Col className="main"  md={12}>
            <Row>
              <Col className="col-bi" md={6}>
                <h1 className="reason">THE REASON</h1>            
                <p className="reason-p"> We were born silent as clamshells. Three months premature, out of water too soon. We got lucky though, 90 odd days in intensive care, lovely parents, a lifetime to learn how to open and be open ourselves.</p>
                <p className="reason-p"> Yet as we find some different yet still quiet clamsells on this trip, we hope to help in small handfuls. We will be raising money for the Canadian Premature Babies Foundation. Please feel free to donate. Nothing is too little, the big evidence being found in us.</p>
                <button className="donate"> Donate </button>
              </Col>
              <Col className="col-bi img-di" md={6}>
                <Row>
                  <Col md={12}>
                    <Image className="img-row img-babies" src={require('./../../assets/hosp.png')} />
                  </Col>
                </Row>
                <Row>
                  <Col className="pic-col" md={6}>
                    <Image className="car-babies img-row" src={require('./../../assets/carbabies.jpg')} />
                  </Col>
                  <Col className="pic-col" md={6}>
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
        <Row id="footer" className="section">
          <Col md={12}>
            <div className="video_container">
              <video id="video" autoplay muted loop>
                <source src={require('./../../assets/Biking1.mp4')} type="video/mp4" />
              </video>   
            </div>
          </Col>        
        </Row>
      </div>
    )
  }
}