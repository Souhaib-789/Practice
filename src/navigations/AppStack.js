import React from "react";
import { StyleSheet, View } from 'react-native'
import { Colors } from "../config/Colors";
import Home from "../screens/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import Inbox from "../screens/Inbox/Inbox";
import Chat from "../screens/Inbox/Chat";
import Profile from "../screens/Profile/Profile";
import OptionDetail from "../screens/Settings/OptionDetail";

const AppStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="Inbox" component={Inbox} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Profile" component={Profile} />

            <Stack.Screen name="OptionDetail" component={OptionDetail} />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE
    }
})

export default AppStack;