import React from 'react'
import {Entity} from 'aframe-react';

AFRAME.registerComponent('earth', {

  init: function () {
    var radius = 2, segments = 64, rings = 32;
    var geometry = new THREE.SphereBufferGeometry( radius, segments, rings );
    var mesh = this.el.getOrCreateObject3D('mesh', THREE.Mesh);
    mesh.geometry = geometry;
  }
});

class Earth extends React.Component {
  render() {

    return (
      <Entity
        earth
        id="earth_GEO"
        material={{shader: 'flat', src: this.props.src}}>
      </Entity>
    );
  }
}

export default Earth;
