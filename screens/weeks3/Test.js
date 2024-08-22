import React from 'react';
import { TextInput, View, Button, Alert, Text, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function Test() {
    return (
        <ScrollView>
            <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={30}
                multiline={false}
                placeholder="Please enter your email"
                returnKeyType="next"
                onChangeText={(text) => { }}
                defaultValue="Default text"
            />

            <Button
                title="Press me"
                onPress={() => Alert.alert("Simple Button pressed")}

                color="#58D68D"
            />
            <Text style={{ margin: 10 }}>Hello World</Text>

            <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 100, height: 100, borderRadius: 150 / 2 }} />

            <View style={{ flexDirection: 'column' }}>
                {/* Fixed Size */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                    <Image style={{ width: 150, height: 100 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    <Image style={{ width: 150, height: 150 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    <Image style={{ width: 150, height: 150, borderRadius: 150 / 2 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>
            </View>
            <FontAwesome name="heart"  size={32} color="black" />

        </ScrollView>
    );
}
