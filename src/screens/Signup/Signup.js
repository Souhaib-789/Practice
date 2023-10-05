import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import Input from "../../components/Input";
import { Colors } from "../../config/Colors";
import Button from "../../components/Button";

const Signup = () => {


    const [email, setemail] = useState()
    const [name, setname] = useState()
    const [password, setpassword] = useState()
    const [confirmPassword, setconfirmPassword] = useState()

    return (
        <View style={styles.container}>
            <TextComponent text={'Signup'} style={styles.heading} />


            <Input
                placeholder='Enter Name'
                value={name}
                onChangeText={(e) => setname(e)}
            />

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

            <Input
                placeholder='Confirm Password'
                value={confirmPassword}
                onChangeText={(e) => setconfirmPassword(e)}
            />

            <Button title={'Signup'} />


        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
        padding: 20
    },
})

export default Signup;