import { View, Text, Image } from 'react-native'
import React from 'react'
import AppStyles from '../../../common/AppStyles'
import App_Flatlist_history from '../../../common/App_Flatlist_notification'

const Notification = () => {
  return (
    <View style={AppStyles.cotainer}>
      <View style={[AppStyles.view_row, { width: '100%', marginTop: 10 }]}>
       
        <Text style={[AppStyles.textfooter, { marginLeft: '35%' }]}>THONG BAO</Text>
      </View>
      <App_Flatlist_history/>


    </View>
  )
}

export default Notification