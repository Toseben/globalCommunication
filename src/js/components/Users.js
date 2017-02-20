import React from 'react'
import {Entity} from 'aframe-react';

AFRAME.registerComponent('user', {

  init: function () {
    var radius = 0.25, segments = 64, rings = 32;
    var geometry = new THREE.SphereBufferGeometry( radius, segments, rings );
    var mesh = this.el.getOrCreateObject3D('mesh', THREE.Mesh);
    mesh.geometry = geometry;
  }
});

class Users extends React.Component {
  render() {
    const {userData} = this.props;
    const userCount = userData.results.length;

    var users = [];
    for (var i = 0; i < userCount; i++) {
      var gender = userData.results[i].gender;
      var color = gender === 'female' ? '#e74c3c' : '#3498db';
      users.push(
        <Entity user position={[0, i * 0.5, 0]} key={i} id={"user_" + i}
          material={{color: color}}></Entity>
      );
    }

    return (
      <Entity id="user_GRP">
        {users}
      </Entity>
    );
  }
}

export default Users;
