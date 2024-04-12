import { StyleSheet, Text, View,TextInput,Image,Pressable } from 'react-native'
import React,{useState} from 'react'


const AppInput = (props) => {
  const {styles,placeholder,isPassword,onchangeText}=props
  const [isFocus,setFocus] = useState(false);
  const [secure,setSecure] = useState(true);
  const [text, setText] = useState('');

  const requireImgShow = require('../resources/image/eye.png');
  const requireImgHide = require('../resources/image/hidden.png');
  const get_data_input_text = (text)=>{
    setText(text)
    onchangeText(text)
  }

  return (
    <View style={isFocus ? styles.containerFocus : styles.containerUnFocus}>
      <TextInput 
      style={styles.inputText}
        secureTextEntry={isPassword && secure}
        placeholder={placeholder}
        onChangeText={get_data_input_text}
        onBlur={()=>setFocus(!isFocus)}
        onFocus={()=> setFocus(!isFocus)}
        value={text}
        />
      {
        isPassword && 
        <Pressable onPress={()=>setSecure(!secure)}>
          <Image style={styles.icon} source={secure ? requireImgHide : requireImgShow}/>
        </Pressable>

      }
    </View>
  )
}

export default AppInput
