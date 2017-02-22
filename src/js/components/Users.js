import React from 'react';
import {Entity} from 'aframe-react';
import User from './User';
import Tweet from './Tweet';

class Users extends React.Component {

  componentDidMount() {
    const {userData} = this.props;
    const userCount = userData.results.length;

    this.users = [];
    this.usersPos = [];
    for (var i = 0; i < userCount; i++) {

      var boolean = true;
      var idx = 0;

      // Generate User Position
      do {

        var error = 0;
        var pos = new THREE.Vector3(Math.random(), Math.random(), Math.random());
        pos.subScalar(0.5).normalize().multiplyScalar(this.props.radius);

        var arrayLength = this.usersPos.length;
        for (var i = 0; i < arrayLength; i++) {
          var dist = pos.distanceTo(this.usersPos[i]);
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
      this.usersPos.push(pos);

      this.users.push(
        <Entity key={i} id={userData.results[i].name.first + "_GRP"} signals={this.props.signals}>
          <User position={this.usersPos[i]} userData={userData.results[i]}/>
          <Tweet position={this.usersPos[i]} radius={this.props.radius} name={userData.results[i].name.first}></Tweet>
        </Entity>
      );
    }
  }

  render() {

    const userData = this.props.userData;
    const userCount = userData.results.length;

    this.vittu = [];

    if (this.usersPos != null) {
      for (var i = 0; i < userCount; i++) {
        this.vittu.push(
          <Entity key={i} id={userData.results[i].name.first + "_GRP"} signals={this.props.signals}>
            <User position={this.usersPos[i]} userData={userData.results[i]}/>
          </Entity>
        );
      }
    }

    return (
      <Entity id="users_GRP">
        {this.users}
      </Entity>
    );
  }
}

export default Users;
