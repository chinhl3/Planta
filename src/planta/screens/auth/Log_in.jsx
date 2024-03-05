import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style from '../../../common/AppStyles';
import Img_header from '../../../common/Img_header'
import Buton_app from '../../../common/Buton_app';
import AppInput from '../../../common/AppInput';

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
            ...styles.containerInput,
            borderColor: '#009245',
            borderWidth: 2
        }
    };
    const getContainerInputUnFocusStyle = () => {
        return {
            ...styles.containerInput,
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

