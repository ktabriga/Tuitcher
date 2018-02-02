import React from 'react'
import { StackNavigator } from 'react-navigation'
import {TuitchListView, NewTuitchView} from '../tuich'
import {LoginView, loginService} from '../login'

const routesConfig = {
  LoginView: {
    screen: LoginView,
    navigationOptions: {
      header: null
    }
  },
  TuitchListView: {
    screen: TuitchListView,
    navigationOptions: {
      headerTitle: 'Tuitcher',
    }
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
