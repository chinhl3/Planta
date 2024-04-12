import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import style from '../../../common/AppStyles';
import Img_header from '../../../common/Img_header'
import Buton_app from '../../../common/Buton_app';
import AppInput from '../../../common/AppInput';
import axios from 'react-native-axios'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/Apiuser';


const Log_in = ({ navigation }) => {
    const dispatch = useDispatch()
    const userState = useSelector((state) => state.user);
    const img_style = () => {
        return {
            ...style.width_img_100,
            marginTop: -70
        }
    }
    const btl_style = () => {
        return {
            ...style.button_style,
        }
    }
    const getContainerInputFocusStyle = () => {
        return {
            ...style.containerInput,
            borderColor: '#009245',
            borderWidth: 2
        }
    };
    const getContainerInputUnFocusStyle = () => {
        return {
            ...style.containerInput,
            borderColor: '#8B8B8B',
            borderWidth: 1,
        }
    };

    const getIconEyeStyle = () => {
        return {
            width: 29,
            height: 24
        }
    };

    const getInputTextStyle = () => {
        return {
            flex: 1
        }
    }

    // lấy dữ liệu người dung nhập
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const get_email = (text) => {
        setemail(text);
    }
    const get_password = (text) => {
        setpassword(text);
    }

    // gọi api kiểm tra tài khoản mật khẩu
    const dangnhap = () => {
        try {
            const body = {
                email, password
            }
            dispatch(login(body))

        } catch (error) {

        }
    }
    // chuyen sang man hinh dang ki
    const dang_ki=() => {
        navigation.navigate('Sign_up')
    };




    return (
        <View style={{ alignItems: 'center', flex: 1 }}>
            <Img_header
                require1={require('../../../resources/images/hinh_nen_log-In.png')}
                style={{
                    width_img: img_style(),
                }}
            />
            <Text
                style={{
                    color: '#000000',
                    fontSize: 30,
                    fontWeight: '700'
                    , fontFamily: 'Poppins-Regular',
                    textAlign: 'center'
                }}>
                Chào mừng bạn
            </Text>
            <Text style={{
                color: '#000000',
                fontSize: 18,
                fontWeight: '400'
                , fontFamily: 'Poppins-Regular',
                textAlign: 'center'
            }}>
                Đăng nhập tài khoản
            </Text>
            <AppInput
                placeholder={'Nhập email hoặc số điện thoại'}
                styles={{
                    containerFocus: getContainerInputFocusStyle(),
                    containerUnFocus: getContainerInputUnFocusStyle(),
                    icon: getIconEyeStyle(),
                    inputText: getInputTextStyle()
                }}
                onchangeText={get_email}
            />
            <AppInput
                placeholder={'Mật khẩu'}
                styles={{
                    containerFocus: getContainerInputFocusStyle(),
                    containerUnFocus: getContainerInputUnFocusStyle(),
                    icon: getIconEyeStyle(),
                    inputText: getInputTextStyle()
                }}
                isPassword={true}
                onchangeText={get_password}
            />
            {
                userState.user ==false ? <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'red' }}>tài khoản hoặc mật khẩu không đúng</Text>
                    <View style={{ width: 70 }}></View>
                </View>
                    : <View></View>
            }



            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 20 }}>
                        <TouchableOpacity>
                            <Image source={require('../../../resources/images/ri_checkbox-circle-line.png')} />
                        </TouchableOpacity>
                        <Text>Nhớ tài khoản</Text>
                    </View>
                    <View style={{ width: 80 }}></View>
                    <Text style={{ color: '#009245', marginTop: 20, marginBottom: 20 }}>Forgot Password ?</Text>
                </View>
            </View>
            <Buton_app
                style={{
                    btl: btl_style(),

                }}
                onPress={dangnhap}
                text={"Đăng nhập "}
            >
            </Buton_app>
            <View style={{ flexDirection: 'row', marginTop: 20, height: 20 }}>
                <View style={{ borderBottomWidth: 2, borderBottomColor: '#4CAF50', width: 120, marginBottom: 10 }}></View>
                <Text style={{
                    marginLeft: 9,
                    marginRight: 9,
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                    fontWeight: '500',
                    color: "#000000",
                    textAlign: 'center'
                }}>Hoặc</Text>
                <View style={{ borderBottomWidth: 2, borderBottomColor: '#4CAF50', width: 120, marginBottom: 10 }}></View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 35 }}>
                <Image source={require('../../../resources/images/flat-color-icons_google.png')} />
                <View style={{ width: 30 }}></View>
                <Image source={require('../../../resources/images/logos_facebook.png')} />

            </View>
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                <Text style={{ color: "#000000" }}>Bạn không có tài khoản</Text>
                <View style={{ width: 7 }}></View>
                <Text onPress={()=>dang_ki()} style={{ color: "#009245" }}>Tạo tài khoản</Text>
            </View>

        </View>
    )
}

export default Log_in

