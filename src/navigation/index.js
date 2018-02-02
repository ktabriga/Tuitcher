import React from 'react'
import { StackNavigator } from 'react-navigation'
import {TuitchListView, NewTuitchView} from '../tuich'
import {LoginView, loginService, Sair} from '../login'
import {reset} from './lib'

const routesConfig = {
  LoginView: {
    screen: LoginView,
    navigationOptions: {
      header: null
    }
  },
  TuitchListView: {
    screen: TuitchListView,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Tuitcher',
      headerRight: <Sair onExit={() => reset(navigation, 'LoginView')} />
    })
  },
  NewTuitchView: {
    screen: NewTuitchView ,
    navigationOptions: {
      headerTitle: 'Novo Tuitch',
    }
  }
}

export default class EnhancedNavigator extends React.Component {
  state = {loading: true}

  async componentDidMount() {
    const isLogged = await loginService.isLogged()
    const initialRouteName = isLogged ? 'TuitchListView' : 'LoginView'
    this.setState({initialRouteName, loading: false})
  }

  render() {
    const {initialRouteName, loading} = this.state
    if (loading) return null
    const Navigator = StackNavigator(routesConfig, {initialRouteName})
    return <Navigator />
  }
}
