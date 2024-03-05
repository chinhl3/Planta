import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const img_header = (props) => {
  
    const {require1,style} =props
    
  return (
    <Image style={style.width_img} source={require1}/>
  )
}

export default img_header

const styles = StyleSheet.create({})