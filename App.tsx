import { Text, View } from 'react-native'
import React, { Component } from 'react'
import LoginScreen from './src/screens/LoginScreen'

export class App extends Component {
  render() {
    return (
      <View>
      <LoginScreen/>
      </View>
    )
  }
}

export default App