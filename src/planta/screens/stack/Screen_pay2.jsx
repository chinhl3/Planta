import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import AppStyles from '../../../common/AppStyles'
import App_input_pay from '../../../common/App_input_pay'
import Model_delete_cart from '../../../common/Model_delete_cart'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'react-native-axios'



const Screen_pay2 = (props) => {
    const { navigation, route } = props;

    const selected_product = useSelector((state) => state.user.arr_products_pay)
    const stateuser = useSelector((state) => state.user.user)

    const email=stateuser.email;

    const [name_valude, set_name] = useState('')
    const [so_the, set_sothe] = useState('')
    const [ngay_het, set_ngay_het] = useState('')
    const [cvv, set_cvv] = useState('')


    const onchengtext1 = (text) => {
        set_sothe(text)
      
    }
    const onchengtext2 = (text) => {
        set_name(text)
       
    }
    const onchengtext3 = (text) => {
        set_ngay_het(text)
       
    }
    const onchengtext4 = (text) => {
        set_cvv(text)
       
    }




    const [model, setModel] = useState(false)
    const off_model = () => {
        setModel(false)
    }
    const on_model = () => {
        setModel(true)
    }

    const data = route.params;
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
    const ngay_mua = currentDate.getDate();
    const thang_mua = currentDate.getMonth() + 1;
    const nam_mua = currentDate.getFullYear();


    const go_to_pay_success = () => {
        datahistory = {
            email: stateuser.email,
            name: data.email,
            address: data.address,
            phone: data.phone,
            method_ship: data.method_ship,
            tong: data.tong,
            day: `${ngay_mua}/${thang_mua}/${nam_mua}`,
            selected_product: selected_product

        }
        navigation.navigate("Pay_succsess", { data,product_pay: selected_product})
    }


    if (data.method_ship == 1) {
        var tam = data.tong - phi_ship1
    } else {
        var tam = data.tong - phi_ship2
    }

    // goi api them lich su giao dich
    const add_to_cart_database = async (data) => {
        try {
            const response = await axios.post('http://10.0.2.2:6868/history/add_history', data)
            console.log(response.data.status);
        }
        catch (error) {
            console.error('Error:', error.response);
            console.log(error)

        }
    }


    // action thanh toan san pham roi dua len database
    const thanh_toan = async () => {
        var datahistory = {
            name: data.email,
            address: data.address,
            phone: data.phone,
            method_ship: data.method_ship,
            tong: data.tong,
            day: `${ngay_mua}/${thang_mua}/${nam_mua}`,
            selected_product: selected_product

        }
        await add_to_cart_database(datahistory)
        go_to_pay_success();


    }
    return (
        <View style={[AppStyles.view_big, { padding: 10 }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <Image source={require('../../../resources/images/back.png')} />
                </TouchableOpacity>
                <Text style={AppStyles.text_header_cart}>THANH TOÁN</Text>
                <View></View>
            </View>
            <View style={{ width: "100%", paddingLeft: 50, marginTop: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "500", fontFamily: "Lato-Light", color: "black" }}>Nhập thông tin thẻ </Text>
                <View style={[AppStyles.view_gach_ngang, { width: 280 }]}></View>
            </View>
            <App_input_pay
                placeholder="Nhập số thẻ"
                onchengtext={onchengtext1}
                mat_khau={1}
            />
            <App_input_pay
                placeholder="Tên chủ thẻ"
                onchengtext={onchengtext2}
            />
            <App_input_pay
                placeholder="Ngày hết hạn (MM/YY)"
                onchengtext={onchengtext3}
            />
            <TextInput
                style={[{
                    width: 170,
                    height: 40,
                    borderColor: "gray",
                    borderBottomWidth: 1,
                    marginLeft: 50

                }]}
                placeholder="CVV"
                value={cvv}
                onChangeText={onchengtext4}
            />
            {
                name_valude == '' || ngay_het == '' || so_the == '' || cvv == ''
                    ? <Text style={{ marginLeft: 50, marginTop: 15, color: "red" }}>vui lòng nhập đầy đủ thông tin thẻ</Text>
                    : null
            }


            <View style={{ width: "100%", paddingLeft: 50, marginTop: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "500", fontFamily: "Lato-Light", color: "black" }}>Thông tin khach hàng </Text>
                <View style={[AppStyles.view_gach_ngang, { width: 280 }]}></View>
            </View>

            <Text style={{ marginLeft: 50, marginTop: 15 }}>{data.name}</Text>
            <Text style={{ marginLeft: 50, marginTop: 15 }}>{data.email}</Text>
            <Text style={{ marginLeft: 50, marginTop: 15 }}>{data.valude_diaChi}</Text>
            <Text style={{ marginLeft: 50, marginTop: 15 }}>{data.value_sdt}</Text>






            <View style={{ width: "100%", paddingLeft: 50, marginTop: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "500", fontFamily: "Lato-Light", color: "black" }}>Phương thức vận chuyển </Text>
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




            <View style={{ marginLeft: 24, marginRight: 24, marginTop: 50 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>tạm tính</Text>
                    <Text>{tam.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Phí ship</Text>
                    {data.method_ship == 1
                        ? <Text>{phi_ship1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}</Text>
                        : <Text>{phi_ship2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}</Text>
                    }

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{data.tong}</Text>
                    <Text style={AppStyles.text_green}>{data.tong.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}</Text>
                </View>

                <TouchableOpacity style={[AppStyles.backgroundColorhgreen, { width: "100%", height: 50, marginTop: 30 }]}
                    onPress={() => on_model()}
                    disabled={name_valude == '' || ngay_het == '' || so_the == '' || cvv == '' ? true : false}
                >
                    <Text style={{ color: 'white', fontSize: 20, width: "100%", textAlign: 'center' }}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
            {
                model == true
                    ? <Model_delete_cart
                        text1={"xác nhận thanh toán"}
                        off_model={off_model}
                        thanh_toan={thanh_toan}
                        action={3}
                        email={email}
                        mangsp={selected_product}
                        
                    />
                    : null
            }

        </View>
    )
}

export default Screen_pay2