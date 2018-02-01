import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Navigation from './src/navigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigation />
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
