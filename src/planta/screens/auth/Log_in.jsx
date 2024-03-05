import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import style from '../../../common/AppStyles';
import Img_header from '../../../common/Img_header'
import Buton_app from '../../../common/Buton_app';
import AppInput from '../../../common/AppInput';
import App_view_row from '../../../common/App_view_row';

const Log_in = () => {
    const img_style = () => {
        return {
            ...style.width_img_100,
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
    const view_row = () => {
        return {
            ...style.view_row
        }
    }

    return (
        <View style={{alignContent:'center',flex:1}}>
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
            />
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row", marginLeft: 50, marginTop: 20, marginBottom: 20 }}>
                        <TouchableOpacity>
                            <Image source={require('../../../resources/images/ri_checkbox-circle-line.png')} />
                        </TouchableOpacity>
                        <Text>Nhớ tài khoản</Text>
                    </View>
                    <Text style={{ color: '#009245', marginRight: 60, marginTop: 20, marginBottom: 20 }}>Forgot Password ?</Text>
                </View>
            </View>
            <Buton_app
                style={{
                    btl: btl_style(),
                }}
            >
            </Buton_app>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 50,width:"100%" ,height:20 }}>
                <View style={{ borderBottomWidth: 2, borderBottomColor: '#4CAF50', width: 120,marginBottom:10 }}></View>
                <Text style={{
                    marginLeft: 9,
                    marginRight: 9, 
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12, 
                    fontWeight: '500',
                    color: "#000000",
                    textAlign: 'center'
                }}>Hoặc</Text>
                <View style={{ borderBottomWidth: 2, borderBottomColor: '#4CAF50', width: 120,marginBottom:10 }}></View>
            </View>
            <View style={{flexDirection:'row', marginTop:35, marginLeft:'37%'}}>
                <Image source={require('../../../resources/images/flat-color-icons_google.png')}/>
                <View style={{width:30}}></View>
                <Image source={require('../../../resources/images/logos_facebook.png')}/>

            </View>
            <View style={{flexDirection:'row', marginLeft:"20%", marginTop:40}}>
                <Text style={{color:"#000000"}}>Bạn không có tài khoản</Text>
                <View style={{width:7}}></View>
                <Text style={{color:"#009245"}}>Tạo tài khoản</Text>
            </View>

        </View>
    )
}

export default Log_in

