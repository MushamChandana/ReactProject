import React from 'react';
import {View,Text,Alert,Button} from 'react-native';
 

function Alertexample (){
  

  const block1 = () => {
    Alert.alert('hello')
    console.log('hello')
}

  return(
    <View style={{marginTop:80}}>
      <Button title="click"
                onPress={()=>block1()} />
                
      <Text>HELLO</Text>
    </View>
  );
}
export default Alertexample;