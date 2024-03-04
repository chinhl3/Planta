import { AppState, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Img_header from '../../../common/Img_header'
const Log_in = () => {
    return (
        <View>
            <Img_header 
                require1={require('../../../resources/hinh_nen_log_In.png')}
            />
        </View>
    )
}

export default Log_in


