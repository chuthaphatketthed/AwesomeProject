import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from 'react-native';
export default function Hotel() {
    return (
        <View style={{marginTop : -25, padding : 5, borderWidth : 1, borderColor : '#EEEDEB', borderRadius : 10 ,margin : 20,backgroundColor: '#EEEDEB' }}>
            <View style={{ marginTop : 5 ,}}>
                <Text style={{ fontSize : 18,textAlign:'center',marginTop: -5 }}>Hilton San Francisco</Text>
            </View>
            <View style={{ flexDirection : "row", justifyContent : "center", marginTop : 5  }}>
                <View style={{ flexDirection : "row" }}>
                    <FontAwesome name="star" size={15} color="orange" />
                    <FontAwesome name="star" size={15} color="orange" />
                    <FontAwesome name="star" size={15} color="orange" />
                    <FontAwesome name="star" size={15} color="orange" />
                    <FontAwesome name="star-half" size={15} color="orange" />
                </View>
            </View>
            <View style={{ marginTop : 10 }}>
                <Text style={{ fontSize : 10,textAlign:'center',marginBottom : 10 }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>
        </View>    
    );
}
