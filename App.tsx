import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView, ToolbarAndroidComponent } from 'react-native';
import { Container, Header, Content, List, ListItem } from 'native-base';
import Constants from 'expo-constants';
import db from "./config";
import * as functions from 'firebase-functions';

export default class App extends Component {
  constructor(props: App) {
    super(props);
    this.state = {data: []}
    let ref = db.collection('data').doc('table');
    ref.set({
      0: "potato",
      1: "apple",
      2: "banana", 
      3: "pokemon",
      4: "golden",
      5: "hoimi",
      6: "zoma",
      7: "gyodo",
      8: "ninja",
      9: "red",
      10: "darkknight",
      11: "gunbreaker",
      12: "knight",
      13: "white",
      14: "black",
      15: "fighter",
      16: "dragon",
      17: "samurai",
      18: "monk",
      19: "samonner",
      20: "ironman",
      21: "captainamerica",
      22: "thor",
      23: "loki",
      24: "thanos",
      25: "strenge",
      26: "spider",
      27: "marvel",
      28: "endgame",
      29: "stark",
      30: "omega",
      31: "sinryu",
      32: "gundom",
      33: "zaku",
      34: "alex",
      35: "unicorn",
      36: "ball",
      37: "nacht",
      38: "zenos",
      39: "ultima",
    })
    .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
      {/* firestoreからデータを取得 */}
    let getData: string[] = [];
    db.collection('data').get().then( querySnapshot => {
      querySnapshot.forEach(function(doc) {
          {/* 取得したデータを配列に代入 */}
          for(let i=0;i<20;i++) {
            getData.push(doc.data()[i]);
          }
      });
      this.reload(getData);
    });
  }

  reload(datas:any[]){
    console.log(datas);
    this.setState({data:datas});
  }

  render() {
    return (
      <ScrollView>
        <View>
          {this.state.data.map(dataItem => {return <Text style={styles.item}>{dataItem}</Text>})}
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
