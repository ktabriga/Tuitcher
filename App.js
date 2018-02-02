import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Navigation from './src/navigation'
import colors from './src/theme/colors'

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
    backgroundColor: colors.backgroud
  }
});
