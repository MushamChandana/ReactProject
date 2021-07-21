import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Divider } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
function Flexexample() {
    const [count, setCount] = useState(false);
    const [tick, setTick] = useState(false);
    const [isvalue, setvalue] = useState(true);
    const [click, setclick] = useState(false);
    const [log, setlog] = useState(false);
    const [link, setlink] = useState(false);

    const block1 = () => {
        setvalue(true)
        setclick(false)
        setlog(false)
        setlink(false)
    }
    const block2 = () => {
        setclick(true)
        setvalue(false)
        setlog(false)
        setlink(false)
    }
    const block3 = () => {
        setlog(true)
        setvalue(false)
        setlink(false)
        setclick(false)
    }
    const block4 = () => {
        setlink(true)
        setclick(false)
        setlog(false)
        setvalue(false)
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#A0A4A0' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',
             marginTop: 40 }}>
                <TouchableOpacity style={{
                    backgroundColor:
                        isvalue ? '#26881F' : '#D9D6DD',
                    width: 80, alignItems: 'center',
                    paddingVertical: 10, borderRadius: 8,
                }}
                    onPress={block1} >
                    <MaterialCommunityIcons
                        name="truck-delivery"
                        size={25}
                    />
                    <Text style={{ color: '#6C6773' }}>Delivery</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor:
                        click ? '#26881F' : '#D9D6DD', 
                        width: 80, alignItems: 'center', paddingVertical: 10,
                         borderRadius: 8,
                }}
                    onPress={block2} >

                    <MaterialCommunityIcons
                        name="barcode-scan"
                        size={25}
                        color='#6C6773'
                    />
                    <Text style={{ color: '#6C6773' }}>scan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor:log ? '#26881F' :  '#D9D6DD',
                 width: 80, alignItems: 'center', paddingVertical: 10, borderRadius: 8 }}
                onPress={block3} >                
                   <MaterialCommunityIcons
                        name="google-maps"
                        size={25}
                        color='#6C6773'
                    />
                    <Text style={{ color: '#6C6773' }}>map</Text>
                </TouchableOpacity >
                 <TouchableOpacity style={{ backgroundColor:link ? '#26881F' :  '#D9D6DD',
                  width: 80, alignItems: 'center', paddingVertical: 10, borderRadius: 8 }}
                onPress={block4}
                >
                    <MaterialCommunityIcons
                        name="plus"
                        size={25}
                        color='#6C6773'
                    />
                    <Text style={{ color: '#6C6773' }}>plus</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', 
                marginTop: 40 }}>
                    <CheckBox
                        checked={count}
                        checkedColor="green"
                        onPress={() => setCount(!count)} />
                    <View>
                        <Text style={{ fontSize: 20 }}>Baby-Cut-Carrots-1lb-Good</Text>
                        <Text style={{ fontSize: 20 }}>& Gather</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10 }}>Qty 1-Aisle W74</Text>
                            <Text style={{ fontSize: 10, color: 'red' }}>1 Offer</Text>
                        </View>
                        {/* <View style={{borderColor:'#B0AEB2',borderWidth:1}}/> */}
                        <Divider style={{ width: "100%" }} />

                    </View>

                    <Image source={require('../assets/carrots.jpeg')}
                        style={{ width: 50, height: 50 }} />

                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around',
             marginTop: 40 }}>
                <CheckBox
                    checked={tick}
                    checkedColor="green"
                    onPress={() => setTick(!tick)} />
                <View >
                    <Text style={{ fontSize: 20 }}>Organic Frozen Triple Berry</Text>
                    <Text style={{ fontSize: 20 }}>Blend-32oz-Good &</Text>
                    <Text style={{ fontSize: 20 }}>Gather</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <Text style={{ fontSize: 10 }}>Qty 1-Aisle W74</Text>
                        <Text style={{ fontSize: 10, color: 'red' }}>1 Offer</Text>
                    </View>
                    <Divider style={{ width: "100%" }} />

                </View>

                <Image source={require('../assets/carrots.jpeg')}
                    style={{ width: 50, height: 50 }} />



            </View>


        </View>

    )
}
export default Flexexample;