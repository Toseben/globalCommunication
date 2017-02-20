import {Entity, Scene} from 'aframe-react';
import React from 'react';
import Camera from '../components/Camera';
import Earth from '../components/Earth';
import Users from '../components/Users'

class AContainer extends React.Component {

  render () {
    const {userData} = this.props;
    const radius = "1";

    return (
      <Scene>
        <Camera/>
        <Earth src="url(../../assets/earth.jpg)" radius={radius}/>
        <Users userData={userData} radius={radius}/>
        <a-sky color="#1b242e"></a-sky>
      </Scene>
    );
  }
}

export default AContainer;
