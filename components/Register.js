import React from 'react';
import { View } from 'react-native';

import Login from "./components/Login";
export default class App extends React.Component {

  render() {

    return (
        <View style={{ paddingTop: 50 }}>
        <Text>Registration </Text>
        <TextInput>Your Name</TextInput>
        <TextInput>Your Email</TextInput>
        <TextInput>Your Password</TextInput>
        <TouchableOpacity>
        <Text>Sign Up </Text>
          </TouchableOpacity>
          <Login />
        </View>
      );
    }
  }
  
  const