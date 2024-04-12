import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppStyles from './AppStyles'
import { delete_cart } from '../planta/screens/redux/Reducer'
import { useDispatch, useSelector } from 'react-redux'
import { delete_prouct_cart,Delete_purchased_products } from '../planta/screens/redux/Apiuser'

const Model_delete_cart = (props) => {

    const { id, off_model, text1, text2, action, thanh_toan,email,mangsp } = props
    
    console.log(action)
    const dispatch = useDispatch()
    const userState = useSelector((state) => state.user);

    const delete_product = async () => {
        try {
            const data = {
                email: userState.user.email,
                id: id
            }
            const data_all = {
                email: userState.user.email,
                id: "all"
            }
            const data2 = {
                email:email,
                data: mangsp
            }
            if (action == 1) {
                dispatch(delete_prouct_cart(data))
            }
            if (action == 2) {
                dispatch(delete_prouct_cart(data_all))
            }
            if (action == 3) {

                thanh_toan()
                dispatch(Delete_purchased_products(data2))
            }

            off_model()
        } catch (error) {
            console.error('Lỗi xóa sản phẩm:', error);
        }
    }
    return (
        <View >
            <Modal
                animationType="slide"
                transparent={true}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {
                            text1 ?
                                <Text style={[styles.modalText, { color: 'black' }]}>{text1}</Text>
                                :
                                <Text style={[styles.modalText, { color: 'black' }]}>Xác nhận xoá đơn hàng?</Text>
                        }

                        {
                            text2 ?
                                <Text style={[styles.modalText, { color: 'black' }]}>{text2}</Text>
                                :
                                <Text style={styles.modalText}>Thao tác này sẽ không thể khôi phục.</Text>
                        }

                        <TouchableOpacity style={[AppStyles.backgroundColorhgreen, { width: 347, height: 50, marginLeft: 24, marginRight: 24 }]}
                            onPress={() => delete_product()}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>
                                Đồng ý
                            </Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomWidth: 1, marginTop: 20 }}>
                            <Text style={{ textAlign: 'center', fontSize: 16, color: 'black' }}
                                onPress={() => off_model()}
                            >
                                Hủy bỏ
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "147%",

    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

})
export default Model_delete_cart