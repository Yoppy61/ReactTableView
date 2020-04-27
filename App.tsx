import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {db} from './config';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>Hello world!</Text>
        <table>
          <tr><td>ラーメン</td></tr>
          <tr><td>ラーメン</td></tr>
          <tr><td>ラーメン</td></tr>
        </table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 'auto'
  },

  red: {
    backgroundColor: "#ffffff",
    color: "#ff0000",
  },

  table: {
    color: "#ff0000"
  },
});