import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Shell from './components/shell';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Shell />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
