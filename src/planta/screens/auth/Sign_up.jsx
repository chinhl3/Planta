import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import Img_header from '../../../common/Img_header'
import style from '../../../common/AppStyles'
import AppInput from '../../../common/AppInput'
import Buton_app from '../../../common/Buton_app'
import { signup } from '../redux/Apiuser'
import { useDispatch,useSelector } from 'react-redux'

const Sign_up = (props) => {
    const {navigation}=props
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);
    console.log('du lieu thay doi')
    console.log(userState.result_sign_up)
    useEffect(()=>{
        if(userState.result_sign_up==true){
            navigation.navigate('Log_in')
        }
    },[userState.result_sign_up])
    
    const [value_name, setvalue_name] = useState('');
    const [value_email, setvalue_email] = useState('');
    const [value_sdt, setvalue_sdt] = useState('');
    const [value_pass, setvalue_pass] = useState('');
    const [information, setinformation] = useState(null);

    const getValue_name = (text) => {
        setvalue_name(text);
    }
    const getValue_email = (text) => {
        setvalue_email(text);
    }
    const getValue_sdt = (text) => {
        setvalue_sdt(text);
    }
    const getValue_pass = (text) => {
        setvalue_pass(text);
    }
    
    const dang_ki = () => {
        if (value_name==''||value_email==''||value_sdt==''||value_pass==''){
            setinformation(false)
        }else{
            try {
                setinformation(true);
                const body = {
                    name: value_name,
                    email: value_email,
                    sdt: value_sdt,
                    password:value_pass
                }
                dispatch(signup(body));
            } catch (error) {
                console.log({error: error})
            }
          
        }
    }


    const img_style = () => {
        return {
            ...style.width_img_100,
            marginTop: -200
        }
    }
    const getContainerInputFocusStyle = () => {
        return {
            ...style.containerInput,
            borderColor: '#009245',
            borderWidth: 2
        }
    };
    const getContainerInputUnFocusStyle = () => {
        return {
            ...style.containerInput,
            borderColor: '#8B8B8B',
            borderWidth: 1,
        }
    };

    const getIconEyeStyle = () => {
        return {
            width: 29,
            height: 24
        }
    };

    const getInputTextStyle = () => {
        return {
            flex: 1
        }
    }
    const btl_style = () => {
        return {
            ...style.button_style,
            marginTop: 20
        }
    }
    // get value from inputtext
    
    return (
        <View style={{ alignItems: 'center', flex: 1 }}>
            <Img_header
                require1={require('../../../resources/images/hinh_nen_log-In.png')}
                style={{
                    width_img: img_style(),
                }}
            />
            <Text style={{
                fontSize: 30,
                fontWeight: '700',
                color: "black",
                fontFamily: 'Poppins-Regular'
            }}>Đăng ký</Text>
            <Text style={{
                fontSize: 18,
                fontWeight: '400',
                color: "black",
                fontFamily: 'Poppins-Regular'
            }}>Tạo tài khoản </Text>
            <AppInput
                placeholder={'Họ tên'}
                styles={{
                    containerFocus: getContainerInputFocusStyle(),
                    containerUnFocus: getContainerInputUnFocusStyle(),
                    icon: getIconEyeStyle(),
                    inputText: getInputTextStyle(),
                }}
                onchangeText={getValue_name}

            />
            <AppInput
                placeholder={'Email'}
                styles={{
                    containerFocus: getContainerInputFocusStyle(),
                    containerUnFocus: getContainerInputUnFocusStyle(),
                    icon: getIconEyeStyle(),
                    inputText: getInputTextStyle()
                }}
                onchangeText={getValue_email}

            />
            <AppInput
                placeholder={'Số điện thoại'}
                styles={{
                    containerFocus: getContainerInputFocusStyle(),
                    containerUnFocus: getContainerInputUnFocusStyle(),
                    icon: getIconEyeStyle(),
                    inputText: getInputTextStyle()
                }}
                onchangeText={getValue_sdt}

            />
            <AppInput
                placeholder={'Mật khẩu'}
                styles={{
                    containerFocus: getContainerInputFocusStyle(),
                    containerUnFocus: getContainerInputUnFocusStyle(),
                    icon: getIconEyeStyle(),
                    inputText: getInputTextStyle()
                }}
                onchangeText={getValue_pass}

            />
            {
                information==false?<Text style={{color:'red',}}>vui lòng điển đây đủ thông tin</Text>:<Text style={{color:'red',}}></Text>
            }
            
            <View style={{ marginTop: 15, flexDirection: 'row' }}>
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '400',
                        fontFamily: "Poppins-Regular",
                        color: "black",

                    }}
                >Để đăng ký tài khoản, bạn đồng ý</Text>

                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '400',
                        fontFamily: "Poppins-Regular",
                        color: "#009245",
                        marginLeft: 6
                    }}
                >
                    Terms &
                </Text>


            </View>
            <View style={{ flexDirection: 'row' }}>


                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '400',
                        fontFamily: "Poppins-Regular",
                        color: "#009245",
                        marginRight: 3
                    }}
                >
                    Conditions
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '400',
                        fontFamily: "Poppins-Regular",
                        color: "black",

                    }}
                >and</Text>
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '400',
                        fontFamily: "Poppins-Regular",
                        color: "#009245",
                        marginLeft: 3
                    }}
                >
                    Privacy Policy
                </Text>


            </View>
            <Buton_app
                style={{
                    btl: btl_style(),

                }}
                text={"Đăng kí "}
                onPress={dang_ki}
            >
            </Buton_app>
            <View style={{ flexDirection: 'row', marginTop: 20, height: 20 }}>
                <View style={{ borderBottomWidth: 2, borderBottomColor: '#4CAF50', width: 120, marginBottom: 10 }}></View>
                <Text style={{
                    marginLeft: 9,
                    marginRight: 9,
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                    fontWeight: '500',
                    color: "#000000",
                    textAlign: 'center'
                }}>Hoặc</Text>
                <View style={{ borderBottomWidth: 2, borderBottomColor: '#4CAF50', width: 120, marginBottom: 10 }}></View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 35 }}>
                <Image source={require('../../../resources/images/flat-color-icons_google.png')} />
                <View style={{ width: 30 }}></View>
                <Image source={require('../../../resources/images/logos_facebook.png')} />

            </View>
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                <Text style={{ color: "#000000" }}>Tôi đã có tài khoản</Text>
                <View style={{ width: 7 }}></View>
                <Text style={{ color: "#009245" }}>Đăng nhập </Text>
            </View>

        </View>
    )
}

export default Sign_up

const styles = StyleSheet.create({})