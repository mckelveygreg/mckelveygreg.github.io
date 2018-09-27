import React, { Component } from 'react'
import './styles.css';
import Banner from '../../components/Banner/Banner';
import Skills from '../../components/Skills';

import certifications from './certifications';

export default class CertificationsPage extends Component {
  render() {
    return (
      <div>
        <Banner banner="Certifications" />
        <div id="certificationsPage">
          <Skills content={certifications} />
        </div>
      </div>
    )
  }
}
