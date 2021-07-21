import React from 'react';
import {View,Text,StyleSheet,Button} from "react-native";
  

function Stacknavi({navigation}){
    return(
        <View style={{flex:1,backgroundColor:'#60576E'}}>
            <Text style={styles.main}> hello</Text>
            <Button 
            title="PING"
            onPress={()=>navigation.navigate('Flexexample')}/>
        </View>
    );
}
const styles=StyleSheet.create({
    main:{
    alignSelf:'center',justifyContent:'center'
    }
});
export default Stacknavi;