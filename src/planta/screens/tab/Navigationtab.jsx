import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'
import Findproducts from './Findproducts'
import Information from './Information';
import Notification from './Notification';
const Tab = createBottomTabNavigator();
const Navigationtab = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: () => null,
        tabBarStyle: {
          height: 60, // Điều chỉnh chiều cao của tabBar
        },
        labelStyle: {
          display: 'none', // Ẩn tên của tab (cũng có thể dùng trong tabBarOptions)
        },

      }}

    >
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => (

          <Image
            source={
              focused ?
                require('../../../resources/images/frame803.png')
                : require('../../../resources/images/home.png')
            }

            style={{ width: focused ? 20 : 30, height: 30 }}
          />

        ),

      }} />
      <Tab.Screen
        name="Findproducts"
        component={Findproducts}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (

            <Image
              source={
                focused ?
                  require('../../../resources/images/Frame804.png')
                  : require('../../../resources/images/search.png')
              }

              style={{ width: focused ? 20 : 30, height: 30 }}

            />

          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (

            <Image
              source={
                focused ?
                  require('../../../resources/images/Frame805.png')
                  : require('../../../resources/images/bell.png')
              }

              style={{ width: focused ? 20 : 30, height: 30 }}
            />

          ),
        }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (

            <Image
              source={
                focused ?
                  require('../../../resources/images/Frame806.png')
                  : require('../../../resources/images/user.png')
              }
              style={{ width: focused ? 20 : 30, height: 30 }}

            />

          ),
        }}
      />


    </Tab.Navigator>
  )
}

export default Navigationtab