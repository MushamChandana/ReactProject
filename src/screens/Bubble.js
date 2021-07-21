import React, { useEffect } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

function Bubble({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000)
    }, [])
    return (

        <ImageBackground source={require('../assets/landscape.jpeg')}
            style={{ flex: 1 }}>

            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Image source={require('../assets/aerialco.jpeg')}
                    style={{ width: 180, height: 180, borderRadius: 90, borderWidth: 1, borderColor: '#113851' }} />

            </View>
        </ImageBackground>

    );
}
export default Bubble