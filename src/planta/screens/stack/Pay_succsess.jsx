import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import AppStyles from '../../../common/AppStyles'
import { useDispatch, useSelector } from 'react-redux'
import { Delete_purchased_products } from '../redux/Apiuser'

const Pay_succsess = (props) => {



  const { navigation, route } = props
  const { data ,product_pay} = route.params
  const phi_ship1 = 15000
  const phi_ship2 = 20000

  const currentDate = new Date();
  var day = currentDate.getDate() + 3;
  var month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng thêm 1
  const year = currentDate.getFullYear();
  if (day > 31) {
    month = month + 1
    day = 3
  }
  const go_to_home = () => {
    navigation.navigate('Navigationtab')
  }

 

  
  return (
    <View style={[AppStyles.view_big, { padding: 10 }]}>
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <TouchableOpacity
          onPress={() => go_to_home()}
        >
          <Image source={require('../../../resources/images/back.png')} />
        </TouchableOpacity>
        <Text style={AppStyles.text_header_cart}>THONG BÁO</Text>
        <View></View>
      </View >

      <Text style={styles.text_header_cart}>Bạn đã đặt hàng thành công</Text>

      <View style={{ width: "100%", paddingLeft: 50, marginTop: 30 }}>
        <Text style={{ fontSize: 16, fontWeight: "500", fontFamily: "Lato-Light", color: "black" }}>Thông tin khach hàng </Text>
        <View style={[AppStyles.view_gach_ngang, { width: 280 }]}></View>
      </View>

      <Text style={{ marginLeft: 50, marginTop: 15 }}>{data.name}</Text>
      <Text style={{ marginLeft: 50, marginTop: 15 }}>{data.email}</Text>
      <Text style={{ marginLeft: 50, marginTop: 15 }}>{data.address}</Text>
      <Text style={{ marginLeft: 50, marginTop: 15 }}>{data.phone}</Text>



      <View style={{ width: "100%", paddingLeft: 50, marginTop: 30 }}>
        <Text style={{ fontSize: 16, fontWeight: "500", fontFamily: "Lato-Light", color: "black" }}>Phương thức vận chuyển</Text>
        <View style={[AppStyles.view_gach_ngang, { width: 280 }]}></View>
      </View>
      {
        data.method_ship == 1 ?
          <TouchableOpacity style={AppStyles.gach_ngang_pay}

          >
            <Text style={{ color: 'black' }}>{`Giao hàng nhanh - ${phi_ship1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}`}</Text>
            <Text>{`Dự kiến giao hàng: ${day}/${month}/${year}`}</Text>

          </TouchableOpacity>
          :
          <TouchableOpacity
            style={AppStyles.gach_ngang_pay}

          >
            <Text style={{ color: 'black' }}>{`Giao hàng cẩn thận - ${phi_ship2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}`}</Text>
            <Text>{`Dự kiến giao hàng: ${day}/${month}/${year}`}</Text>

          </TouchableOpacity>
      }


      <View style={{ width: "100%", paddingLeft: 50, marginTop: 30 }}>
        <Text style={{ fontSize: 16, fontWeight: "500", fontFamily: "Lato-Light", color: "black" }}>Phương thức thanh toán</Text>
        <View style={[AppStyles.view_gach_ngang, { width: 280 }]}></View>
      </View>
      {
        data.method_ship == 1 ?
          <TouchableOpacity style={[AppStyles.gach_ngang_pay, { borderBottomWidth: 0 }]}
            onPress={() => method2_pay1()}
          >
            <Text style={{ color: data.method_ship == 1 ? 'green' : 'black' }}>Thẻ VISA</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={[AppStyles.gach_ngang_pay, { borderBottomWidth: 0 }]}
            onPress={() => method2_pay2()}
          >
            <Text style={{ color: data.method_ship == 2 ? 'green' : 'black' }}>Thẻ ATM</Text>
          </TouchableOpacity>
      }

      <View style={{ width: "100%", paddingLeft: 50 }}>
        <Text style={{ fontSize: 16, fontWeight: "500", fontFamily: "Lato-Light", color: "black" }}>đơn hàng đã chọn</Text>
        <View style={[AppStyles.view_gach_ngang, { width: 280 }]}></View>
      </View>

      {product_pay.map((product, index) => (
        <View key={index}>

          <View style={{ marginLeft: 50, flexDirection: "row" }}>
            <Text>Tên sản phẩm : </Text>
            <Text>{product.name}</Text>
          </View>
          <View style={{ marginLeft: 50, flexDirection: "row" }}>
            <Text>Số lượng: </Text>
            <Text>{product.quantity}</Text>
          </View>
        </View>
      ))}
      <View style={{ marginLeft: 50, flexDirection: 'row' }}>
        <Text>Tổng tiền: </Text>
        <Text>{data.tong}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  text_header_cart: {
    color: "green",
    width: '100%',
    textAlign: 'center',
    marginTop: 20
  }
})
export default Pay_succsess