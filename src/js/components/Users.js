import React from 'react';
import {Entity} from 'aframe-react';
import User from './User';
import Tweet from './Tweet';

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

      this.users.push(
        <Entity key={i} id={name + "_GRP"}>
          <User position={usersPos[i]} userData={userData.results[i]}/>
          <Tweet position={usersPos[i]} radius={this.props.radius}></Tweet>
        </Entity>
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
