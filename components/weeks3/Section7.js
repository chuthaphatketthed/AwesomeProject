import React from "react";
import { Image, Text, View } from "react-native";

export default function Section7() {
  return (
    <View style={{  borderBottomWidth: 1 ,
      justifyContent: "flex-start" ,flex: 3 }}>
      <Text style={{ fontSize: 22, color: "black" ,padding: 20,marginBottom: -31, marginTop: -15 }}>Room Type</Text>
      <View style={{ padding: 20 , flexDirection : 'row' }}>
        <Image
          style={{
            flex: 1,
            height : 120 , 
            marginBottom: -5,
            borderRadius: 10
          }}
          source={require("../../assets/week3/room-8.jpg")}

        />
        <View style={{  flex: 3,padding: 10 ,flexDirection : 'column' }}>
        <Text style={{ fontSize : 20 , color : 'black',marginTop: -8}}>Standard Twin Room</Text>
        <Text style={{ fontSize : 20 , color : 'red',marginTop: 35}}>$399.99</Text>
        <Text style={{ fontSize : 16 , color : 'grey', marginBottom: -55 }}>Hurry Up! This is your last room!</Text>
        </View>
      </View>
    </View>
       );
    }