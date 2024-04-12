import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Mainstack from './Mainstack';
import UserStack from '../auth/UserStack';
import {useSelector } from 'react-redux';
        


const Navigatinonstack = () => {
// lấy dữ liệu user trong reducer kiểm tra xem đăng nhập chưa nếu chưa đăng nhập thì ở chạy   <UserStack/> ngược lại thì    <Mainstack/>
const userState = useSelector((state)=>state.user)
// console.log(userState)
    return (
        <NavigationContainer>
            {userState.user==null||userState.user==false?<UserStack/>:<Mainstack/>}
        </NavigationContainer>

    )
}

export default Navigatinonstack