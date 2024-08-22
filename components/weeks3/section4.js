import React from 'react';
import { Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{margin : 10, marginTop : 5, padding : 5, borderTopWidth : 1,borderBottomWidth : 1, borderColor : 'black'  }}>
            <View style={{ padding : 5 }}>
                <Text style={{ fontSize : 20 }}>Hotel Description</Text>
                <Text style={{ color : '#444444' }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
                </Text>
            </View>
        </View>    
    );
}
