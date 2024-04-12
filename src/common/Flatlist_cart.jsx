import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppStyles from './AppStyles'
import Model_delete_cart from './Model_delete_cart'
import { useSelector } from 'react-redux'
import { get_product_cart_user } from '../planta/screens/redux/Apiuser'
import { tang_sl,giam_sl,add_to_pay } from '../planta/screens/redux/Reducer'
import { useDispatch } from 'react-redux'

const Flatlist_cart = (props) => {

    const{show_modelall,test,go_to_pay}=props;
   
    const dispatch = useDispatch();
    const stateCart = useSelector((state) => state.user)
    const [arrcart, set_arrcart] = useState([])
    const [tongTien, set_tongTien] = useState(0)
    const [arr_product_focus, set_arr_product_focus] = useState([])
    const[id_product_delete, set_id_product_delete] = useState('');
    useEffect(() => {
        dispatch(get_product_cart_user(stateCart.user.email))
    }, [])

    useEffect(() => {
        set_arrcart(stateCart.cart)
    }, [stateCart.cart])
    const [focuss, set_forcuss] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const item_focused = (id, item) => {

        //  khi một mục được chọn
        const index = focuss.indexOf(id);
        // Kiểm tra xem sản phẩm đã được chọn trước đó hay chưa
        if (index === -1) {
            // Nếu chưa được chọn trước đó, thêm sản phẩm vào danh sách các sản phẩm đã được chọn
            set_forcuss([...focuss, id])
            set_arr_product_focus([...arr_product_focus, item])
        } else {
            // Nếu đã được chọn trước đó, loại bỏ sản phẩm khỏi danh sách các sản phẩm đã được chọn
            set_forcuss(focuss.filter(item => item !== id))
            set_arr_product_focus(arr_product_focus.filter(item => item.id !== id))
        }

    }

    // Kiểm tra xem một sản phẩm có được chọn hay không
    const isItemSelected = (id) => {
        return focuss.includes(id);
    };
    // hiển thị module xóa 1 sản phẩm
    const show_model = (id) => {
        setModalVisible(true)
        set_id_product_delete(id)
    
       
    }
    // tắt model xóa 1 sản phẩm
    const off_model = () => {
        setModalVisible(false)
    }
    // tính tông tiền 
    useEffect(() => {

        let tamp = 0
        for (let i = 0; i < arr_product_focus.length; i++) {
            tamp = tamp + (arr_product_focus[i].price * arr_product_focus[i].quantity)
        }
        set_tongTien(tamp)
        if (arrcart.length == 0) {
            set_tongTien(0)
        }
    }, [focuss])
    const paying = () => {
        dispatch(add_to_pay(arr_product_focus))
        go_to_pay(tongTien)
    }
    const renderitem = ({ item }) => {
        return (
            <View >
                <View style={
                    {
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        marginTop: 20
                    }
                }>
                    <View style={{ width: 80, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => item_focused(item.id, item)}
                        >
                            <Image source={isItemSelected(item.id) ? require('../resources/images/da_chon.png') : require('../resources/images/chua_chon.png')} />
                        </TouchableOpacity>
                    </View>
                    <Image style={AppStyles.img_product_cart} source={{ uri: item.img[0] }} />
                    <View style={{ width: 200 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={AppStyles.text_product_cart}>{item.name}</Text>
                            <View style={AppStyles.gach_doc}></View>
                            <Text>{item.like}</Text>
                        </View>
                        <Text style={AppStyles.text_green}>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <TouchableOpacity
                            onPress={()=>dispatch(giam_sl(item.id))}
                            >
                                <Image style={{ width: 20, height: 20 }} source={require('../resources/images/minus-square.png')} />

                            </TouchableOpacity>
                            <View style={{
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text>{item.quantity}</Text>
                            </View>
                            <TouchableOpacity
                            onPress={()=>dispatch(tang_sl(item.id))}
                            >
                                <Image style={{ width: 20, height: 20 }} source={require('../resources/images/plus-square.png')} />

                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity style={{ borderBottomWidth: 1, marginLeft: 40 }}
                                    onPress={() => show_model(item.id)}
                                >
                                    <Text style={{ fontSize: 16, color: 'black' }}>Xoa</Text>

                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>


                </View>




            </View>
        )
    }
    return (
        <View style={{ width: '100%' }}>
            <View
                style={{
                    width: "100%",
                    height: focuss==''?'97%':"87%"
                }}
            >
                <FlatList
                    data={arrcart}
                    renderItem={renderitem}
                />
            </View>


            <View >
                {modalVisible == true  ? 
                <Model_delete_cart 
                    id={id_product_delete}
                    off_model={off_model}
                    action={1}
                    
                /> : <View></View>}
            </View>
            <View >
                {test == true  ? 
                <Model_delete_cart 
                text1={"Xác nhận xoá tất cả đơn hàng?"}
                text2={"Thao tác này sẽ không thể khôi phục."}
                off_model={show_modelall}
                action={2}
                /> : <View></View>}
            </View>

            {
                focuss != '' ?
                    <View style={{ width: '100%', height: '10%' }}>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginLeft: 24, marginRight: 24 }}>
                            <Text>Tạm tính</Text>
                            <Text>{tongTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}</Text>
                        </View>
                        <TouchableOpacity style={[AppStyles.backgroundColorhgreen, { width: 347, height: 50, marginLeft: 24, marginRight: 24, marginTop: 20 }]}
                            onPress={paying}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>
                                Tiến hành thanh toán
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                    : <View ></View>
            }
        </View>
    )
}

export default Flatlist_cart