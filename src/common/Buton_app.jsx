import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'react-native-linear-gradient';
import axios from 'react-native-axios'

const Buton_app = (props) => {
  const [check, setcheck] = useState('');
  
  const {style,text,onPress,} =props

  return (
    <TouchableOpacity 
    onPress={onPress}
    >
      <LinearGradient
        colors={['#007537', '#4CAF50']}
        style={style.btl}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        
      >
        <Text style={
          {
            textAlign:'center',
            fontSize:20,
            fontWeight:'700',
            color:'white',
            fontFamily:'Poppins-Regular'
          }}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default Buton_app

const styles = StyleSheet.create({})