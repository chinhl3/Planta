import { View, Text, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppStyles from '../../../common/AppStyles'
import { useSelector } from 'react-redux'
import axios from 'react-native-axios'

const Update_info = ({navigation}) => {
    const [password, setpassword] = useState('')
    const [namenew, setnamenew] = useState('')
    const nameuser = useSelector((state) => state.user)
    const [check,setcheck]=useState(null)
    console.log(nameuser.user.email)

    const getvalue_newname = (text) => {
        setnamenew(text)
    }
    const getvalue_pass = (text) => {
        setpassword(text)
    }
    console.log(namenew)
    console.log(password)

    const update = async () => {
        try {
            const response = await axios.put('http://10.0.2.2:6868/users/update', {
                "email": nameuser.user.email,
                "password": password,
                "name": namenew
            })
            console.log(response.data.status)
            if(response.data.status==true){
                setcheck(true)
            }else{
                setcheck(false)
            }
        } catch (error) {
            console.log(error)
        }
      
        
    }
    const go_home =()=>{
        navigation.navigate('Navigationtab')
    }
    return (
        <View style={AppStyles.cotainer}>

            <View style={[AppStyles.view_row, { width: '100%', marginTop: 10 }]}>
                <TouchableOpacity onPress={()=>go_home()}>
                    <Image source={require('../../../resources/images/back.png')} />
                </TouchableOpacity>
                <Text style={[AppStyles.textfooter, { marginLeft: '25%' }]}>CHỈNH SỬA THÔNG TIN</Text>
            </View>
            <TouchableOpacity>
                <Image style={{ width: 120, height: 120 }} source={require('../../../resources/images/san_pham1.png')} />
            </TouchableOpacity>
            <Text style={{ width: 275, fontSize: 14, color: 'black', marginTop: 40 }}>
                Thông tin sẽ được lưu cho lần mua kế tiếp Bấm vào thông tin chi tiết để chỉnh sửa.
            </Text>
            <TextInput style={AppStyles.text_input_update_info}
                value={nameuser.user.email}
            >

            </TextInput>
            <TextInput style={AppStyles.text_input_update_info}
                placeholder='password new'
                onChangeText={getvalue_newname}
                value={namenew}
            >
            </TextInput>
            <TextInput style={AppStyles.text_input_update_info}
                placeholder='name'
                onChangeText={getvalue_pass}
                value={password}
            >
            </TextInput>
            {
                check==null || check==false ?null:<Text style={{fontSize:22,color:"red",}}>cập nhât thông tin thành công</Text>
            }
            

            <TouchableOpacity style={[AppStyles.backgroundColorhgreen, { width: 347, height: 50, marginTop: "90%", marginLeft: 24, marginRight: 24 }]}
            onPress={()=>update()}
            >
                <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>
                    LƯU THÔNG TIN
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Update_info