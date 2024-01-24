import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from "../config/Colors";
import { Fonts } from "../config/Fonts";


const Button = (props) => {
    return (
        <TouchableOpacity style={[styles.button , {...props?.style}]} onPress={props?.onPress} disabled={props?.disabled}>
            <Text style={[styles.text, {...props?.button_text_style}]}>{props?.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.PRIMARY,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 20,
        width: '100%',
        paddingVertical: 15,
    },
    text: {
        color: Colors.WHITE,
        fontFamily: Fonts?.Bold    }
})

export default Button;