import React from 'react';
import BMCo from '../images/boston_manufacturing_co.jpg';
import Plx from 'react-plx';

// An array of parallax effects to be applied - see below for detail
const parallaxDataImage = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateY"
      },
    ],
  },
];

const parallaxDataText = [
  {
    start: 0,
    end: 800,
    properties: [
      {
        startValue: 50,
        endValue: 100,
        property: "translateY"
      },
    ],
  },
];

export default () => (
  <>
    <Plx parallaxData={ parallaxDataImage }>
      <img height="500" src={BMCo} alt="boston_manufacturing_co.jpg" />
    </Plx>
    <Plx parallaxData={ parallaxDataText }>
      <p>boston_manufacturing_co.jpg</p>
    </Plx>
    
    <div className="rellax" data-rellax-speed="-3">
      I’m slow and smooth
    </div>

    <div className="rellax" data-rellax-speed="7">
      I’m super fast!!
    </div>

    <div className="rellax" data-rellax-speed="-5">
      I’m extra slow and smooth
    </div> 
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div className="rellax">supwdidttt</div>
  </>
);
