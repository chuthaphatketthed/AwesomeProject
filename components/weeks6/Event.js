import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

export default function TourFlatList(props) {
    const tours = [
        { "id": "1", "title": "Truckfighters: Performing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg" , "month" : "DEC", "date" : "30", "datetime" : "Thu, DEC 30, 09.00 am" , "place" : "London" },
        { "id": "2", "title": "Paris Motor Show", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg" , "month" : "DEC", "date" : "31", "datetime" : "Thu, DEC 30, 09.00 am", "place" : "Paris"},
        { "id": "3", "title": "Bearded Theory Spring", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg" , "month" : "JAN", "date" : "01", "datetime" : "Thu, JAN 01, 09.00 am", "place" : "Canada"},
        { "id": "4", "title": "BBC Music Introducing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg" , "month" : "JAN", "date" : "11", "datetime" : "Thu, JAN 11, 09.00 am", "place" : "USA"},
        { "id": "5", "title": "Start-Up Meeting 2022", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg" , "month" : "JAN", "date" : "21", "datetime" : "Thu, JAN 21, 09.00 am", "place" : "Thailand"}
    ];
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try{
            let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await text.json();
            console.log("Load Data : " , data);
            //SET STATE
            setOnlineTours(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }
    useEffect(() => {
        loadOnlineTours();
    }, []);
    
    return (
        <View style={props.style}>
            <Text style={{fontSize:20}}>Up Coming Even</Text>
            <Text style={{color: "grey"}}>What's the Worst that Cloud Happend</Text>
            <FlatList
                horizontal={true}
                data={onlineTours}
                renderItem={({ item, index }) => {
                    console.log(item, index, item.uri);
                    return (
                        <View>
                            <View style={{ marginRight : 10}}>
                                <Image 
                                    style={{ width:310, height: 200, borderTopLeftRadius:10,borderTopRightRadius:10 }}
                                    source={{ uri: item.uri }}
                                />
                                <View
                                    style={{
                                        flexDirection:"row",                                 
                                        borderBottomLeftRadius:20,
                                        borderBottomRightRadius:20,
                                        borderWidth:2,
                                        borderColor:"grey"
                                        }}>
                                    
                                    <View style={{padding:10}}><Text style={{ fontSize: 20, color: "orange",textAlign:"left" }}>
                                        {item.month} 
                                    </Text>
                                    <Text style={{ fontSize:16, color:"grey",textAlign:'center'}}>{item.date}</Text>
                                    </View>
                                    <View style={{padding:10}}>
                                        <Text style={{fontSize: 20}}>{item.title}</Text>
                                        <Text style={{fontSize: 16,color:"grey"}}>{item.datetime}</Text>
                                        <Text style={{fontSize: 16,color:"grey"}}>{item.place}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}