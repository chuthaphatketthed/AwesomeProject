import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

export default function Ex11() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex : 1 }}>   
      <View style={{ flex : 1, backgroundColor : '#50E3C2' }}></View>
      <View style={{ flex : 1, backgroundColor : '#E9967A' }}></View>   
    </View>
    <Button title="Next" onPress={() => { navigation.navigate("Ex12") }} />
    </View>
  );
}
