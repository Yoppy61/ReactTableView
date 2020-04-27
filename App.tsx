import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: '1',
    title: 'りゅうおう',
  },
  {
    id: '2',
    title: 'シドー',
  },
  {
    id: '3',
    title: 'ゾーマ',
  },
  {
    id: '4',
    title: 'デスピサロ',
  },
  {
    id: '5',
    title: 'ミルドラース',
  },
  {
    id: '6',
    title: 'デスタムーア',
  },
  {
    id: '7',
    title: 'オルゴ・デミーラ',
  },
  {
    id: '8',
    title: 'ラプソーン',
  },
  {
    id: '9',
    title: 'エルギオス',
  },
  {
    id: '10',
    title: 'マデサゴーラ',
  },
];

{/* typescriptのルールで、any型(なんでも有りの型)はNGの為、コンパイルは通るがコード上ではエラー*/}
function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#4169e1',
    padding: 20,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#000000',
  },
  title: {
    fontSize: 32,
  },
});
