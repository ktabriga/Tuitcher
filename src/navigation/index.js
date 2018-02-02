import { StackNavigator } from 'react-navigation'
import {TuitchListView, NewTuitchView} from '../tuich'
import {LoginView} from '../login'

export default StackNavigator({
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
}, {initialRouteName: 'LoginView' })
