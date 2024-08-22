import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "../weeks3/MyIcon";

export default function Heartbeat() {    
    const [count, setCount] = useState(0);
    const onPressButton1 = () => {
        setCount(count + 1);;

    
        
    }
    return (
        <View style={{flexDirection:'row',padding:5,justifyContent:'space-around'}}>
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
    <TouchableOpacity onPress={onPressButton1}>
        <View style={{ padding: 10, borderRadius: 60 ,backgroundColor:"black" }}>
            <Text style={{ fontSize: 30, textAlign: "center" }}>
            <MyIcon name='heart' size={70} color='orange'  />
            </Text>
        </View>
    </TouchableOpacity>
    <View
          style={{ margin:20
           
          }}
        >
          <Text style={{ fontSize: 40 }}>{count}</Text>
        </View>
    </View>
        </View>
    );
}