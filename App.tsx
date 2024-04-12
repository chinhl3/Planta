import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigatinonstack from './src/planta/screens/stack/Navigatinonstack'
import store from './src/planta/screens/redux/store'
import { Dispatch } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Screen_pay from './src/planta/screens/stack/Screen_pay'
import Screen_pay2 from './src/planta/screens/stack/Screen_pay2'
import Pay_succsess from './src/planta/screens/stack/Pay_succsess'


const App = () => {

  return (
    <Provider store={store}>
  <View style={{width:'100%',height:'100%'}}>
      <Navigatinonstack/>
      {/* <Pay_succsess/> */}
  
    </View>
    </Provider>
  
  )
}

export default App
