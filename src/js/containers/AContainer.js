import {Entity, Scene} from 'aframe-react';
import React from 'react';

class AContainer extends React.Component {

  // Render AFRAME HTML
  render () {

    return (
      <Scene>
        <a-sky color="#1b242e"></a-sky>
      </Scene>
    );
  }
}

export default AContainer;
