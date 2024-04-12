import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppStyles from './AppStyles'
import axios from 'react-native-axios'
const App_Flatlist_history = () => {

    const [arrhistory, set_arrhistory] = useState([]);
    const [refreshing, set_refreshing] = useState(false);

    useEffect(() => {
        const getHistory = async () => {
            try {
                const response = await axios.get('http://10.0.2.2:6868/history')
                set_arrhistory(response.data.data)
            } catch (error) {
                console.error(error)
                console.log(error)
            }

        }

        getHistory()
    }, [refreshing])



    const renderItem = ({ item, index, }) => {
        // Tạo một đối tượng Date từ chuỗi ngày trong item
        const dateObject = new Date(item.date);
        // Lấy các thành phần ngày, tháng và năm
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1; // Phải cộng thêm 1 vì getMonth() trả về từ 0 đến 11
        const year = dateObject.getFullYear();
        return (
            <View style={{ marginLeft: '15%' }}>
                <View>
                    <Text style={AppStyles.text_notification}>{`Ngày: ${day}, Tháng: ${month}, Năm: ${year}`}</Text>
                    <View style={{ width: 279, borderBottomWidth: 1, borderBottomColor: 'gray' }}></View>
                </View>

                <FlatList
                    data={item.selected_product}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItemcon}
                   
                />
            </View>


        )
    }
    const renderItemcon = ({ item }) => {
        return (
            <View >

                <View style={AppStyles.view_item_notification}>
                    <Image source={{ uri: item.img[0] }} style={{ width: 80, height: 80, marginRight: 10 }} />
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#007537' }}>Đặt hàng thành công</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 16, color: 'black' }}>{item.name}</Text>
                            <View style={{ borderLeftWidth: 1, borderLeftColor: "black", marginLeft: 3, marginRight: 3 }}></View>
                            <Text>Ưa sang</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "black" }}>{item.so_luong}</Text>
                            <Text style={{ color: "black" }}>Sản phẩm</Text>
                        </View>

                    </View>



                </View>
            </View>

        )
    }

    const onRefresh = () => {
        set_refreshing(true);
        setTimeout(() => {
            set_refreshing(false);
        }, 3000);
    }
    return (

        <View style={{ marginTop: 40 }}>
            {arrhistory != '' ?
                <FlatList
                    data={arrhistory}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    refreshing={refreshing}
                    onRefresh={() =>onRefresh() }
                />
                :
                <View>
                    <Text>Hiện chưa có thông báo nào cho bạn</Text>
                </View>

            }

        </View>

    )
}

export default App_Flatlist_history