import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';






function Splash({navigation}) {
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Login')
        }, 3000);
    }, [])

    // useEffect(() => {
    //     const timer = setTimeout(() => console.log("Hello, World!"), 3000);

    //   }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#BBAFD0' }}>

            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/vinx.png')}
                    style={{ width: 200, height: 60,borderRadius:15,borderWidth:4,borderColor:'#7E46E0'  }} />

            </View>
        </View>
    )
}
export default Splash;