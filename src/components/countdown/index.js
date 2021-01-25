import React from 'react';
import Button from '../../widgets/button';
import Title from '../../widgets/typography/title';
import './countdown.css'

const Countdown = () => {
  return (
  <div className="countdown-section">
      <div className="cs-item">
          <h3>Welcome to our church</h3>
          <p>Monday, 10 am - friday, 10 am </p>
          <p>st. paul church</p>
          <p>123 lorem street</p>
      </div>
      <div className="cs-item timer-block">
         <div className="timer-item">
            <h4>200</h4>
            <p>days</p>     
        </div> 
        <div className="timer-item">
            <h4>16</h4>
            <p>hours</p>     
        </div> 
        <div className="timer-item">
            <h4>42</h4>
            <p>minutes</p>     
        </div> 
        <div className="timer-item">
            <h4>40</h4>
            <p>seconds</p>     
        </div> 
      </div>
  </div>
  );
}

export default Countdown;