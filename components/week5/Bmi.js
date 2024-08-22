import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View ,FontAwesome} from "react-native";
import MyIcon from '../weeks3/MyIcon';


export default function Bmi() {
    const [weight, setWeight] = useState('23');
    const [height, setHeight] = useState('175');
    const [bmi, setBmi] = useState('0');
    const [He, setHe] = useState('height');
    const [Ic, setIc] = useState('Icon')
    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let thisBMI = (weight / (height / 100 * height / 100));
        setBmi(thisBMI.toFixed(2));
        console.log(bmi);
        console.log(thisBMI);
    

    console.log("STATE : ", weight, height, bmi ,He,Ic);

    let description = "";
    if (thisBMI < 18.5)
        description = "Underweight - eat a bagel!";
    else if (thisBMI >= 18.5 && thisBMI <= 24.99)
        description = "Normal - keep it up!";
    else if (thisBMI >= 25 && thisBMI <= 29.99)
        description = "Overweight - exercise more!";
    else if (thisBMI >= 30 && thisBMI <= 34.99)
        description = "Obese - get off the couch!";
    else if (thisBMI >= 35 && thisBMI <= 38.99)
        description = "Extremely Obese - take action!";
    

     setHe(description);   
};

    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
                <TextInput
                    value={weight}
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    placeholder="Input your weight" 
                    onChangeText={ (newWeight) => setWeight(newWeight) }
                    />

            </View>
            {/* แถวที่ 2 */}
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
                <TextInput
                    value={height}
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    placeholder="Input your height" 
                    onChangeText={ (newHeight) => setHeight(newHeight) }
                    />
            </View>
            {/* แถวที่ 3 */}
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
                <View style={{ backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                    <Text style={{ fontSize: 20 }}>{bmi}</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                    <Text style={{ fontSize: 20 }}>{He}</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}
            <TouchableOpacity Component onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "black", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        
    );
}
