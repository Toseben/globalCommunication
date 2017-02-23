import React from 'react'
import {Entity} from 'aframe-react';

AFRAME.registerComponent('earth', {

  schema: {
    radius: {type: 'number', default: 1}
  },

  init: function () {
    var d = this.data;
    var radius = d.radius, segments = 64, rings = 32;
    var geometry = new THREE.SphereBufferGeometry( radius, segments, rings );
    var mesh = this.el.getOrCreateObject3D('mesh', THREE.Mesh);
    mesh.geometry = geometry;
  }
});

class Earth extends React.Component {
  render() {

    return (
      <Entity
        earth={{radius: this.props.radius}}
        id="earth_GEO"
        material={{shader: 'flat', src: this.props.src}}>
      </Entity>
    );
  }
}

export default Earth;
