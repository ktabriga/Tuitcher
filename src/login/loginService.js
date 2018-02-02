import {AsyncStorage} from 'react-native'

const login = username => {
  AsyncStorage.setItem('login', username)
}

const getLogin = () => AsyncStorage.getItem('login')

const isLogged = async () => {
  const username = await getLogin()
  return !!username
}

const logout = () => AsyncStorage.setItem('login', '')

export default {
  login,
  getLogin,
  isLogged,
  logout
}
