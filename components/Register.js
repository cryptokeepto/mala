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

constructor(props){
  super(props);
  this.state {
    username: '',
    password: '',
  }
}

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>- Registration -</Text>
          <TextInput style={styles.textInput} placholder="Your Name"
            underlineColorAndroid={'transparent'} />
          <TextInput style={styles.textInput} placholder="Your Email"
            underlineColorAndroid={'transparent'} />
          <TextInput style={styles.textInput} placholder="Your Password"
            underlineColorAndroid={'transparent'} />
          <TextInput style={styles.textinput} placholder="Comfirm Password"
            underlineColorAndroid={'transparent'} />
          <TouchableOpacity style={styles.btn}>
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
  // const styles = StyleSheet.create({
  //   regform: {
  //     alignSelf: 'stretch',
  //     backgroundColor: '#045792',
  //   },
  //   header: {
  //     fontSize: 24,
  //     color: '#fff',
  //     paddingBottom: 10,
  //     marginBottom: 40,
  //     borderBottomColor: '#199187',
  //     borderBottomWidth: 1,
  //   },
  //   textinput: {
  //     alignSelf: 'stretch',
  //     height: 40,
  //     marginBottom: 30,
  //     color: '#fff',
  //     borderBottomColor: '#f8f8f8',
  //     borderBottomWidth: 1,
  //   },
  //   button: {
  //     alignSelf: 'stretch',
  //     alignItems: 'stretch',
  //     padding: 20,
  //     backgroundColor: '#59cbbd',
  //     marginTop: 30,
  //   },
  //   btntext: {
  //     color: '#fff',
  //     fontWeight: 'bold',
  //   }
});
