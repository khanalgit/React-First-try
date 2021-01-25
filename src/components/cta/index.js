import React from 'react';
import Button from '../../widgets/button';
import Title from '../../widgets/typography/title';
import './cta.css'

const Cta = () => {
  return (
  <div className="cta-section">
      <div className="cta-welcome cta-item">
        <p>Monday, 10 am - Friday, 10 am</p>
        <h3>Welcome to our church</h3>
      </div>
      <div className="cta-welcome cta-item">
        <p>st. paul church</p>
        <h3>123 lorem ipsum street</h3>
      </div>
      <div className="cta-welcome cta-item">
        <Button title="Read more"/>
      </div>
  </div>
  );
}

export default Cta;