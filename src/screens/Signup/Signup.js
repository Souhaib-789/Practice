import React, { useState } from "react";
import { StyleSheet, View } from 'react-native'
import TextComponent from "../../components/TextComponent";
import Input from "../../components/Input";
import { Colors } from "../../config/Colors";

const Signup = () => {


    const [email, setemail] = useState()
    const [name, setname] = useState()
    const [password, setpassword] = useState()

    return (
        <View>
            <TextComponent text={'Signup'} style={styles.heading} />


            <Input
                placeholder='Enter Name'
                value={name}
                onChangeText={(e) => setname(e)}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: Colors.WHITE
    }
})

export default Signup;