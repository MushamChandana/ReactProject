import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
function Listexample() {
    const datalist = [
        //     {
        //     image: require('../assets/carrots.jpeg'),
        //        name: 'chandana',
        //         id: 300,
        //         phone: 9505955908
        //    },
        //     {
        //         image: require('../assets/carrots.jpeg'),
        //         name: 'madhuri',
        //         id: 400,
        //         phone: 9505955908
        //     },
        //     {
        //         image: require('../assets/carrots.jpeg'),
        //         name: 'phani',
        //         id: 500,
        //         phone: 9505955908
        //     },
        //     {
        //         image: require('../assets/carrots.jpeg'),
        //         name: 'narendra',
        //         id: 600,
        //         phone: 9505955908
        //     },
        //     {
        //         image: require('../assets/carrots.jpeg'),
        //         name: 'siri',
        //         id: 900,
        //         phone: 9505955908
        //     },
        //     {
        //         image: require('../assets/carrots.jpeg'),
        //         name: 'vinx',
        //         id: 1000,
        //         phone: 950595590
        //     }
    ]
    return (
        <ScrollView>

            <View style={{ flex: 1 }}>
                {(datalist.length == 0) ?
                    <View style={{backgroundColor:'#CCA284',height:800}}>
                        <Image source={require('../assets/bubbles.jpeg')}
                        style={{marginTop:250, width:150,height:150,alignSelf:'center',justifyContent:'center'}}/>
                        <Text style={{alignSelf:'center',justifyContent:'center',fontSize:20,marginTop:10,fontWeight:'bold'}}>NO ITEMS FOUND</Text>
                    </View> :
                    <View>
                        {/* <Text>ARRAY OF LENTH IS {datalist.length}</Text> */}

                        {datalist.map((item, index) => (
                            <TouchableOpacity key={index}
                                onPress={() => console.log(item)}
                            >


                                <View style={{
                                    flexDirection: 'row', height: 60, borderColor: '#B65809', borderRadius: 8,
                                    borderWidth: 3, margin: 30,
                                    alignItems: 'center', backgroundColor: '#F7C69D', justifyContent: 'space-around'
                                }}>
                                    <View style={{ flexDirection: 'row' }} >
                                        <Image
                                            source={item.image}
                                            style={{ width: 30, height: 30, alignSelf: 'center' }}
                                        />
                                        <View style={{ marginLeft: 10 }}>
                                            <Text>{item.name}</Text>
                                            <Text>{item.phone}</Text>
                                        </View >
                                    </View>

                                    <View>

                                        <Text>{'\u20B9'}{item.id}</Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                }
            </View>


        </ScrollView>
    );
}
export default Listexample;