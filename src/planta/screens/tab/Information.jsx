import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppStyles from '../../../common/AppStyles'
import { logout } from '../redux/Reducer'
import { useDispatch } from 'react-redux'

const Information = (porps) => {
  const { navigation } = porps;
  const dispatch = useDispatch();
  const dangxuat = () => {
    dispatch(logout());
  }
  const go_to_udate=() => {
    navigation.navigate('Update_info')
  }
  return (
    <View style={AppStyles.cotainer}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          color: '#000000',
          fontFamily: 'Poppins-Regular',
        }}
      >
        PROFILE</Text>

      <View style={{ width: '100%', height: 75 }}>
        <View style={{ width: 275, marginLeft: "8%", flexDirection: "row" }}>
          <Image style={{ width: 50, height: 50 }} source={require('../../../resources/images/san_pham1.png')} />
          <View style={{ marginTop: 10, marginLeft: 26 }}>
            <Text style={{ fontSize: 16, color: 'black' }}>Lê Văn Chính</Text>
            <Text>chinh123@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 24, width: "100%" }}>
        <Text style={{ fontSize: 18 }}>Chung</Text>
        <View style={AppStyles.view_gach_ngang}></View>
        <Text onPress={()=>go_to_udate()}  style={AppStyles.textinfo}>Chỉnh sửa thông tin</Text>
        <Text style={AppStyles.textinfo}>Cẩm nang trồng cây</Text>
        <Text style={AppStyles.textinfo}>Lịch sử giao dịch</Text>
        <Text style={AppStyles.textinfo}>Q & A"</Text>
        <Text style={{ fontSize: 18, marginTop: 20 }}>Bảo mật và Điều khoản</Text>
        <View style={AppStyles.view_gach_ngang}></View>
        <Text style={AppStyles.textinfo}>Điều khoản và điều kiện</Text>
        <Text style={AppStyles.textinfo}>Chính sách quyền riêng tư</Text>
        <TouchableOpacity
        onPress={()=>dangxuat()}
        >
          <Text style={[AppStyles.textinfo, { color: "red" }]}>Đăng xuất</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}


export default Information