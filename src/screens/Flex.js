import React from 'react';
import {View,Text} from 'react-native';

function Flex(){
    return(
        <View style={{flex:1}}>
        <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',marginTop:30}}>
            <View style={{width:80,height:80,backgroundColor:"red"}}>
                <Text style={{alignContent:'space-around'}}>1</Text>
            </View>
            <View style={{width:80,height:80,backgroundColor:"green"}}></View>
            <View style={{width:80,height:80,backgroundColor:"yellow"}}></View>
            </View>
      
            <View style={{flex:1,alignSelf:'flex-start',justifyContent:'space-between'}}>
            
           
            <View style={{width:80,height:80,backgroundColor:"green"}}></View>
            <View style={{width:80,height:80,backgroundColor:"yellow"}}></View>
            </View> 
            <View style={{flex:1,alignItems:'flex-end'}}>
            <View style={{width:80,height:80,backgroundColor:"red"}}></View>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <View style={{width:80,height:80,backgroundColor:"red"}}></View>
            <View style={{width:80,height:80,backgroundColor:"green"}}></View>
            <View style={{width:80,height:80,backgroundColor:"yellow"}}></View>
            </View>
        </View>
        
        


    )
}
export default Flex;