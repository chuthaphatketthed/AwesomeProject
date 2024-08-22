import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ padding: 5 , marginTop : -25 ,borderBottomWidth : 1 , margin : 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20 }}>Location</Text>
                <Text style={{ color: '#444444' }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2 }} source={require("../../assets/week3/map.jpg")} />
            </View>
        </View>
    );
}
