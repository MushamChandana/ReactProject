import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Condition() {
    const [isvalue, Setvalue] = useState(false);
    const [click, setclick] = useState(false);

    return (
        <View>
            <Text>hai hello </Text>
            {isvalue ? <Text>PHANI IS GOOD BOY</Text> : <Text>THIS IS CHANDANA</Text>}
            <Button
                title="ping me"

                onPress={() => Setvalue(!isvalue)} />
            <TouchableOpacity
                onPress={() => setclick(!click)}>
                <View style={{
                    width: 100, height: 100, borderColor: 'red', backgroundColor: click ? '#26881F' : '#D9D6DD'
                    , borderWidth: 2, borderRadius: 10, marginTop: 40, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'
                }}>
                    <MaterialCommunityIcons
                        name="truck-delivery"
                        size={25}
                        color= {click? '#26881f':'#6C6773'}

                />


            </View>
            </TouchableOpacity>

        </View>
    );
}
export default Condition;