import React from 'react'
import {Text, StyleSheet, TextInput, View, Button} from 'react-native'
import colors from '../theme/colors'

export default function NewTuitchView() {
  return (
    <View style={styles.container}>
      <TextInput
        multiline
        returnKeyType='send'
        placeholder='O que está acontecendo?'
        underlineColorAndroid='transparent'
        selectionColor={colors.primary}
        style={styles.input}/>
      <View style={styles.buttonContainer}>
        <Button
          color={colors.primary}
          onPress={() => {}}
          title='Enviar'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EBEF',
    padding: 10
  },
  input: {
    height: 140,
    textAlignVertical: 'top',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15
  },
  buttonContainer: {
    marginTop: 10
  }
})
