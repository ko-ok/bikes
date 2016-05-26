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
import Instafeed from 'instafeed.js'

/* eslint-disable react/prefer-stateless-function */
export default class Page extends React.Component {
  componentDidMount() {
    var feed = new Instafeed({
      get: 'user',
      userId: '2245723916',
      accessToken: '3269895369.1677ed0.8c5fdf7251fc42088f1967eff659a2db'
    });

    feed.run();
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={12}>            
            <Row>
              <Col xs={12} md={12}>
                <div className={styles.header}>
                  <h1 className={styles.header_text}>Ease to the East</h1>           
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
            <Row>
              <Col className="hi" xs={6} md={6}>
                <h1>Hi.</h1>
                <h3>We're twins traveling to Halifax on bike. We want you to come along with us - huffing, sweaty, and full of undercooked beans. We'll save you a bite too.</h3>
              </Col>
              <Col xs={6} md={6}>
                <Image className="img-row waving" src={require('./../../assets/croppedwaving.gif')} />
                <Image className="img-row glasses" src={require('./../../assets/face2.png')} />
              </Col>
            </Row>
          </Col>        
        </Row>
        <Row id="what" className="section">
          <Col xs={12} md={12}>
            <Row>
              <Col xs={6} md={6}>
                <h1 id="way">THE WAY</h1>
                <Image className="img-row" src={require('./../../assets/trail2BOTHRIDERS.gif')} />
              </Col>
              <Col xs={6} md={6}>                
                <h1 id="wow">THE WOW</h1>
                <div id="instafeed"></div>

                <h1 id="words">THE WORDS</h1>
                <a id="blog" href="www.google.com">Bikes are Art</a>
              </Col>
            </Row>
          </Col>        
        </Row>
        <Row id="where" className="section">
          <Col xs={12} md={12}>
            <Row>
              <Col xs={6} md={6}>
                <h1 className="reason">THE REASON</h1>            
                <p className="reason-p"> We were born silent as clamshells. Three months premature, out of water too soon. We got lucky though, 90 odd days in intensive care, lovely parents, a lifetime to learn how to open and be open ourselves</p>
                <p className="reason-p"> Yet as we find some different yet still quiet clamsells on this trip, we hope to help in small handfuls. We will be raising money for the Canadian Premature Babies Foundation. Please feel free to donate. Nothing is too little, the big evidence being found in us.</p>
                <button className="donate"> Donate </button>
              </Col>
              <Col xs={6} md={6}>
                <Row>
                  <Col xs={12} md={12}>
                    <Image className="img-row" src={require('./../../assets/hosp.png')} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={6}>
                    <Image className="img-row" src={require('./../../assets/carbabies.jpg')} />
                  </Col>
                  <Col xs={6} md={6}>
                    <Row> 
                      <Col xs={12} md={12}>
                        <Image className="img-row" src={require('./../../assets/legraised.jpg')} />
                      </Col>
                    </Row>
                    <Row> 
                      <Col xs={12} md={12}>
                        <Image className="img-row" src={require('./../../assets/reckless.jpg')} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>            
          </Col>        
        </Row>
        <Row id="footer" className="section">
          <Col xs={12} md={12}>
            <div className="video_container">
              <div className="video_overlay">
                <h1> Subscribe for weekly updates!</h1>
                <input type="email"/>
                <button> Submit </button>
              </div>           
              <video autoplay controls muted loop>
                <source src={require('./../../assets/Biking1.mp4')} type="video/mp4" />
              </video>   
            </div>
          </Col>        
        </Row>
      </div>
    )
  }
}