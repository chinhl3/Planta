import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const img_header = (props) => {
    const {require1} =props
    console.log("link:"+require1)
    
  return (
    <Image source={require1}/>
  
  )
}

export default img_header

const styles = StyleSheet.create({})