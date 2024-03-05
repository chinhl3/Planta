import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import style from '../../../common/AppStyles';
import Img_header from '../../../common/Img_header'
import Buton_app from '../../../common/Buton_app';
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
    return (
        <View>
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
            
            <Buton_app
                style={{
                    btl: btl_style(),
                }}
            >
            </Buton_app>

        </View>
    )
}

export default Log_in


