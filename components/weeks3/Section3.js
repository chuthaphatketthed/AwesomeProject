import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ padding: 5 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 5 }}>
                <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: '#E76F51', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: "white" }}>9.5</Text>
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Excellet</Text>
                    <Text style={{ color: "gray" }}>See 801 views</Text>
                </View>
            </View>
        </View>
    );
}
