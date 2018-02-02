import React from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import loginService from './loginService'

export default function Sair({onExit}) {
  return (
    <TouchableOpacity
      onPress={() => {
        loginService.logout()
        onExit && onExit()
      }}>
      <Icon
        size={24}
        style={{marginRight: 10}}
        name='exit-to-app'/>
    </TouchableOpacity>
  )
}
