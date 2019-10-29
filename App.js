/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Image,
  TextInput,
  Alert
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      email: "",
      password: ""
    };
  }

  onChange = value => {
    console.warn(`El switch cambiará a : ${value}`);
    this.setState({ switchValue: value });
  };
  onPressLearnMore() {
    console.warn("Presionaste el botón");
  }
  changeInput = () => {
    const { email } = this.state;
    const { password } = this.state
    Alert.alert("E-mail: " + email +" " +"Password: "+ password);
  };

  render() {
    return (
      <View style={styles.container}>
      <Image 
          style={{ width: 200, height: 200 }}
          source={require("./React.png")}
      />
      <Text style={styles.text}>Welcome Humans!</Text>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor="white"
          placeholder="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          style={styles.inputBox}
          placeholderTextColor="white"
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.changeInput}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: "black"
  },
  button: {
    width: 100,
    backgroundColor: "#d8577f",
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    textAlign: "center"
  },
  inputBox: {
    width: 300,
    backgroundColor: "pink",
    paddingHorizontal: 16,
    fontSize: 18,
    color: "#ffff",
    marginVertical: 10,
    padding:10
  },
  input: {
    fontSize: 20,
    margin: 10
  },
  text:{
    fontSize:30,
    color:'white'
  }
});
