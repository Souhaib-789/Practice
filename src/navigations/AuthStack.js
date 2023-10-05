import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from "../screens/Signin/Signin";
import Signup from "../screens/Signup/Signup";

const AuthStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Signin" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}


export default AuthStack;