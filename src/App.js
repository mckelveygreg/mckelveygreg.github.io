import React, { Component } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
        {/* <AboutPage />
        <ProjectsPage />
        <CertificationsPage />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
