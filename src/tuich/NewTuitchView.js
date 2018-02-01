import React from 'react'
import {Text, StyleSheet, TextInput, View, Button} from 'react-native'
import colors from '../theme/colors'

const TAMANHO_MAXIMO = 140

export default class NewTuitchView extends React.Component {
  state = { tuitch: '' }
  handleSendPress = () => {
    this.props.navigation.state.params.sendTuitch(this.state.tuitch)
  }
  isValidTuitch = () => {
    const {length} = this.state.tuitch
    return length > 0 && length <= TAMANHO_MAXIMO
  }

  render() {
    const {tuitch} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={tuitch}
            onChangeText={text => this.setState({tuitch: text})}
            multiline
            returnKeyType='send'
            placeholder='O que está acontecendo?'
            underlineColorAndroid='transparent'
            selectionColor={colors.primary}
            autoFocus
            style={styles.input}/>
          <View style={{marginTop: 10, alignItems: 'flex-end'}}>
            <Text style={{color: tuitch.length > TAMANHO_MAXIMO ? 'red' : 'grey'}}>{TAMANHO_MAXIMO - tuitch.length}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            disabled={!this.isValidTuitch()}
            color={colors.primary}
            onPress={this.handleSendPress}
            title='Enviar'/>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EBEF',
    borderRadius: 10,
    padding: 10,

  },
  inputContainer: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10
  },
  input: {
    height: 140,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 10
  }
})
