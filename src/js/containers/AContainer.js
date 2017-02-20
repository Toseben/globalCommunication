import {Entity, Scene} from 'aframe-react';
import React from 'react';
import Camera from '../components/Camera';
import Earth from '../components/Earth';
import Users from '../components/Users'

class AContainer extends React.Component {

  render () {
    const {userData} = this.props;

    return (
      <Scene>
        <Camera/>
        <Earth src="url(../../assets/env.jpg)"/>
        <Users userData={userData}/>
        <a-sky color="#ECECEC"></a-sky>
      </Scene>
    );
  }
}

export default AContainer;
