import React from 'react'
import {View, Button, Text, TextInput, StyleSheet} from 'react-native'
import colors from '../theme/colors'
import loginService from './loginService'
import {reset} from '../navigation/lib'

export default class LoginView extends React.Component {
  state = {login: ''}

  handleLoginChange = login => this.setState({login})

  handleSubmit = () => {
    const {navigation} = this.props
    loginService.login(this.state.login)
    reset(navigation, 'TuitchListView')
  }

  render() {
    const {login} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tuitcher</Text>
        <Text>Usuário</Text>
        <TextInput
          style={styles.input}
          value={login}
          onChangeText={this.handleLoginChange}
          selectionColor={colors.primary} />
        <Button
          disabled={login.length === 0}
          color={colors.primary}
          title='Entrar'
          onPress={this.handleSubmit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 20
  },
  input: {
    marginBottom: 10
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  }
})
