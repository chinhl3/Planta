import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window');
import AppStyles from './AppStyles';

const Swiper_img = (props) => {
    const { data_img } = props
    return (
        <Swiper style={styles.wrapper} showsButtons={true} loop={false}
            width={width}
            height={200}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            prevButton={<Image style={styles.buttonText} source={require('../resources/images/back.png')}></Image>}  // Tùy chỉnh kiểu dáng nút "Prev"
            nextButton={<Image style={styles.buttonText} source={require('../resources/images/next.png')}></Image>}
        >
            <View style={styles.slide}>
                {
                    data_img == null ? <Image source={{ uri: 'https://i.pinimg.com/564x/ff/43/14/ff431446e5740ee248e7f1c12d1173d2.jpg' }} style={AppStyles.image_slide} /> : <Image source={{ uri: data_img[0] }} style={AppStyles.image_slide} />
                }

            </View>
            <View style={styles.slide}>
                {
                    data_img == null ? <Image source={{ uri: 'https://i.pinimg.com/564x/ff/43/14/ff431446e5740ee248e7f1c12d1173d2.jpg' }} style={AppStyles.image_slide} /> : <Image source={{ uri: data_img[1] }} style={AppStyles.image_slide} />
                }
                {/* <Image source={{ uri: data_img[1] }} style={AppStyles.image_slide} /> */}

            </View>
            <View style={styles.slide}>
                {
                    data_img == null ? <Image source={{ uri: 'https://i.pinimg.com/564x/ff/43/14/ff431446e5740ee248e7f1c12d1173d2.jpg' }} style={AppStyles.image_slide} /> : <Image source={{ uri: data_img[2] }} style={AppStyles.image_slide} />
                }
                {/* <Image source={{ uri: data_img[2] }} style={AppStyles.image_slide} /> */}
            </View>
        </Swiper>
    )
}
const styles = StyleSheet.create({
    wrapper: {
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        backgroundColor: '#999999',
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 3,
    },
    activeDot: {
        backgroundColor: 'black',
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 3,
    },
    buttonText: {
        width: 24,
        height: 24,
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
})

export default Swiper_img