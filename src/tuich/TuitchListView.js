import React from 'react'
import TuitchList from './TuitchList'
import moment from 'moment'
import {loginService} from '../login'

let tuitchs = [{
  id: 1,
  message: 'Viajei para a praia',
  owner: 'pirata',
  image: require('../images/praia-1.jpg'),
  date: moment().toISOString()
}, {
  id: 2,
  owner: 'pirata',
  message: 'Todos vão para a praia',
  image: require('../images/praia-1.jpg'),
  date: moment().toISOString()
}, {
  id: 3,
  owner: 'pirata',
  message: 'Todos vão para a praia',
  image: require('../images/praia-1.jpg'),
  date: moment().toISOString()
}]


export default class TuitchListView extends React.Component {
  state = {
    tuitchs,
    login: ''
  }

  componentDidMount() {
    loginService.getLogin()
      .then(login => this.setState({login}))
  }

  sendTuitch = message => {
    const {navigation} = this.props
    const newTuitchs = [{
      id: this.state.tuitchs.length + 1,
      owner: this.state.login,
      message,
      date: moment().toISOString()
    }].concat(this.state.tuitchs)
    navigation.goBack(null)

    this.setState({ tuitchs: newTuitchs })
  }

  render() {
    const {navigation} = this.props
    return (
      <TuitchList
        tuitchs={this.state.tuitchs}
        onNewTuitchPress={() =>
            navigation.navigate('NewTuitchView', {sendTuitch: this.sendTuitch})
        }/>
    )
  }
}
