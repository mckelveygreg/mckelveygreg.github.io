import React from 'react';
import './styles.css';

const Banner = (props) => {
  return (
    <div className="banner">
      <h2>{props.banner}</h2>
    </div>
  )
}

export default Banner;