import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Signup from '../../components/weeks3/Signup';
import Card from '../../components/weeks3/Card';
import Hotel from '../../components/weeks3/Hotel';
import MyIcon from '../../components/weeks3/MyIcon';
import Menu from '../../components/weeks3/Menu';
import { useNavigation } from '@react-navigation/native';
Signup

export default function Travel() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 50 }}>
                <Text>Text of Week 3 </Text>
                <Menu/>
                <Card />
                <Hotel/>
                <Signup />
                <MyIcon/>
            </View>
        </ScrollView>
    );
}
