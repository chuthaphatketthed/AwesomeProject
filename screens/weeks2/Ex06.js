import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

export default function Ex03() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex : 1 , flexDirection : 'column', alignSelf: 'center', justifyContent:'center'}}>   
      <View style={{ backgroundColor : '#50E3C2' ,width: 70, height: 70  }}></View>  
      <View style={{ backgroundColor : '#E9967A' ,width: 70, height: 70 }}></View> 
      <View style={{ backgroundColor : '#40E0D0' ,width: 70, height: 70 }}></View>     
    </View>
    <Button title="Next" onPress={() => { navigation.navigate("Ex07") }} />
    </View>
  );
}
