import React from 'react'
import TuitchList from './TuitchList'

const tuitchs = [{
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

export default ({navigation}) =>
  <TuitchList
    tuitchs={tuitchs}
    onNewTuitchPress={() => navigation.navigate('NewTuitchView')}/>
