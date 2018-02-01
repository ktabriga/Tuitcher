import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {TuitchList} from './src/tuich'

const tuitchs = [{
  id: 1,
  message: 'Viajei para a praia',
  owner: '@pirata',
  image: require('./src/images/praia-1.jpg'),
}, {
  id: 2,
  owner: '@pirata',
  message: 'Todos vão para a praia',
  image: require('./src/images/praia-1.jpg'),
}, {
  id: 3,
  owner: '@pirata',
  message: 'Todos vão para a praia',
  image: require('./src/images/praia-1.jpg'),
}]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TuitchList tuitchs={tuitchs}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EBEF'
  }
});
