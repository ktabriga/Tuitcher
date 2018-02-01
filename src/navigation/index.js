import { StackNavigator } from 'react-navigation'
import {TuitchListView, NewTuitchView} from '../tuich'

export default StackNavigator({
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
})
