import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigationtab from '../tab/Navigationtab';
import Productdetail1 from './Productdetail1';
import Directory from './Directory';
import Cart from './Cart';
import Screen_pay from './Screen_pay';
import Screen_pay2 from './Screen_pay2';
import Pay_succsess from './Pay_succsess';
import Update_info from './Update_info';

const Mainstack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Navigationtab"
        >
            <Stack.Screen name='Navigationtab'component={Navigationtab} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Productdetail1'component={Productdetail1} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Directory'component={Directory} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Cart'component={Cart} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Screen_pay'component={Screen_pay} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Screen_pay2'component={Screen_pay2} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Pay_succsess'component={Pay_succsess} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name='Update_info'component={Update_info} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Mainstack