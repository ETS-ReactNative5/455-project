'use strict';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CalculatorButton from './Button';
import { AppContext } from '../App';


export default function CalculatorButtons(props) {
  const numerals = [
    ['⇤','','⭠'],
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['.', '0', '='],
  ];

  const operators = ['⚙','+', '-', '*', '/'];

  return (
    <AppContext.Consumer>
      {({ themeIsDark }) => (
        <View style={[{ flex: props.height, flexDirection: 'row' }]}>
          <View
            style={[
              { flex: 3 },
              themeIsDark ? styles.secondaryDark : styles.secondaryLight,
            ]}>
            {numerals.map((row, id) => (
              <View key={id} style={[{ flex: 1, flexDirection: 'row' }]}>
                {row.map((char) => (
                  <CalculatorButton
                    pressed={char}
                    display={props.display}
                    setDisplay={props.setDisplay}
                    navigateTo={props.navigateTo}
                  />
                ))}
              </View>
            ))}
          </View>

          <View
            style={[
              { flex: 1 },
              themeIsDark ? styles.primaryDark : styles.primaryLight,
            ]}>
            {operators.map((char) => (
              <CalculatorButton
                pressed={char}
                display={props.display}
                setDisplay={props.setDisplay}
                navigateTo={props.navigateTo}
              />
            ))}
          </View>
        </View>
      )}
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  primaryDark: { backgroundColor: '#111' },
  primaryLight: { backgroundColor: '#ddd' },
  secondaryDark: { backgroundColor: '#222' },
  secondaryLight: { backgroundColor: '#eee' },
});
