import React from 'react';
import { View } from 'react-native';

import Login from "./components/Login";
export default class App extends React.Component {

  render() {

    return (
      <View style={{ paddingTop: 50 }}>
        <Login />
      </View>
    );
  }
}
