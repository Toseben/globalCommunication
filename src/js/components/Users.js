import React from 'react'
import {Entity} from 'aframe-react';

AFRAME.registerComponent('user', {

  init: function () {

    // Generate User geometry
    var radius = 0.075, segments = 64, rings = 32;
    var geometry = new THREE.SphereBufferGeometry( radius, segments, rings );
    var mesh = this.el.getOrCreateObject3D('mesh', THREE.Mesh);
    mesh.geometry = geometry;
  }
});

class Users extends React.Component {

  componentDidMount() {
    const {userData} = this.props;
    const userCount = userData.results.length;

    this.users = [];
    var usersPos = [];
    for (var i = 0; i < userCount; i++) {

      var boolean = true;
      var idx = 0;

      // Generate User Position
      do {

        var error = 0;
        var pos = new THREE.Vector3(Math.random(), Math.random(), Math.random());
        pos.subScalar(0.5).normalize().multiplyScalar(this.props.radius);

        var arrayLength = usersPos.length;
        for (var i = 0; i < arrayLength; i++) {
          var dist = pos.distanceTo(usersPos[i]);
          if (dist < 0.15) {
            error += 1;
          }
        }

        idx += 1;
        if (error === 0 || idx > 10) {
          boolean = false;
        }

        // Generate Log //
        //console.log('User:', i, 'Iteration:', idx);

      }

      while ( boolean );
      usersPos.push(pos);

      // Push Users to array
      var gender = userData.results[i].gender;
      var name = userData.results[i].name.first;
      var color = gender === 'female' ? '#e74c3c' : '#3498db';
      this.users.push(
        <Entity user position={[pos.x, pos.y, pos.z]} key={i} id={"user_" + name}
          material={{color: color}}></Entity>
      );
    }
  }

  render() {
    return (
      <Entity id="users_GRP">
        {this.users}
      </Entity>
    );
  }
}

export default Users;
