import {Entity, Scene} from 'aframe-react';
import React from 'react';
import Camera from '../components/Camera';
import Earth from '../components/Earth';
import Users from '../components/Users'
import {addUser} from '../utils/addUser'

class AContainer extends React.Component {

  // Init state
  constructor() {
    super()
    this.state = {
      users: [],
      trigger: false
    };
    this.submitUser = this.submitUser.bind(this);
    this.triggerTweet = this.triggerTweet.bind(this);
  }

  // Add UserData to state
  componentDidMount() {
    this.submitUser();
  }

  componentDidUpdate() {
    if (this.state.trigger === false) {
      this.triggerTweet();
      this.setState({
        trigger: true
      });
    }
  }

  submitUser() {
    var userData = this.props.userData.results;
    var length = userData.length;

    var userArray = [];
    for (var i = 0; i < length; i++) {
      const gender = userData[i].gender;
      const name = userData[i].name.first;
      const pic = userData[i].picture.medium;
      const newUser = {id: i, gender: gender, name: name, pic: pic, tweet: 0}
      userArray.push(newUser);
    }

    this.setState({
      users: userArray
    })
  }

  // Trigger Randomised Tweets
  triggerTweet() {
    var container = this;
    var userArray = this.state.users;
    var userCount = userArray.length;

    randomTweet();
    function randomTweet() {
      const randUser = Math.floor(Math.random() * userCount);
      const time = Math.random() * 1000;

      var users = container.state.users;
      users[randUser].tweet += 1;
      container.setState({
        users: users
      })

      setTimeout(randomTweet, time);
    }
  }

  // Render AFRAME HTML
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
