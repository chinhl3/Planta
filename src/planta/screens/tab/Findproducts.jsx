import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppStyles from '../../../common/AppStyles'
import App_Flatlist from '../../../common/App_Flatlist'
import axios from 'react-native-axios'

const Findproducts = () => {
  const [arrfind, set_arrfind] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [data_cay, setdata_cay] = useState([])
  const [data_chau, setdata_chau] = useState([])

  const getSearchText = (text) => {
    setSearchText(text);
  }
  useEffect(() => {
    const get_product_cay = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:6868/products/find_product?type=plant&page=')
        if (response.data.status) {
          setdata_cay(response.data.messges)
        }

      } catch (error) {
        console.error('Error fetching data:', error.response);
      }
    }

    get_product_cay()


  }, [])

  

  

  useEffect(() => {
    // lay du lieu chau cay 
    const get_product_chau = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:6868/products/find_product?type=chau&page=')
        if (response.data.status) {
          setdata_chau(response.data.messges)
        }


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    get_product_chau()
  }, [])

  const newarr= data_cay.concat(data_chau)
  // console.log(newarr)
  useEffect(() => {
    console.log(searchText)
    if (searchText == '') {
      set_arrfind(newarr)
    }else{
      set_arrfind(newarr.filter(item => item.name.toString().toLowerCase().includes(searchText.toString().toLowerCase())))
    }
  },[searchText])

  

  return (
    <View style={[AppStyles.view_big, { alignItems: 'center' }]}>
      <View style={[AppStyles.view_row, { width: '100%', marginTop: 10 }]}>
        <Image source={require('../../../resources/images/back.png')} />
        <Text style={[AppStyles.textfooter, { marginLeft: '37%' }]}>TÌM KIẾM</Text>
      </View>
      <View style={[AppStyles.view_row, { height: 50 }]}>
        <TextInput style={AppStyles.text_input_find}
          onChangeText={getSearchText}
          value={searchText}
        >

        </TextInput>
        <View style={AppStyles.iconfind}>
          <TouchableOpacity
           
          >
            <Image source={require('../../../resources/images/search.png')} />

          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <App_Flatlist
          data={arrfind}
        />
      </ScrollView>


    </View>
  )
}

export default Findproducts