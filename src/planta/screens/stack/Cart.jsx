import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AppStyles from '../../../common/AppStyles'
import Flatlist_cart from '../../../common/Flatlist_cart'
const Cart = (props) => {
  const {navigation }=props;

  // chuyển về home
  const go_home=()=>{
    navigation.navigate('Navigationtab')
  }
  const [test,settest]=useState(false);
  const show_model=()=>{
   settest(!test)
  }
  // chuyen sang man hinh thanh toan
  const go_to_pay =(tong_tien)=>{
    navigation.navigate('Screen_pay',{tong_tien:tong_tien})
  }
  return (
    <View style={AppStyles.cotainer}>

    <View style={AppStyles.style_header_cart}>
        <TouchableOpacity
        onPress={()=>go_home()}
        >
            <Image source={require('../../../resources/images/back.png')} />
        </TouchableOpacity>
        <Text style={AppStyles.text_header_cart}>GIỎ HÀNG</Text>
        <TouchableOpacity
        onPress={()=>show_model()}
        >
            <Image source={require('../../../resources/images/iconxoa.png')} />
        </TouchableOpacity>
    </View>
    <Flatlist_cart 
        test={test}
        show_modelall={show_model}
        go_to_pay={go_to_pay}
      
    />
</View>
  )
}

export default Cart



