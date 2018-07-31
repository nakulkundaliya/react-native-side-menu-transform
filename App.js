/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  Animated,
  StyleSheet,
  Imagebackground,
  View,
  TouchableOpacity,
  Dimensions,
  Text
} from 'react-native';

var { height, width } = Dimensions.get('window');
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      anim: new Animated.Value(0),
      anim_rotateY: new Animated.Value(0),
      anim_translateX: new Animated.Value(width),
      transform: [],
      isMenuOpen: false
    };
  }
  componentWillMount() {}
  componentDidMount() {}
  onpressShowmethemenu() {}
  showMenu() {
    if (this.state.isMenuOpen) {
      this.setState({ isMenuOpen: false });
      Animated.parallel([
        Animated.timing(this.state.anim_translateX, {
          toValue: width
        }),
        Animated.timing(this.state.anim_rotateY, {
          toValue: 0
        })
      ]).start();
    } else {
      this.setState({ isMenuOpen: true });
      Animated.parallel([
        Animated.timing(this.state.anim_translateX, {
          toValue: width * 0.5
        }),
        Animated.timing(this.state.anim_rotateY, {
          toValue: 1
        })
      ]).start();
    }
  }
  closeMenu() {
    this.setState({ isMenuOpen: false });
    Animated.parallel([
      Animated.timing(this.state.anim_translateX, {
        toValue: width
      }),
      Animated.timing(this.state.anim_rotateY, {
        toValue: 0
      })
    ]).start();
  }
  render() {
    const spin = this.state.anim_rotateY.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 50]
    });
    return (
      <View style={[styles.container, { resizeMode: 'cover' }]}>
        <View
          style={{
            position: 'absolute',
            width: 120,
            left: 0,
            top: 120,
            justifyContent: 'center'
          }}
        >
          <Text style={[styles.text, styles.menutext, styles.red]}>Home</Text>
          <Text style={[styles.text, styles.menutext]}>Features</Text>
          <Text style={[styles.text, styles.menutext]}>Gallery</Text>
          <Text style={[styles.text, styles.menutext]}>Profile</Text>
          <Text style={[styles.text, styles.menutext]}>Pages</Text>
          <Text style={[styles.text, styles.menutext]}>Contact</Text>
          <Text style={[styles.text, styles.menutext]}>Pages</Text>
          <TouchableOpacity onPress={this.closeMenu.bind(this)}>
            <Text style={[styles.text, styles.menutext]}>Close</Text>
          </TouchableOpacity>
        </View>

        <Animated.View
          style={{
            width: width,
            backgroundColor: 'gray',
            flex: 1,
            marginVertical: spin,
            alignItems: 'center',
            transform: [
              { perspective: 850 },
              {
                translateX: this.state.anim_translateX.interpolate({
                  inputRange: [0, width],
                  outputRange: [width, 0]
                })
              }
            ]
          }}
        >
          <Text
            style={{
              top: 100,
              color: 'white',
              backgroundColor: 'gray',
              fontSize: 20
            }}
          >
            Image style=width:width,height:height
          </Text>
          <TouchableOpacity onPress={this.showMenu.bind(this)}>
            <View
              style={{
                width: 100,
                height: 40,
                top: 200,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={{ fontSize: 20, color: 'white' }}>Menu</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { color: '#E0E0E0' },
  gray: { color: 'gray' },
  green: { color: 'green' },
  red: { color: 'red' },
  menutext: { fontSize: 20, padding: 10 },
  container: {
    width: width,
    height: height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  menulist: { width: 200, position: 'absolute', left: 0, top: 100 }
});
