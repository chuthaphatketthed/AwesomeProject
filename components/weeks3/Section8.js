import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Button, Image, Text, View } from 'react-native';
export default function Hotel() {
    return (
        <View style={{ padding : 10  , flexDirection :"row" ,justifyContent : "space-between" , marginTop :5}}>
            <View style={{ marginTop : -10 }}>
                <Text style={{ fontSize : 15, color : 'black' }}>Price</Text>
                <Text style={{ fontSize : 20 , color : 'red'}}>$399.99</Text>
                <Text style={{ fontSize : 15, color : 'black' }}>AVG/Night</Text>
            </View>
            <View>
             <Button 
             title="Book now" color="red" />
            </View>
        </View>    
    );
}
