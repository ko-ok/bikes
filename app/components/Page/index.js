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
import RowMain from 'components/RowMain';
import RowWhere from 'components/RowWhere';
import RowWhat from 'components/RowWhat';
import RowWho from 'components/RowWho';
import Footer from 'components/Footer';
import RowNavHidden from 'components/RowNavHidden';
import styles from './../../assets/styles.css';
import Instafeed from 'instafeed.js';
var Waypoint = require('react-waypoint');
let thisState;
let renderString;

/* eslint-disable react/prefer-stateless-function */
export default class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      showNav: false
    }
    thisState = this;
  }

  componentDidMount() {
  }

  _handleWaypointEnter() {
    console.log("entered")
    // grab direction, if down show, if up hide
    if (thisState.state.showNav) {      
      thisState.setState({ showNav: false });
    } else {
      thisState.setState({ showNav: true });
    }
  }

  _handleWaypointLeave() {
    console.log("exit")
    thisState.setState({ showNav: false });
  }

  render() {
    if (this.state.showNav) {
      renderString = <RowNavHidden />
    } else {
      renderString = <div></div>
    }
    return (
      <div>
        {renderString}
        <div className="parallax">
          <RowMain />
          <RowWho />
          <Waypoint
            onEnter={this._handleWaypointEnter}
          />
          <RowWhat />
          <RowWhere />
          <Footer />            
        </div>
      </div>
    )
  }
}