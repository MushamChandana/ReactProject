import React from 'react';
import {View,Text,ImageBackground,Button} from 'react-native';
//import {Button} from 'react-native-elements';



  

function Login(){
    return(
<ImageBackground source={require('../assets/leaf.jpeg')}
style={{flex:1}}> 
 <Text style={{color:'#C8EBED',fontSize:40,alignSelf:'center',marginTop:110,fontWeight:'bold'}}>AERIALCO</Text>
<Text style={{color:'#DAE2E2',fontSize:20,alignSelf:'center'}}>behind the story</Text>
<View style={{  position:'absolute',
  bottom: 0,
  right: 15,
  left:15,
  height:450,
  backgroundColor:'white',
  borderRadius:30
  }}>
      <Text
       style={{alignSelf:'center',
       justifyContent:'center',fontSize:30,marginTop:28,fontWeight:'bold'}}>WELCOME !</Text>
    <Text style={{alignSelf:'center',marginTop:15,fontSize:20}}>lorem ipsum dolor sit amet,</Text>
    <Text style={{alignSelf:'center',fontSize:20}}>consectetur adipiscing elit</Text>
    
    <Button
          title="Sign Up"
          buttonStyle={{backgroundColor:`#ff7f50`,marginTop:20,borderRadius:8}}
          containerStyle={{width:300,height:50}}
          
          />
    </View>
</ImageBackground>
       
    );
}

export default Login