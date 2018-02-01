import React from 'react'
import TuitchList from './TuitchList'

let tuitchs = [{
  id: 1,
  message: 'Viajei para a praia',
  owner: '@pirata',
  image: require('../images/praia-1.jpg'),
}, {
  id: 2,
  owner: '@pirata',
  message: 'Todos vão para a praia',
  image: require('../images/praia-1.jpg'),
}, {
  id: 3,
  owner: '@pirata',
  message: 'Todos vão para a praia',
  image: require('../images/praia-1.jpg'),
}]


export default class TuitchListView extends React.Component {
  state = { tuitchs }

  sendTuitch = message => {
    const {navigation} = this.props
    const newTuitchs = [{
      id: this.state.tuitchs.length + 1,
      message
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
