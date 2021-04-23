import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";



function HomeScreen() {
   const [colorArray, setColorArray] = useState([
        { red:255, green:0, blue:0, id: "0"},
        { red:0, green:255, blue:0, id: "1"},
        { red:0, green:0, blue:255, id:"2"}
   ]);

   function renderItem({item}) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
    }

    return (

      <View style={styles.container}>
        <FlatList style={styles.list} data={colorArray} renderItem={renderItem} />
      </View>
  );

}

