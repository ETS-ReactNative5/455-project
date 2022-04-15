'use strict';

import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AppContext } from '../App';

import * as Config from '../Config';

import { graphql } from 'react-apollo';

export default
@graphql(Config.SIGN_IN_MUTATION)
class SignInScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  async signIn() {
    // this.props.navigation.navigate("Home")
    this.setState({ email: '' });
    this.setState({ password: '' });
    Alert.alert('Mutation Failed', 'Could not connect to server', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

    console.log('YELP');
    // try {
    //   let result = await this.props.data.mutate({
    //     variables: {
    //       username: this.state.email,
    //       password: this.state.password,
    //     },
    //   });
    //   this.setState({ email: 'triggered' });
    //   console.log(this.props.data.JwtLogin.token)
    //   this.props.onNewMessage();
    // } catch (e) {
    //   alert(e.message);
    // }
  }

  render() {
    // const { data, navigation } = this.props;

    return (
      <AppContext.Consumer>
        {({ apolloClient, refreshClient, storeToken }) => (
          <View style={styles.container}>
            <Text style={styles.logo}>BVxAndroid</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Email..."
                placeholderTextColor="#464646"
                value={this.state.email}
                onChangeText={(text) => this.setState({ email: text })}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password..."
                placeholderTextColor="#464646"
                value={this.state.password}
                onChangeText={(text) => this.setState({ password: text })}
              />
            </View>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => this.signIn()}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </AppContext.Consumer>
    );
  }
}

// Styles from https://github.com/Alhydra/React-Native-Login-Screen-Tutorial/blob/master/App.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#464646',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#BA9966',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#BA9966',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#BA9966',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
