import { View, Text, TextInput } from 'react-native'
import React from 'react'

const App_input_pay = (props) => {
    const {placeholder,value,onchengtext,mat_khau}=props
  return (
    <View>
    <TextInput
        style={[ {
            width: 280,
            height:40,
            borderColor: "gray",
           borderBottomWidth:1,
           marginLeft:50

        }]}
        secureTextEntry={mat_khau==1?true:false}
        placeholder={placeholder}
        value={value}
        onChangeText={onchengtext}
    />
</View>
  )
}

export default App_input_pay