import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppStyles from './AppStyles'

const App_Flatlist = (props) => {
    
    const { data,onclick } = props
   
    const render_item = ({ item }) => (
        <TouchableOpacity style={{width:155,height:202,}}
        onPress={()=>onclick(item._id)}
        >
            <View style={AppStyles.view_img_flatlist}>
                {item.img.length > 0 && (
                    <Image source={{ uri: item.img[0] }} style={{ width: '100%', height: 100,borderRadius:10 }} />
                )}
            </View>
            <View style={AppStyles.view_tt_flatlist}>
                <Text style={AppStyles.text_name_sp}>{item.name}</Text>

                {item.like && (
                    <Text >{item.like}</Text>
                )}
                <Text style={AppStyles.text_green}>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')+" đ"}</Text>
            </View>


        </TouchableOpacity>

    )


    return (
        <View style={{ alignItems: 'center' }}>
            <FlatList
                style={{ marginBottom: 60 }}
                scrollEnabled={false}
                data={data}
                renderItem={render_item}
                numColumns={2}
                key={2}
            />
        </View>

    )
}

export default App_Flatlist