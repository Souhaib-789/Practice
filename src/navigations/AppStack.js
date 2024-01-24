import React from "react";
import { StyleSheet, View } from 'react-native'
import { Colors } from "../config/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import Inbox from "../screens/Inbox/Inbox";
import Chat from "../screens/Inbox/Chat";
import OptionDetail from "../screens/Settings/OptionDetail";
import Extra from "../screens/extrafolder/Extra/Extra";
import RequestDetail from "../screens/extrafolder/Extra/RequestDetail";
import Profile from "../screens/extrafolder/Profile/Profile";
import EditProfile from "../screens/extrafolder/Profile/EditProfile";

const AppStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="Inbox" component={Inbox} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Profile" component={Profile} />

            <Stack.Screen name="OptionDetail" component={OptionDetail} />
            <Stack.Screen name="Extra" component={Extra} />
            <Stack.Screen name="RequestDetail" component={RequestDetail} />
            <Stack.Screen name="EditProfile" component={EditProfile} />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE
    }
})

export default AppStack;