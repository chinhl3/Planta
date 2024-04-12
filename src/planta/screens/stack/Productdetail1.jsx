import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Swiper from 'react-native-swiper';
import AppStyles from '../../../common/AppStyles'
import Swiper_img from '../../../common/Swiper_img';
import axios from 'react-native-axios'
import { add_to_cart } from '../redux/Reducer';
import { useDispatch,useSelector } from 'react-redux';

const Productdetail1 = ({ route,navigation }) => {

    const dispatch = useDispatch();
    const email = useSelector((state)=>state.user)
    const { id } = route.params;
    const [data_product, set_data_product] = useState(null);
    const [arr_img, set_arr_img] = useState();
    const [gia, set_gia] = useState(0)
    const [sl, set_sl] = useState(0);
    // goi api lấy thông tin một sản phẩm theo id
    useEffect(() => {
        const get_product_by_id = async () => {
            try {
                const response = await axios.get('http://10.0.2.2:6868/products/find_by_id?id=' + id)
                // console.log(response.data.data);
                set_data_product(response.data.data);
                set_arr_img(response.data.data.img)
            } catch (error) {
                console.log(error);
            }
        }
        get_product_by_id();
    }, [id]);

    // gọi api thêm sản phẩm vảo giỏ hàng 
    const add_to_cart_database = async (data) => {
        try {
            const response = await axios.post('http://10.0.2.2:6868/users/add_cart',data)
       
            console.log(response.data.status);
          if(response.data.status==true){
            
          }

        } catch (error) {
            console.log(error);
        }
    }
    // tang so luong san pham muon mua
    const tangsl = (sl) => {
        set_sl(sl + 1);
        if (data_product != null) {
            console.log(sl)
            set_gia((sl + 1) * data_product.price)
        }
    }
    // giam so luong san pham muon mua
    const giamsl = (sl) => {
        set_sl(sl - 1);
        if (data_product != null) {
            console.log(sl)
            if (sl == 0) {
                set_sl(0)
            }
            set_gia((sl - 1) * data_product.price)

        }
    }
    // them san phaam cho gio hang
    const add_cart = () => {
        try {
            if (data_product != null) {
                var data = {
                    id: data_product._id,
                    email:email.user.email,
                    name: data_product.name,
                    price: data_product.price,
                    img: data_product.img,
                    like: data_product.category.like,
                    so_luong: sl
                }

            }
            
                add_to_cart_database(data)
            
            navigation.navigate("Cart")
        } catch (error) {
            console.log(error);
        }

    
    }
    const go_to_home = () => {
        navigation.navigate("Navigationtab")
    }
    const go_to_cart = () => {
        navigation.navigate("Cart")
    }

    return (
        <View style={[AppStyles.view_big, { padding: 10 }]}>
            <View style={[AppStyles.view_row, { justifyContent: 'space-between', marginTop: 10, marginBottom: 20 }]}>
                <TouchableOpacity
                onPress={()=>go_to_home()}
                >
                <Image style={{ marginRight: 30 }} source={require('../../../resources/images/back.png')} />
                </TouchableOpacity>
                <Text style={[AppStyles.textfooter, {}]}>Spider Plant</Text>
                <TouchableOpacity
                onPress={()=>go_to_cart()}
                >
                <Image style={{ marginLeft: 40 }} source={require('../../../resources/images/shopping-cart.png')} />
                </TouchableOpacity>
            </View>
            <Swiper_img
                data_img={arr_img}
            />
            <View style={{ width: '100%', height: 560 }}>
                <View style={[AppStyles.view_row, { marginLeft: 50, marginTop: 30 }]}>
                    <TouchableOpacity style={AppStyles.backgroundColorhgreen}>
                        {data_product != null ? <Text style={AppStyles.text_btn_ct}>{data_product.type.toLocaleString('vi-VN')}</Text> : <Text style={AppStyles.text_btn_ct}></Text>}

                    </TouchableOpacity>
                    <View style={{ width: 10 }}></View>
                    <TouchableOpacity style={data_product != null && data_product.type != "chau cay" ? AppStyles.backgroundColorhgreen : {}}

                    >
                        {data_product != null && data_product.type != "chau cay" ? <Text style={AppStyles.text_btn_ct}>{data_product.category.like}</Text> : <Text></Text>}
                    </TouchableOpacity>
                </View>
                {data_product != null ? <Text style={AppStyles.text_gia}>{data_product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}Đ</Text> : <Text style={AppStyles.text_gia}> đ</Text>}

                <Text style={AppStyles.text_ct}>Chi tiết sản phẩm</Text>
                <View style={AppStyles.text_ct1_view}>
                    <Text style={AppStyles.text_ct1}>kích cỡ</Text>
                    {data_product != null ? <Text style={AppStyles.text_ct1}>{data_product.size}</Text> : <Text style={AppStyles.text_ct1}>null</Text>}

                </View>
                <View style={AppStyles.text_ct1_view}>
                    <Text style={AppStyles.text_ct1}>Xuất sứ</Text>
                    {data_product != null ? <Text style={AppStyles.text_ct1}>{data_product.origin}</Text> : <Text style={AppStyles.text_ct1}>Châu phi</Text>}

                </View>
                <View style={AppStyles.text_ct1_view}>
                    <Text style={AppStyles.text_ct1}>Trạng thái</Text>
                    {data_product != null ? <Text style={[AppStyles.text_ct1, { color: 'green' }]}>{data_product.inventory} </Text> : <Text style={[AppStyles.text_ct1, { color: 'green' }]}>còn 200 sp</Text>}

                </View>
                <View style={[AppStyles.view_text_ct2,{marginTop:40}]}>
                    <Text>{`đã chon ${sl} sản phẩm`}</Text>
                    <Text>Tạm tính</Text>
                </View>
                <View style={AppStyles.view_text_ct2}>
                    <View style={AppStyles.view_sl_mua}>
                        <TouchableOpacity
                            onPress={() => tangsl(sl)}
                        >
                            <Image source={require('../../../resources/images/plus-square.png')} />
                        </TouchableOpacity>
                        <Text style={AppStyles.text_sl_mua}>{sl}</Text>
                        <TouchableOpacity
                            onPress={() => giamsl(sl)}
                        >
                            <Image source={require('../../../resources/images/minus-square.png')} />
                        </TouchableOpacity>
                    </View>
                    {sl == 0 ? <Text style={{ fontSize: 20, marginTop: 10 }}>0 Đ</Text> : <Text style={{ fontSize: 20, marginTop: 10 }}>{gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} Đ</Text>}

                </View>
                <TouchableOpacity
                    style={{
                        width: 337,
                        height: 50, marginTop: 10,
                        marginLeft: 34,
                        marginRight: 24,
                        backgroundColor: sl == 0 ? "gray" : "green",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    disabled={sl == 0}
                    onPress={add_cart}
                >
                    <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>
                        Chọn mua
                    </Text>
                </TouchableOpacity>


            </View>

        </View>

    )
}



export default Productdetail1