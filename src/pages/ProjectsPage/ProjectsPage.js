import React, { Component } from 'react'
import './styles.css';
import Banner from '../../components/Banner/Banner';
import Skills from '../../components/Skills';

import projects from './projects';

export default class ProjectsPage extends Component {
  render() {
    return (
     <div>
          <Banner banner="Projects" />
        <div id="projectPage">
          <Skills title="Responsive Web Design" content={projects.responsive}/>
          <Skills title="Vanilla JavaScript" content={projects.vanillaJs} />
          <Skills title="Front End Libraries" content={projects.frontEnd} />
          <Skills title="Data Visualization" content={projects.dataVis} />
          <Skills title="Misc" content={projects.misc} />
        </div>
     </div>
    )
  }
}
