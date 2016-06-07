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
import styles from './../../assets/styles.css';
import Instafeed from 'instafeed.js';

/* eslint-disable react/prefer-stateless-function */
export default class Page extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="parallax">
        <RowMain />
        <RowWho />
        <RowWhere />
        <RowWhat />
        <Footer />            
      </div>
    )
  }
}