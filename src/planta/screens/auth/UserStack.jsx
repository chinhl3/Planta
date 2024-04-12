import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Log_in from './Log_in';
import Sign_up from './Sign_up';


const UserStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Log_in"
        >
            <Stack.Screen name="Log_in" component={Log_in} options={{ headerShown: false }} />
            <Stack.Screen name="Sign_up" component={Sign_up} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default UserStack