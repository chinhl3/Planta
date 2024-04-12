import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppStyles from '../../../common/AppStyles'
import App_input_pay from '../../../common/App_input_pay'
import { useSelector } from 'react-redux'

const Screen_pay = (props) => {
    const tt_user = useSelector((state) => state.user)
    const { navigation, route } = props;
    const { tong_tien } = route.params;
    // chọn phưởng thức thanh toán
    const [method_ship, setmethod_ship] = useState(1)
    const [method_pay, setmethod_pay] = useState(1)
    const [tong, set_tong] = useState(0)
    const [valude_diaChi, set_value_diaChi] = useState('')
    const [value_sdt, set_valuestd] = useState('')


    const method_ship1 = () => {
        setmethod_ship(1)

    }
    const method2_ship2 = () => {
        setmethod_ship(2)

    }
    const method2_pay1 = () => {
        setmethod_pay(1)

    }
    const method2_pay2 = () => {
        setmethod_pay(2)

    }
    const currentDate = new Date();
    var day = currentDate.getDate() + 3;
    var month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng thêm 1
    const year = currentDate.getFullYear();
    var phi_ship1 = 15000
    var phi_ship2 = 20000
    if (day > 31) {
        month = month + 1
        day = 3
    }
    const go_cart = () => {
        navigation.navigate("Cart")
    }
    useEffect(() => {
        if (method_ship == 1) {

            set_tong(tong_tien + phi_ship1)

        } else {
            set_tong(tong_tien + phi_ship2)

        }
    }, [method_ship])
    // lấy dữ liệu người dùng nhập
    const onchengtext1 = (text) => {
        set_value_diaChi(text)
        console.log(text)
    }
    const onchengtext2 = (text) => {
        set_valuestd(text)
        console.log(text)

    }

    const go_to_pay2 = () => {
        const data = {
            "id": tt_user.user._id,
            "name": tt_user.user.name,
            "phone": value_sdt,
            "email": tt_user.user.email,
            "address": valude_diaChi,
            "method_ship": method_ship,
            "method_pay": method_pay,
            "tong": tong,
            "valude_diaChi": valude_diaChi,
            "value_sdt": value_sdt,
        }
        navigation.navigate("Screen_pay2", data)
    }
    return (
        <View style={[AppStyles.view_big, { padding: 10 }]}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={() => go_cart()}
                >
                    <Image source={require('../../../resources/images/back.png')} />
                </TouchableOpacity>
                <Text style={AppStyles.text_header_cart}>THANH TOÁN</Text>
                <View></View>
            </View>
            <View style={{ width: "100%", paddingLeft: 50, marginTop: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "500", fontFamily: "Lato-Light", color: "black" }}>Thông Tin Khách Hàng</Text>
                <View style={[AppStyles.view_gach_ngang, { width: 280 }]}></View>
            </View>
            <View style={{ height: 10 }}></View>
            <App_input_pay
                placeholder="Hãy nhập tên của bạn"
                value={tt_user.user.name}
            />
            <App_input_pay
                placeholder="email"
                value={tt_user.user.email}
            />
            <App_input_pay
                placeholder="địa chỉ"
                onchengtext={onchengtext1}
            />
            <App_input_pay
                placeholder="số điện thoại"
                onchengtext={onchengtext2}
            />
            {
                valude_diaChi == '' || value_sdt == '' ? <Text style={{ color: 'red', marginLeft: 50 }}>Vui lòng không để trống địa chỉ và sô điện thoai</Text>
                    : null
            }


            <View style={{ width: "100%", paddingLeft: 50, marginTop: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "500", fontFamily: "Lato-Light", color: "black" }}>Phương thức vận chuyển</Text>
                <View style={[AppStyles.view_gach_ngang, { width: 280 }]}></View>
            </View>
            <TouchableOpacity style={AppStyles.gach_ngang_pay}
                onPress={() => method_ship1()}
            >
                <Text style={{ color: method_ship == 1 ? 'green' : 'black' }}>{`Giao hàng nhanh - ${phi_ship1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}`}</Text>
                <Text>{`Dự kiến giao hàng: ${day}/${month}/${year}`}</Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={AppStyles.gach_ngang_pay}
                onPress={() => method2_ship2()}
            >
                <Text style={{ color: method_ship == 2 ? 'green' : 'black' }}>{`Giao hàng cẩn thận - ${phi_ship2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}`}</Text>
                <Text>{`Dự kiến giao hàng: ${day}/${month}/${year}`}</Text>

            </TouchableOpacity>
            <View style={{ width: "100%", paddingLeft: 50, marginTop: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "500", fontFamily: "Lato-Light", color: "black" }}>Phương thức thanh toán</Text>
                <View style={[AppStyles.view_gach_ngang, { width: 280 }]}></View>
            </View>
            <TouchableOpacity style={AppStyles.gach_ngang_pay}
                onPress={() => method2_pay1()}
            >
                <Text style={{ color: method_pay == 1 ? 'green' : 'black' }}>Thẻ VISA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[AppStyles.gach_ngang_pay, { borderBottomWidth: 0 }]}
                onPress={() => method2_pay2()}
            >
                <Text style={{ color: method_pay == 2 ? 'green' : 'black' }}>Thẻ ATM</Text>
            </TouchableOpacity>
            <View style={{ marginLeft: 24, marginRight: 24, marginTop: 50 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>tạm tính</Text>
                    <Text>{tong_tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Phí ship</Text>
                    {
                        method_ship == 1 ?
                            <Text>{phi_ship1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}</Text> :
                            method_ship == 2 ?
                                <Text>{phi_ship2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}</Text> :
                                null
                    }

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>tổng</Text>
                    <Text style={AppStyles.text_green}>{tong.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}</Text>
                </View>
                <TouchableOpacity 
                disabled={valude_diaChi==''||value_sdt==''?true:false}
                style={[AppStyles.backgroundColorhgreen, { width: "100%", height: 50, marginTop: 30 }]}
                    onPress={() => go_to_pay2()}
                >
                    <Text style={{ color: 'white', fontSize: 20, width: "100%", textAlign: 'center' }}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Screen_pay