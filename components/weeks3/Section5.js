import React from "react";
import {  View,  TextInput } from "react-native";
import MyIcon from "./MyIcon";

export default function Menu() {
  return (
    <View style={{ margin : 10 , padding : 3 , marginTop : -12 , paddingBottom : 5, borderBottomWidth : 1 ,}}>
      <View style={{ flexDirection : "row", marginTop : 5   }}>
        <MyIcon title="wifi" name="wifi" size={30} color="#009FBD" />
        <MyIcon title="coffee" name="coffee" size={30} color="#009FBD" />
        <MyIcon title="Bath" name="bath" size={30} color="#009FBD" />
        <MyIcon title="Car" name="car" size={30} color="#009FBD" />
        <MyIcon title="Paw" name="paw" size={30} color="#009FBD" />
      </View>
    </View>
  );
}
