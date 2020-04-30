import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView, ToolbarAndroidComponent } from 'react-native';
import { Container, Header, Content, List, ListItem } from 'native-base';
import Constants from 'expo-constants';
import db from "./config";
import * as functions from 'firebase-functions';

export default class App extends Component {
  constructor(props: App) {
    super(props);
    let ref = db.collection('data').doc('table');
    ref.set({
      1: "potato",
      2: "apple",
      3: "banana", 
      4: "pokemon",
      5: "golden",
      6: "hoimi",
      7: "zoma",
      8: "gyodo",
      9: "ninja",
      10: "red",
      11: "darkknight",
      12: "gunbreaker",
      13: "knight",
      14: "white",
      15: "black",
      16: "fighter",
      17: "dragon",
      18: "samurai",
      19: "monk",
      20: "samonner",
      21: "ironman",
      22: "captainamerica",
      23: "thor",
      24: "loki",
      25: "thanos",
      26: "strenge",
      27: "spider",
      28: "marvel",
      29: "endgame",
      30: "stark",
      31: "omega",
      32: "sinryu",
      33: "gundom",
      34: "zaku",
      35: "alex",
      36: "unicorn",
      37: "ball",
      38: "nacht",
      39: "zenos",
      40: "ultima",
    })
    .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
      {/* firestoreからデータを取得 */}
    let getData: any[] = [];
    db.collection('data').get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          {/* 取得したデータを配列に代入 */}
          getData.push(doc.data());
      });
    });
    {/* stateを更新 */}
    this.setState(getData);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.item}>
          {/* データを代入した配列を全て表示 */}
          {console.log("リターーーーーン")}
          {this.state}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: '#d3d3d3',
  },
  title: {
    fontSize: 32,
  },
});
