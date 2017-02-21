import React from 'react'
import {Entity} from 'aframe-react';

AFRAME.registerComponent('user', {

  init: function () {

    // Generate User Geo
    var radius = 0.075, segments = 64, rings = 32;
    var geometry = new THREE.SphereBufferGeometry( radius, segments, rings );
    var mesh = this.el.getOrCreateObject3D('mesh', THREE.Mesh);
    mesh.geometry = geometry;
  }
});

class User extends React.Component {
  
  // Init Props
  constructor(props) {
    super(props);
    this.pos = this.props.position;
    this.name = this.props.userData.name.first;
    this.color = this.props.userData.gender === 'female' ? '#e74c3c' : '#3498db';
  }

  // Render User
  render() {
    return (
      <Entity user position={[this.pos.x, this.pos.y, this.pos.z]} id={this.name + "_GEO"}
        material={{color: this.color}}></Entity>
    );
  }
}

export default User;
