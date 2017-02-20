import {Entity} from 'aframe-react';
import React from 'react';

class Camera extends React.Component {
  render() {

    return (
      <Entity
          id="camera"
          camera
          position="0 1 2"
          orbit-controls="
            autoRotate: false;
            target: #earth_GEO;
            enableDamping: true;
            dampingFactor: 0.125;
            rotateSpeed: 0.25;
            minDistance: 1.5;
            maxDistance: 3;
            enableKeys: false">
      </Entity>
    );
  }
}

export default Camera;
