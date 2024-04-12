import { View, Text, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppStyles from '../../../common/AppStyles'
import App_Flatlist from '../../../common/App_Flatlist'
import axios from 'react-native-axios'

const Home = ({ navigation }) => {
  const [page, setpage] = useState(1)
  const [page1, setpage1] = useState(1)

  // xem them san pham
  const xem_them = () => {
    setpage(page + 1);
    console.log(page)
  }
  const xem_them_chau = () => {
    setpage1(page1 + 1);
    console.log(page1)
  }
  // gọi api lấy toàn bộ cay
  const [data_cay, setdata_cay] = useState(null)
  const [data_chau, setdata_chau] = useState(null)
  useEffect(() => {
    const get_product_cay = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:6868/products/find_product?type=plant&page=' + page)
        if (response.data.status) {
          setdata_cay(response.data.messges)
        }

      } catch (error) {
        console.error('Error fetching data:', error.response);
      }
    }

    get_product_cay()


  }, [page])
  useEffect(() => {
    // lay du lieu chau cay 
    const get_product_chau = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:6868/products/find_product?type=chau&page=' + page1)
        if (response.data.status) {
          setdata_chau(response.data.messges)
        }


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    get_product_chau()
  }, [page1])
  // chuyen sang details
  const go_to_detail = (id) => {
    navigation.navigate('Productdetail1', { id: id })
  }
  // chuyen sang Directory
  const go_to_directory = () => {
    navigation.navigate('Directory')
  }
  const go_to_cart = () => {
    navigation.navigate('Cart')
  }


  return (
    <ScrollView style={AppStyles.view_big}>

      <View style={[AppStyles.view_row, { justifyContent: 'space-between' }]}>
        <Text style={AppStyles.textheader_home}>Planta - toả sáng</Text>
        <TouchableOpacity
        onPress={()=>go_to_cart()}
        >
        <View style={[AppStyles.boxContainer, { marginTop: 24, marginRight: 15 }]}>
            <Image source={require('../../../resources/images/shopping-cart.png')} />
        </View>
        </TouchableOpacity>
      </View>
      <Text style={[AppStyles.textheader_home, { marginTop: -24, position: 'relative' }]}>không gian nhà bạn</Text>

      <Image style={[AppStyles.img]} source={require('../../../resources/images/image_9.png')} />
      <TouchableOpacity style={[AppStyles.view_row, { position: 'absolute', top: 130, left: 25 }]}
        onPress={() => go_to_directory()}
      >
        <Text style={AppStyles.text_green}>Xem hàng mới về</Text>
        <Image source={require('../../../resources/images/fi_arrow-right.png')} />
      </TouchableOpacity>
      <Text style={[AppStyles.textheader_home, { marginTop: 30 }]}>Cây trồng</Text>
      <App_Flatlist
        data={data_cay}
        onclick={(id) => go_to_detail(id)}
      />
      <TouchableOpacity
        onPress={() => xem_them()}
      >
        <Text style={[AppStyles.text_xem_them, { marginLeft: 220 }]}>Xem thêm cây trồng</Text>

      </TouchableOpacity>
      <Text style={[AppStyles.textheader_home,]}>Chậu cây trồng</Text>
      <App_Flatlist
        data={data_chau}
        onclick={(id) => go_to_detail(id)}
      />
      <TouchableOpacity
        onPress={() => xem_them_chau()}
      >
        <Text style={[AppStyles.text_xem_them, { marginLeft: 220 }]}>Xem thêm phụ kiện</Text>

      </TouchableOpacity>
      <Text style={[AppStyles.textheader_home, { marginTop: 20 }]}>Combo chăm sóc (mới)</Text>
      <View style={[AppStyles.view_row, { marginBottom: 50, backgroundColor: '#f3f3f3', borderRadius: 10 }]}>
        <View style={AppStyles.viewfooter}>
          <Text style={AppStyles.textfooter}>Lemon Balm Grow Kit</Text>
          <Text style={{ width: 190, color: '#7D7B7B', fontSize: 14 }}>Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...</Text>


        </View>
        <Image style={{ borderRadius: 10 }} source={require('../../../resources/images/img_footer.png')} />
      </View>
    </ScrollView>
  )
}

export default Home