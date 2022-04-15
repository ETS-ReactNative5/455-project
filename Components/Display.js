'use strict';

import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function CalculatorDisplay(props) {
  return (
    <View style={[{ flex: props.height }]}>
      <Text
        style={[styles.display, props.darkTheme ? styles.dark : styles.light]}>
        {props.display}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    fontSize: 40,
    textAlign: 'right',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },

  dark: { backgroundColor: '#444', color: 'white' },
  light: { backgroundColor: '#fff', color: 'black' },
});
