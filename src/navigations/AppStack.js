import React from "react";
import { StyleSheet, View } from 'react-native'
import { Colors } from "../config/Colors";
import Home from "../screens/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";

const AppStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE
    }
})

export default AppStack;