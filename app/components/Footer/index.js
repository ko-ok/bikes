import React from 'react';
import { Button, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Img from 'components/Img';
import styles from './../../assets/styles.css';
import Instafeed from 'instafeed.js';

/* eslint-disable react/prefer-stateless-function */
export default class Footer extends React.Component {
  componentDidMount() { 
    document.getElementById('video').play()
  }

  render() {
    return (
      <Row id="footer" className="section parallax__layer parallax__layer--base">
        <Col md={12}>
          <div className="video_container">
            <div id="mc_embed_signup">
              <form action="//twintrikes.us13.list-manage.com/subscribe/post?u=c5911c9c8ee9ad4034135df57&amp;id=1d57ec0e76" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">                  
                  <div className="mc-field-group">                  
                    <input type="email" placeholder="Subscribe for updates!" name="EMAIL" className="required email" id="mce-EMAIL" />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                    <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                  </div>
                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_c5911c9c8ee9ad4034135df57_1d57ec0e76" tabindex="-1" /></div>
                  <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                </div>
              </form>
            </div>
            <video id="video" autoplay muted loop>
              <source src={require('./../../assets/Biking1.mp4')} type="video/mp4" />
            </video>   
          </div>
        </Col>        
      </Row> 
    )
  }
}