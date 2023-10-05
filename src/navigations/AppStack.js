import React from "react";
import { StyleSheet, View } from 'react-native'
import { Colors } from "../config/Colors";
import Home from "../screens/Home/Home";

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Signin" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE
    }
})

export default AppStack;