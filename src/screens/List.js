import React from 'react';
import {View,Text, Image} from 'react-native';
function List(){
    const datalist=[
        {
            id:1,
            name:'chandu',
            image:require('../assets/vinx.png'),
            
        },
        {
            id:2,
            name:'sudha',
            image:require('../assets/vinx.png'),
        },
        {
            id:3,
            name:'siri',
            image:require('../assets/vinx.png'),
        }
    ];
    return(
        <View style={{flex:1}}>
            <Text>
                hello
            </Text>
            {
                datalist.map((item,index)=>(
                    <View key={index}>
                        <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'center'}}>
                        <Text >{item.id}</Text>
                        <Text>{item.name}</Text>
                        <Image
                        source={item.image}
                        style={{width:50,height:50}}
                        />
                        </View>
                    </View>
                )) }
        </View>
    );
}
export default List;