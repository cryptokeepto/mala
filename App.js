import React from 'react';
import { View, Text } from 'react-native';

import Login from "./components/Login";
import Bananas from './components/Bananas';
import LotsOfGreeting from './components/LotsOfGreeting';
import BlinkApp from './components/BlinkApp';
import LotsOfStyles from './components/LotsOfStyles';
import FixedDimensionsBasics from './components/FixedDimensionsBasics';
import FlexDimensionsBasics from './components/FlexDimensionsBasics';
export default class App extends React.Component {

  render() {

    return (
      // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      // <View >
      //   {/* <Text>Hello, World!</Text>
      //   <Bananas />
      //   <LotsOfGreeting/>
      //   <BlinkApp/>
      //   <LotsOfStyles/> */}
      //   {/* <FixedDimensionsBasics/> */}
      // </View>
        <FlexDimensionsBasics/>
    );
  }
}
