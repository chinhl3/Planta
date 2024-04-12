import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import AppStyles from './AppStyles';

const Model_paying = (props) => {
    // const { tongTien } = props
    const tongTien =100000;
    return (
        <Modal
            
            animationType="slide"
            transparent={true}
            
        >
            <View style={{ width: '100%', height: '10%', backgroundColor:'red' }}>
                {/* <View style={{ flexDirection: "row", justifyContent: 'space-between', marginLeft: 24, marginRight: 24 }}>
                    <Text>Tạm tính</Text>
                    <Text>{tongTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + "đ"}</Text>

                </View>
                <TouchableOpacity style={[AppStyles.backgroundColorhgreen, { width: 347, height: 50, marginLeft: 24, marginRight: 24, marginTop: 20 }]}>
                    <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>
                        Tiến hành thanh toán
                    </Text>
                </TouchableOpacity> */}
            </View>

        </Modal>
    )
}


export default Model_paying
const styles = StyleSheet.create({
    centeredView: {
        
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:"147%",

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