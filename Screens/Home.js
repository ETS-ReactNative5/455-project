'use strict';

import React from 'react';

import { StyleSheet, View } from 'react-native';

import { AppContext } from '../App';

import Buttons from '../Components/Buttons';
import Display from '../Components/Display';

export default function HomeScreen({ navigation }) {
  const [display, setDisplay] = React.useState('');

  return (
    <AppContext.Consumer>
      {({ themeIsDark, hapticsUsed }) => (
        <View style={styles.container}>
          <Display height={1} display={display} darkTheme={themeIsDark} />
          <Buttons
            height={5}
            display={display}
            setDisplay={setDisplay}
            navigateTo={navigation.navigate}
          />
        </View>
      )}
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
