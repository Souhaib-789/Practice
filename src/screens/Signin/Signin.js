import React, { useState } from "react";
import {  StyleSheet, TouchableOpacity, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import Input from "../../components/Input";
import { Colors } from "../../config/Colors";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const Signin = () => {


    const [email, setemail] = useState()
    const [name, setname] = useState()
    const [password, setpassword] = useState()
    const [confirmPassword, setconfirmPassword] = useState()
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TextComponent text={'Signin'} style={styles.heading} />

            <Input
                placeholder='Enter Email'
                value={email}
                onChangeText={(e) => setemail(e)}
            />

            <Input
                placeholder='Enter Password'
                value={password}
                onChangeText={(e) => setpassword(e)}
            />

            <View style={styles.flex}>
                <TextComponent text={"Don't have an account ?"} style={styles.heading} />
                <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                    <TextComponent text={"  Create One"} style={styles.heading} />
                </TouchableOpacity>
            </View>

            <Button title={'Signin'}  />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
        padding: 20
    },
})

export default Signin;