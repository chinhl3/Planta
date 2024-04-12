import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppStyles from '../../../common/AppStyles'
import App_Flatlist from '../../../common/App_Flatlist'
import axios from 'react-native-axios'
var count = 0
const Directory = ({ navigation }) => {


    const [arrdata, set_arrdata] = useState();
    const [arrdatanew, set_arrdatanew] = useState([])
    const [focus, set_focus] = useState(1);
    const focused = (a) => {

        set_focus(a)

    }
    // chuyen sang details
    const go_to_detail = (id) => {
        navigation.navigate('Productdetail1', { id: id })
    }

    //lay toan bo san pham cay trong
    const get_product_cay = async () => {
        try {
            const response = await axios.get('http://10.0.2.2:6868/products/find_product?type=plant&page=0')
            console.log(response.data.status)
            if (response.data.status) {
               console.log(response.data.messges)
               set_arrdatanew(response.data.messges)
                set_arrdata(response.data.messges)

            }

        } catch (error) {
            console.error('Error fetching data:', error.response);
        }
    }

    useEffect(() => {
        get_product_cay()
    }, [])
    useEffect(() => {

        if (focus == 1) {
            set_arrdatanew(arrdata)
        } else if (focus == 2) {

        } else if (focus == 3) {
            let arrtamp = [...arrdata]
            let ua_sang = [];
            if (arrtamp.length > 0) {
                for (let i = 0; i < arrtamp.length; i++) {
                    if (arrtamp[i].category.id == 1) {
                        ua_sang.push(arrtamp[i]);
                    }
                }
            }

            set_arrdatanew(ua_sang)
        } else if (focus == 4) {
            let arrtamp = [...arrdata]
            let ua_bong = [];
            if (arrdata.length > 0) {
                for (let i = 0; i < arrtamp.length; i++) {
                    if (arrtamp[i].category.id == 2) {
                        ua_bong.push(arrtamp[i]);
                    }
                }
            }

            set_arrdatanew(ua_bong)

        }
    }, [focus])

    return (
        <View style={AppStyles.view_big}>
            <View style={[AppStyles.view_row, { justifyContent: 'space-around', marginTop: 10, marginBottom: 20 }]}>
                <Image style={{ marginRight: 30 }} source={require('../../../resources/images/back.png')} />
                <Text style={[AppStyles.textfooter, {}]}>CÂY TRỒNG</Text>
                <Image style={{ marginLeft: 40 }} source={require('../../../resources/images/shopping-cart.png')} />
            </View>
            <View style={[AppStyles.view_row, { justifyContent: 'space-around' }]}>
                <TouchableOpacity
                    style={[
                        AppStyles.backgroundColorhgreen, {
                            backgroundColor: focus == 1 ? 'green' : 'gray'
                        }
                    ]}
                    onPress={() => focused(1)}
                >
                    <Text style={AppStyles.text_btn_ct}>Tất cả</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        AppStyles.backgroundColorhgreen,
                        {
                            backgroundColor: focus == 2 ? 'green' : 'gray'
                        }]}
                    onPress={() => focused(2)}
                >
                    <Text style={AppStyles.text_btn_ct}>Hang mới về</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        AppStyles.backgroundColorhgreen,
                        {
                            backgroundColor: focus == 3 ? 'green' : 'gray'
                        }]}
                    onPress={() => focused(3)}
                >
                    <Text style={AppStyles.text_btn_ct}>ưa sáng</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        AppStyles.backgroundColorhgreen,
                        {
                            backgroundColor: focus == 4 ? 'green' : 'gray'
                        }]}
                    onPress={() => focused(4)}
                >
                    <Text style={AppStyles.text_btn_ct}>ưa bóng</Text>
                </TouchableOpacity>

            </View>
            <ScrollView>
                <App_Flatlist data={arrdatanew}
                    onclick={(id) => go_to_detail(id)}
                />
            </ScrollView>

        </View>
    )
}

export default Directory