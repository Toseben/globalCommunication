import React from 'react'
import {Entity} from 'aframe-react';
var vertexShader = require('../../shaders/tweetVertex.glsl');
var fragmentShader = require('../../shaders/tweetFragment.glsl');

AFRAME.registerComponent('tweet', {

  schema: {
    position: {type: 'vec3'},
    radius: {type: 'number'}
  },

  init: function () {

    var element = this.el;
    var d = this.data;

    var radius = d.radius, segments = 64, rings = 32;
    var geometry = new THREE.SphereBufferGeometry( radius, segments, rings );
    var mesh = this.el.getOrCreateObject3D('mesh', THREE.Mesh);
    mesh.geometry = geometry;

    element.uniforms = {
      tweetPos: { value: d.position}
    };

    var material = new THREE.ShaderMaterial( {
      uniforms: element.uniforms
    });

  }
});

class Tweet extends React.Component {

  // Render Tweet
  render() {
    const pos = this.props.position;
    const posString = pos.x + ' ' + pos.y + ' ' + pos.z;

    return (
      <Entity tweet={{ position: posString, radius: this.props.radius }}></Entity>
    );
  }
}

export default Tweet;
