import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';


export default class Register extends React.Component {

  state = {
    username: "",
    password: ""
  }

  render() {
    const {
      weapper,
      container,
      header,
      textInput,
      btn
    } = styles

    return (
      <KeyboardAvoidingView style={wrapper}>
        <View style={container}>
          <Text style={header}>- Registration -</Text>
          <TextInput style={textInput} placholder="Your Name"
            underlineColorAndroid={'transparent'} />
          <TextInput style={textInput} placholder="Your Email"
            underlineColorAndroid={'transparent'} />
          <TextInput style={textInput} placholder="Your Password"
            underlineColorAndroid={'transparent'} />
          <TextInput style={textinput} placholder="Comfirm Password"
            underlineColorAndroid={'transparent'} />
          <TouchableOpacity style={btn}>
            <Text >Sign Up </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#2896d3',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    color: '#2896d3',
    backgroundColor: '#fff',
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 26,
    alignItems: 'center',
  }
});
