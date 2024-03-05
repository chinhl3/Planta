import { AppState, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Img_header from '../../../common/Img_header'
import AppInput from '../../../common/AppInput'
import styles from '../../../common/AppStyles'

const Log_in = () => {

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

    const getInputTextStyle=()=>{
        return{
            flex:1
        }
    }

    return (
        <View>
            <Img_header
                require1={require('../../../resources/hinh_nen_log_In.png')}
            />
            <AppInput
                placeholder={'Nhập email hoặc số điện thoại'}
                styles={{
                    containerFocus: getContainerInputFocusStyle(),
                    containerUnFocus: getContainerInputUnFocusStyle(),
                    icon: getIconEyeStyle(),
                    inputText:getInputTextStyle()
                }}
            />

            <AppInput
                placeholder={'Mật khẩu'}
                styles={{
                    containerFocus: getContainerInputFocusStyle(),
                    containerUnFocus: getContainerInputUnFocusStyle(),
                    icon: getIconEyeStyle(),
                    inputText:getInputTextStyle()
                }}
                isPassword={true}
            />
        </View>
    )
}

export default Log_in


