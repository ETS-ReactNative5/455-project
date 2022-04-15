'use strict';

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Vibration, Platform } from 'react-native';

import { AppContext } from '../App';

export default function CalculatorButton(props) {
  /**
   * Processes a button press
   *
   * Parameter(s):
   *  <1> pressed: a string that contains the key of the button pressed
   *  <2> currentDisplay: the existing state of the display
   *  <3> setDisplay: a function to mutate the display state
   *
   * Precondition(s):
   *  <0> n/a
   *
   * Returns:
   *  <0> n/a
   *
   * Side effect:
   *  <1> display state is modified
   *
   */

  function updateDisplay(
    display: String,
    pressed: String,
    setDisplay: (s: String) => {}
  ) {
    switch (pressed) {
      case '⇤':
        setDisplay('');
        break;

      case '⭠':
        setDisplay(display.slice(0, -1));
        break;

      case '=':
        setDisplay(eval(display).toString());
        break;

      case '⚙':
        props.navigateTo('Settings');
        break;

      default:
        setDisplay(display + pressed);
    }
  }

  return (
    <AppContext.Consumer>
      {({ themeIsDark, hapticsUsed }) => (
        <TouchableOpacity
          key={props.pressed}
          style={styles.button}
          onPress={() => {
            if (hapticsUsed) { Vibration.vibrate(60) }
            updateDisplay(props.display, props.pressed, props.setDisplay);
          }}>
          <Text style={[styles.text, { color: themeIsDark ? '#ccc' : '#333' }]}>
            {props.pressed}
          </Text>
        </TouchableOpacity>
      )}
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 50,
  },
});



  // //https://stackoverflow.com/questions/68331255/how-to-get-half-a-millisecond-vibration-on-ios-in-react-native-with-expo
  // const vibrate = () => {
  //   if (Platform.OS === "ios") {
  //     // this logic works in android too. you could omit the else statement
  //     const interval = setInterval(() => Vibration.vibrate(), 1000);
  //     // it will vibrate for 5 seconds
  //     setTimeout(() => clearInterval(interval), 5000);
  //   } else {
    
  //     Vibration.vibrate(5000);
  //   }
  // };