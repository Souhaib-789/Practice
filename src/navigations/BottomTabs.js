import React from "react";
import { StyleSheet, View } from 'react-native'
import { Colors } from "../config/Colors";
import Home from "../screens/Home/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inbox from "../screens/Inbox/Inbox";
import Setting from "../screens/Settings/Settings";

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


const BottomTabs = () => {

    const Tab = createBottomTabNavigator();
    const HideHeader = { headerShown: false }
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icon;
                    if (route?.name == 'Home') {
                        icon = (<AntDesign name="home" size={size} color={color} />)
                    } else if (route?.name == 'Inbox') {
                        icon = (<Ionicons name="chatbox-ellipses-outline" size={size} color={color} />)
                    }else if (route?.name == 'Setting') {
                        icon = (<Ionicons name="settings-outline" size={size} color={color} />)
                    }
                    return (icon);
                },
                tabBarActiveTintColor: Colors.PRIMARY,
                tabBarInactiveTintColor: Colors.GREY,
                tabBarStyle: {
                    backgroundColor: Colors.WHITE,
                },
                tabBarItemStyle: {
                    padding: 3,
                },
            })}

        >
            <Tab.Screen name="Home" component={Home} options={HideHeader} />
            <Tab.Screen name="Inbox" component={Inbox} options={HideHeader} />
            <Tab.Screen name="Setting" component={Setting} options={HideHeader} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE
    }
})

export default BottomTabs;